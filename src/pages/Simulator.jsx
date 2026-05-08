import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, 
  Target, Clock, Trophy, Pause, Play, Check, 
  ArrowLeft, ListChecks, Shield, Briefcase, AlertCircle,
  Cpu, Database, Layout, HardHat, Droplets
} from 'lucide-react';

import { questionsData } from '../questions';
import { LanguageContext } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { generateCertificate } from '../utils/certificate';
import { useSimulado } from '../hooks/useSimulado';
import CesgranrioFeedback from '../components/CesgranrioFeedback';
import FlashcardMode from '../components/FlashcardMode';

const LISTA_CARGOS = [
  { id: "Analista de Sistemas - Engenharia de Software", label: "Engenharia de Software", icon: <Cpu size={24} /> },
  { id: "Analista de Sistemas - Processos de Negócio", label: "Processos de Negócio", icon: <Layout size={24} /> },
  { id: "Ciência de Dados", label: "Ciência de Dados", icon: <Database size={24} /> },
  { id: "Engenharia Civil", label: "Engenharia Civil", icon: <HardHat size={24} /> },
  { id: "Engenharia de Petróleo", label: "Engenharia de Petróleo", icon: <Droplets size={24} /> }
];

export default function Simulator({ session }) {
  const { type } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useContext(LanguageContext);
  
  const studyMode = searchParams.get('mode') || 'tutorial'; // 'tutorial', 'exam', 'micro'
  const disciplinaId = searchParams.get('disciplina');
  const cargoFromUrl = searchParams.get('cargo');

  // Estados Locais — pré-preenche o cargo vindo da URL (Study.jsx passa cargo= nos links)
  const [selectedCargo, setSelectedCargo] = useState(cargoFromUrl || null);
  const [showCargoSelector, setShowCargoSelector] = useState(!disciplinaId && !cargoFromUrl);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [profile, setProfile] = useState(null);
  const [expandedResultId, setExpandedResultId] = useState(null);

  // Buffer de Questões Filtradas
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Hook Central
  const tempoTotal = studyMode === 'exam' ? 14400 : (filteredQuestions.length * 120); // 240min (prova real) ou 2min/q (outros)
  const simulado = useSimulado(filteredQuestions, studyMode, tempoTotal);

  useEffect(() => {
    const initSimulator = async () => {
      setLoading(true);
      
      // Checar Premium
      let profileData = null;
      try {
        const { data, error } = await supabase.from('petro_profiles').select('*').eq('id', session.user.id).maybeSingle();
        if (error) throw error;
        profileData = data;
        setProfile(profileData);
      } catch (e) {
        console.warn("Could not fetch profile:", e);
      }
      
      const isPremium = profileData?.is_premium || session?.user?.user_metadata?.isPremium;
      if (!isPremium && type !== 'iniciante' && type !== 'geral') {
        // Redireciona se tentar acessar avançado sem ser premium
        // navigate('/dashboard');
        // return;
      }

      // Shuffle helper (Fisher-Yates)
      const shuffleArray = (arr) => {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      };

      let pool = [];

      // Lógica de Filtro Cesgranrio
      if (disciplinaId) {
        // Micro Simulado por Disciplina (até 30 questões aleatórias)
        const blockId = searchParams.get('block');
        let filtered = questionsData.filter(q => {
          const cargoMatch = Array.isArray(q.cargo) 
            ? q.cargo.includes(disciplinaId) 
            : q.cargo === disciplinaId;
          return q.discipline === disciplinaId || q.topic === disciplinaId || cargoMatch;
        });
        
        if (blockId) {
          filtered = filtered.filter(q => q.block === parseInt(blockId));
        }
        
        pool = shuffleArray(filtered).slice(0, 30);
      } else if (selectedCargo) {
        // Prova Real (Novo Edital Cesgranrio: 70 Questões)
        // 20 Básicas: 10 Português + 10 Inglês
        const port = shuffleArray(questionsData.filter(q => q.discipline === "Língua Portuguesa")).slice(0, 10);
        const eng = shuffleArray(questionsData.filter(q => q.discipline === "Língua Inglesa")).slice(0, 10);
        
        // 50 Específicas: Bloco I (20), Bloco II (15), Bloco III (15)
        const cargoQuestions = questionsData.filter(q => {
          return Array.isArray(q.cargo) ? q.cargo.includes(selectedCargo) : q.cargo === selectedCargo;
        });

        const b1 = shuffleArray(cargoQuestions.filter(q => q.block === 1)).slice(0, 20);
        const b2 = shuffleArray(cargoQuestions.filter(q => q.block === 2)).slice(0, 15);
        const b3 = shuffleArray(cargoQuestions.filter(q => q.block === 3)).slice(0, 15);

        // Marca a seção de cada questão antes do embaralhamento do modo exam
        const tag = (qs, section) => qs.map(q => ({ ...q, _section: section }));
        const taggedPool = [
          ...tag(port, 'basicos'), ...tag(eng, 'basicos'),
          ...tag(b1, 'especificos'), ...tag(b2, 'especificos'), ...tag(b3, 'especificos'),
        ];

        pool = studyMode === 'exam' ? shuffleArray(taggedPool) : taggedPool;
      } else if (selectedCargo) {
        // Fallback: cargo selecionado mas sem bloco específico — até 50 questões aleatórias do cargo
        const cargoQs = questionsData.filter(q =>
          Array.isArray(q.cargo) ? q.cargo.includes(selectedCargo) : q.cargo === selectedCargo
        );
        pool = shuffleArray(cargoQs).slice(0, 50);
      }

      setFilteredQuestions(pool);
      setLoading(false);
    };

    if (!showCargoSelector || disciplinaId || selectedCargo) {
      initSimulator();
    }
  }, [type, selectedCargo, showCargoSelector, disciplinaId, session.user.id]);

  const hasSavedRef = useRef(false);

  // Salvar no banco quando finalizar
  useEffect(() => {
    if (simulado.isFinished && !hasSavedRef.current) {
      hasSavedRef.current = true;
      const saveResult = async () => {
        if (!session?.user?.id) return;
        
        const stats = simulado.calculateScore();
        
        const domainStats = {};
        const blockStats = {
          port: { correct: 0, total: 0 },
          eng: { correct: 0, total: 0 },
          b1: { correct: 0, total: 0 },
          b2: { correct: 0, total: 0 },
          b3: { correct: 0, total: 0 }
        };

        simulado.questions.forEach(q => {
          const isCorrect = simulado.answers[q.id] === q.correctOption;
          
          if (!domainStats[q.discipline]) {
            domainStats[q.discipline] = { correct: 0, total: 0 };
          }
          domainStats[q.discipline].total++;
          if (isCorrect) domainStats[q.discipline].correct++;

          // Block Stats for Elimination Logic
          if (q.discipline === "Língua Portuguesa") {
            blockStats.port.total++;
            if (isCorrect) blockStats.port.correct++;
          } else if (q.discipline === "Língua Inglesa") {
            blockStats.eng.total++;
            if (isCorrect) blockStats.eng.correct++;
          } else {
            if (q.block === 1) {
              blockStats.b1.total++;
              if (isCorrect) blockStats.b1.correct++;
            } else if (q.block === 2) {
              blockStats.b2.total++;
              if (isCorrect) blockStats.b2.correct++;
            } else if (q.block === 3) {
              blockStats.b3.total++;
                if (isCorrect) blockStats.b3.correct++;
            }
          }
        });

        const isEliminated = 
          (blockStats.port.total > 0 && blockStats.port.correct < blockStats.port.total * 0.5) ||
          (blockStats.eng.total > 0 && blockStats.eng.correct < blockStats.eng.total * 0.5) ||
          (blockStats.b1.total > 0 && blockStats.b1.correct < blockStats.b1.total * 0.5) ||
          (blockStats.b2.total > 0 && blockStats.b2.correct < blockStats.b2.total * 0.5) ||
          (blockStats.b3.total > 0 && blockStats.b3.correct < blockStats.b3.total * 0.5);

        try {
          const { error: insertError } = await supabase.from('petro_simulator_history').insert([{
            user_id: session.user.id,
            exam_type: selectedCargo || disciplinaId || 'geral',
            score: stats.score,
            correct_answers: stats.correct,
            total_questions: stats.total,
            domain_stats: domainStats,
            passed: !isEliminated && stats.percentage >= 60
          }]);
          if (insertError) throw insertError;
        } catch (error) {
          console.warn("Erro ao salvar resultado (RLS ou offline):", error);
        }
      };
      saveResult();
    }
  }, [simulado.isFinished, session, selectedCargo, disciplinaId, simulado]);

  // Sincroniza o estado local (UI) com o estado do hook (banco de respostas) sempre que a questão muda
  useEffect(() => {
    if (simulado.currentQuestion) {
      const savedAnswer = simulado.answers[simulado.currentQuestion.id];
      if (savedAnswer) {
        setSelectedOption(savedAnswer);
        if (studyMode === 'tutorial' || studyMode === 'micro') {
          setShowExplanation(true);
        }
      } else {
        setSelectedOption(null);
        setShowExplanation(false);
      }
    }
  }, [simulado.currentQuestionIndex, simulado.currentQuestion, simulado.answers, studyMode]);

  const handleOptionSelect = (optionId) => {
    // Se a questão já foi respondida e salva no hook, trava a seleção
    const isAnswered = !!simulado.answers[simulado.currentQuestion?.id];
    if (isAnswered) return;
    
    setSelectedOption(optionId);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    
    simulado.handleAnswer(simulado.currentQuestion.id, selectedOption);
    
    if (studyMode === 'tutorial' || studyMode === 'micro') {
      setShowExplanation(true);
    } else {
      // No modo Prova Real, vai direto para a próxima
      if (simulado.currentQuestionIndex < filteredQuestions.length - 1) {
        simulado.nextQuestion();
        setSelectedOption(null);
      } else {
        simulado.handleFinish();
      }
    }
  };
  const handlePrev = () => {
    simulado.prevQuestion();
  };

  const goToQuestion = (idx) => {
    simulado.goToQuestion(idx);
    setSidebarOpen(false);
  };

  const handleNext = () => {
    simulado.nextQuestion();
  };

  if (showCargoSelector && !disciplinaId) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>

        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 max-w-3xl w-full shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] z-10 animate-fade-in-up border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl shadow-lg shadow-green-500/20">
                <Briefcase size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">Área de Atuação</h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Edital Petrobras 2024
                </p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-tighter">Padrão da Banca</span>
              <span className="text-xl font-black text-slate-300">CESGRANRIO</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {LISTA_CARGOS.map((cargo) => (
              <button
                key={cargo.id}
                onClick={() => setSelectedCargo(cargo.id)}
                className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col gap-4 text-left ${
                  selectedCargo === cargo.id 
                    ? 'border-green-500 bg-green-50/50 ring-4 ring-green-500/10' 
                    : 'border-slate-100 hover:border-green-200 hover:bg-slate-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  selectedCargo === cargo.id ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-green-100 group-hover:text-green-600'
                }`}>
                  {cargo.icon}
                </div>
                <div>
                  <h3 className={`font-black text-sm uppercase tracking-wide transition-colors ${
                    selectedCargo === cargo.id ? 'text-green-900' : 'text-slate-700'
                  }`}>
                    {cargo.label}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 line-clamp-1">{cargo.id}</p>
                </div>
                {selectedCargo === cargo.id && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white p-1 rounded-full animate-bounce-in">
                    <Check size={14} />
                  </div>
                )}
              </button>
            ))}
          </div>

          <button
            disabled={!selectedCargo}
            onClick={() => setShowCargoSelector(false)}
            className="group w-full bg-slate-950 hover:bg-black text-white font-black py-6 rounded-[1.5rem] shadow-2xl transition-all disabled:opacity-30 flex items-center justify-center gap-4 text-lg active:scale-95"
          >
            INICIAR PREPARAÇÃO 
            <div className="bg-white/10 p-1 rounded-lg group-hover:translate-x-1 transition-transform">
              <ChevronRight size={24} />
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
        <p className="font-black text-slate-400 animate-pulse uppercase tracking-[0.2em] text-xs">Preparando Ambiente Cesgranrio...</p>
      </div>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-[3rem] p-12 max-w-xl w-full shadow-2xl text-center border border-yellow-200">
           <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={40} />
           </div>
           <h2 className="text-3xl font-black text-slate-800 mb-4">Cargo em Construção</h2>
           <p className="text-slate-600 font-medium mb-8 leading-relaxed">
             Ainda estamos processando e validando as questões de <strong>{selectedCargo}</strong> de acordo com o padrão Cesgranrio.
             <br /><br />
             Para testar o sistema agora, tente os cargos de <strong>Língua Portuguesa</strong> ou <strong>Engenharia de Software</strong> já disponíveis.
           </p>
           <button 
             onClick={() => navigate('/dashboard')}
             className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3"
           >
             <ArrowLeft size={18} /> VOLTAR AO PAINEL
           </button>
        </div>
      </div>
    );
  }

  if (studyMode === 'flashcard') {
    return <FlashcardMode questions={filteredQuestions} onFinish={() => navigate('/dashboard')} session={session} />;
  }

  const finalScore = simulado.isFinished ? simulado.calculateScore() : null;

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 no-copy">
      
      {/* SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-green-700 text-white">
          <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 hover:bg-green-600 px-2 py-1 rounded transition-colors text-sm font-bold">
            <ChevronLeft size={16} /> Voltar
          </button>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Respondidas</span>
              <span className="text-sm font-black text-slate-700">{Object.keys(simulado.answers).length} / {filteredQuestions.length}</span>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner relative">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_15px_rgba(22,163,74,0.4)]" 
              style={{ width: `${(Object.keys(simulado.answers).length / filteredQuestions.length) * 100}%` }}
            >
              <div className="absolute top-0 right-0 w-8 h-full bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredQuestions.map((q, idx) => {
            const isAnswered = !!simulado.answers[q.id];
            const isCurrent = simulado.currentQuestionIndex === idx;
            const prevSection = idx > 0 ? filteredQuestions[idx - 1]?._section : null;
            const showSectionHeader = q._section && q._section !== prevSection;

            return (
              <React.Fragment key={q.id}>
                {showSectionHeader && (
                   <div className="px-3 py-2 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1 mt-2">
                      {q._section === 'basicos' ? 'Conhecimentos Básicos' : 'Conhecimentos Específicos'}
                   </div>
                )}
                <button
                  onClick={() => simulado.goToQuestion(idx)}
                  className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-all duration-200
                      ${isCurrent ? 'bg-green-50 border border-green-200 shadow-sm' : 
                      isAnswered ? 'bg-slate-100 opacity-60' : 'hover:bg-slate-100 border border-transparent'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full transition-all ${
                      isCurrent ? 'bg-green-600 ring-4 ring-green-500/20' : 
                      isAnswered ? 'bg-slate-400' : 'bg-slate-200'
                    }`}></div>
                    <span className={`text-sm font-black tracking-tight transition-colors ${isCurrent ? 'text-green-800' : isAnswered ? 'text-slate-500' : 'text-slate-600'}`}>
                      Questão {idx + 1}
                    </span>
                  </div>
                  {isAnswered && <Check size={14} className="text-green-600" />}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={simulado.handleFinish}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-white bg-slate-800 hover:bg-black shadow-md rounded-xl font-bold transition-all"
          >
            Finalizar Simulado
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative no-copy">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="text-slate-600 md:hidden bg-slate-100 p-2 rounded-lg">
              <Menu size={20} />
            </button>
            <div>
              <h2 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-base">
                <Shield className="text-green-600" size={20} /> 
                {selectedCargo || disciplinaId || "Geral"} 
                <span className="hidden md:inline px-2 py-0.5 bg-slate-100 rounded text-[10px] font-black uppercase ml-2 text-slate-500">{studyMode}</span>
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-3 font-mono font-black text-xl px-6 py-2 rounded-2xl border-2 shadow-inner transition-all ${
              simulado.timeLeft < 600 ? 'bg-red-50 border-red-200 text-red-600 animate-pulse' : 'bg-slate-900 border-slate-800 text-green-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]'
            }`}>
                <Clock size={20} className={simulado.timeLeft < 600 ? 'text-red-500' : 'text-green-500'} />
                {simulado.formatTime(simulado.timeLeft)}
            </div>
            <button 
              onClick={simulado.togglePause}
              className={`p-2 rounded-lg border transition-all ${simulado.isPaused ? 'bg-amber-100 border-amber-300 text-amber-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
            >
              {simulado.isPaused ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
            </button>
          </div>
        </div>

        {/* QUESTION AREA */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 pb-32 no-copy focus:outline-none">
          {simulado.isFinished ? (
            <div className="max-w-4xl mx-auto py-12 animate-fade-in text-center">
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-200 mb-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-green-600 text-white rounded-3xl flex items-center justify-center shadow-lg">
                  <Trophy size={48} />
                </div>
                <h1 className="text-4xl font-black text-slate-900 mb-2">Relatório de Desempenho</h1>
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-8">Fim da Prova Petrobras</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                   <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-[2rem] text-white shadow-xl shadow-green-500/20 transform hover:scale-105 transition-transform">
                      <p className="text-[10px] font-black uppercase mb-2 opacity-80 tracking-widest">Nota Final</p>
                      <p className="text-4xl font-black">{finalScore?.score}</p>
                   </div>
                   <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm transform hover:scale-105 transition-transform">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Aproveitamento</p>
                      <p className="text-4xl font-black text-slate-900">{finalScore?.percentage}%</p>
                   </div>
                   <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm transform hover:scale-105 transition-transform">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Acertos</p>
                      <p className="text-4xl font-black text-slate-900">{finalScore?.correct}</p>
                   </div>
                   <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm transform hover:scale-105 transition-transform">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Total</p>
                      <p className="text-4xl font-black text-slate-900">{finalScore?.total}</p>
                   </div>
                </div>

                {/* GABARITO DETALHADO */}
                <div className="mt-8 mb-12 text-left bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                    <ListChecks size={24} className="text-green-600" /> Gabarito e Correção
                  </h3>
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                    {filteredQuestions.map((q, i) => {
                      const userAnswer = simulado.answers[q.id];
                      const isCorrect = userAnswer === q.correctOption;
                      const isUnanswered = !userAnswer;
                      const isExpanded = expandedResultId === q.id;

                      return (
                        <div key={q.id} className="flex flex-col gap-2">
                          <button 
                            onClick={() => setExpandedResultId(isExpanded ? null : q.id)}
                            className={`p-5 rounded-[1.5rem] border-2 flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99] text-left w-full ${
                              isCorrect 
                                ? 'bg-emerald-50/50 border-emerald-100' 
                                : isUnanswered 
                                  ? 'bg-slate-50 border-slate-100 opacity-60' 
                                  : 'bg-red-50/50 border-red-100'
                            }`}
                          >
                             <div className="flex items-center gap-4">
                               <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                                 isCorrect ? 'bg-emerald-600 text-white' : isUnanswered ? 'bg-slate-200 text-slate-500' : 'bg-red-600 text-white'
                               }`}>
                                 {i + 1}
                               </div>
                               <div className="flex flex-col">
                                 <span className="font-black text-slate-800 text-sm">{q.discipline}</span>
                                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{q.topic}</span>
                               </div>
                             </div>
                             <div className="flex items-center gap-6">
                               <div className="flex flex-col items-end">
                                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sua</span>
                                 <span className={`text-xl font-black ${isUnanswered ? 'text-slate-300' : isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                                   {userAnswer || '—'}
                                 </span>
                               </div>
                               <div className="w-px h-8 bg-slate-200"></div>
                               <div className="flex flex-col items-end">
                                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Gabarito</span>
                                 <span className="text-xl font-black text-slate-900">{q.correctOption}</span>
                               </div>
                               <div className={`ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                                  <ChevronRight size={16} className="text-slate-400" />
                               </div>
                             </div>
                          </button>
                          
                          {isExpanded && (
                            <div className="bg-white border-2 border-slate-100 rounded-[1.5rem] p-6 mb-4 animate-fade-in text-left">
                              <p className="text-sm text-slate-600 font-bold mb-4">
                                <span className="text-slate-400 font-black mr-2">ENUNCIADO:</span>
                                {q.statement}
                              </p>
                              <div className="space-y-2 mb-6">
                                {Object.entries(q.options).map(([letter, text]) => (
                                  <div key={letter} className={`text-xs p-2 rounded-lg flex gap-2 ${
                                    letter === q.correctOption ? 'bg-emerald-50 text-emerald-900 font-bold' : 
                                    letter === userAnswer ? 'bg-red-50 text-red-900' : 'text-slate-500'
                                  }`}>
                                    <span className="font-black">{letter}:</span> {text}
                                  </div>
                                ))}
                              </div>
                              <CesgranrioFeedback question={q} selectedOption={userAnswer} t={t} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button onClick={() => navigate('/dashboard')} className="bg-slate-800 text-white px-12 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                  VOLTAR AO PAINEL
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-[10px] font-black rounded-full uppercase tracking-wider">
                    QUESTÃO {simulado.currentQuestionIndex + 1} DE {filteredQuestions.length}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-tight">
                    {simulado.currentQuestion.discipline} • {simulado.currentQuestion.topic}
                  </span>
                </div>
                <div className="text-lg text-slate-800 font-bold tracking-normal leading-relaxed mb-10 selection:bg-green-100">
                  {simulado.currentQuestion.statement}
                </div>

                <div className="space-y-3 mb-10">
                  {Object.entries(simulado.currentQuestion.options).map(([letter, text]) => {
                    const isSelected = selectedOption === letter;
                    const isCorrect = simulado.currentQuestion.correctOption === letter;
                    const isConfirmed = showExplanation;

                    let classes = "w-full text-left p-5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-start gap-4 active:scale-[0.99] ";
                    if (isConfirmed) {
                       if (isCorrect) classes += "border-emerald-500 bg-emerald-50/50 shadow-md shadow-emerald-500/10 ";
                       else if (isSelected) classes += "border-red-500 bg-red-50 shadow-md shadow-red-500/10 ";
                       else classes += "border-slate-100 opacity-40 ";
                    } else {
                       if (isSelected) classes += "border-green-600 bg-green-50/50 shadow-lg shadow-green-500/10 scale-[1.02] ";
                       else classes += "border-slate-100 hover:border-green-300 hover:bg-slate-50 bg-white ";
                    }

                    return (
                      <button
                        key={letter}
                        onClick={() => handleOptionSelect(letter)}
                        className={classes}
                      >
                        <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border-2 transition-all duration-300 ${
                          isSelected ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-500/40' : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:border-green-400'
                        }`}>
                          {letter}
                        </div>
                        <span className={`text-[15px] font-medium leading-relaxed mt-1 ${isCorrect && isConfirmed ? 'text-emerald-900 font-bold' : isSelected ? 'text-green-900 font-bold' : 'text-slate-700'}`}>{text}</span>
                      </button>
                    );
                  })}
                </div>

                {!showExplanation && (
                  <button
                    disabled={!selectedOption}
                    onClick={handleConfirm}
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-[1.25rem] font-black shadow-[0_20px_40px_-10px_rgba(22,163,74,0.4)] transition-all disabled:opacity-30 disabled:translate-y-0 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mt-4"
                  >
                    CONFIRMAR RESPOSTA <ChevronRight size={20} />
                  </button>
                )}

                {showExplanation && (
                  <>
                    <CesgranrioFeedback 
                      question={simulado.currentQuestion} 
                      selectedOption={selectedOption} 
                      t={t} 
                    />
                    <button
                      onClick={handleNext}
                      className="w-full bg-slate-800 text-white px-12 py-5 rounded-2xl font-black shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 mt-8"
                    >
                      PRÓXIMA QUESTÃO <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM NAV FLOATER */}
        {!simulado.isFinished && (
           <div className="fixed bottom-0 left-0 right-0 md:left-72 bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
              <div className="max-w-3xl mx-auto flex justify-between items-center">
                  <button
                    onClick={handlePrev}
                    disabled={simulado.currentQuestionIndex === 0}
                    className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors disabled:opacity-20"
                  >
                    <ChevronLeft size={20} /> Anterior
                  </button>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest hidden sm:block">Foco: Petrobras 2026</div>
                  <button
                    onClick={simulado.nextQuestion}
                    disabled={simulado.currentQuestionIndex === filteredQuestions.length - 1}
                    className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors disabled:opacity-20"
                  >
                    Próxima <ChevronRight size={20} />
                  </button>
              </div>
           </div>
        )}
      </div>
    </div>
  );
}
