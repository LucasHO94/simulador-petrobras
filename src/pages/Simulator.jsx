import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, 
  Target, Clock, Trophy, Pause, Play, Check, 
  ArrowLeft, ListChecks, Shield, Briefcase
} from 'lucide-react';

import { questionsData } from '../questions';
import { LanguageContext } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { generateCertificate } from '../utils/certificate';
import { useSimulado } from '../hooks/useSimulado';
import CesgranrioFeedback from '../components/CesgranrioFeedback';

const LISTA_CARGOS = [
  "Analista de Sistemas - Engenharia de Software",
  "Analista de Sistemas - Processos de Negócio",
  "Ciência de Dados",
  "Engenharia Civil",
  "Engenharia de Petróleo"
];

export default function Simulator({ session }) {
  const { type } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useContext(LanguageContext);
  
  const studyMode = searchParams.get('mode') || 'tutorial'; // 'tutorial', 'exam', 'micro'
  const disciplinaId = searchParams.get('disciplina');

  // Estados Locais
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [showCargoSelector, setShowCargoSelector] = useState(!disciplinaId && type !== 'geral');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [profile, setProfile] = useState(null);

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
        let filtered = questionsData.filter(q => q.discipline === disciplinaId || q.topic === disciplinaId || q.cargo === disciplinaId);
        
        if (blockId) {
          filtered = filtered.filter(q => q.block === parseInt(blockId));
        }
        
        pool = shuffleArray(filtered).slice(0, 30);
      } else if (selectedCargo) {
        // Prova Real ou Tutorial por Cargo
        // Proporção Oficial: 50 Básicos (Port + Ing) e 70 Específicos (Total 120)
        const basics = shuffleArray(questionsData.filter(q => 
          q.discipline === "Língua Portuguesa" || 
          q.discipline === "Língua Inglesa"
        )).slice(0, 50);
        
        const spec = shuffleArray(questionsData.filter(q => q.cargo === selectedCargo)).slice(0, 70);

        pool = [...basics, ...spec];
        
        // Se for modo Prova Real e tivermos questões suficientes, embaralha o conjunto final
        if (studyMode === 'exam') {
            pool = shuffleArray(pool); 
        }
      } else {
        // Modo Geral
        pool = shuffleArray(questionsData);
      }

      setFilteredQuestions(pool);
      setLoading(false);
    };

    if (!showCargoSelector || disciplinaId) {
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
        simulado.questions.forEach(q => {
          if (!domainStats[q.discipline]) {
            domainStats[q.discipline] = { correct: 0, total: 0 };
          }
          domainStats[q.discipline].total++;
          if (simulado.answers[q.id] === q.correctOption) {
            domainStats[q.discipline].correct++;
          }
        });

        try {
          const { error: insertError } = await supabase.from('petro_simulator_history').insert([{
            user_id: session.user.id,
            exam_type: selectedCargo || disciplinaId || 'geral',
            score: stats.score,
            correct_answers: stats.correct,
            total_questions: stats.total,
            domain_stats: domainStats,
            passed: stats.percentage >= 60
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

  if (showCargoSelector && !disciplinaId && type !== 'geral') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-green-900">
        <div className="bg-white rounded-[3rem] p-10 max-w-2xl w-full shadow-2xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-100 text-green-700 rounded-2xl">
              <Briefcase size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-800 tracking-tight">Selecione sua Ênfase</h1>
              <p className="text-slate-500 font-medium italic">Edital Petrobras 2021 - Padrão Cesgranrio</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-3 max-h-[400px] overflow-y-auto mb-8 pr-2 custom-scrollbar">
            {LISTA_CARGOS.map((cargo) => (
              <button
                key={cargo}
                onClick={() => setSelectedCargo(cargo)}
                className={`p-4 rounded-2xl border-2 text-left font-bold transition-all flex justify-between items-center ${selectedCargo === cargo ? 'border-green-500 bg-green-50 text-green-800 shadow-md' : 'border-slate-100 hover:border-green-200 text-slate-600'}`}
              >
                {cargo}
                {selectedCargo === cargo && <Check size={20} />}
              </button>
            ))}
          </div>

          <button
            disabled={!selectedCargo}
            onClick={() => setShowCargoSelector(false)}
            className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl shadow-xl transition-all disabled:opacity-30 flex items-center justify-center gap-3"
          >
            INICIAR SIMULADO <ChevronRight size={20} />
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
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(Object.keys(simulado.answers).length / filteredQuestions.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredQuestions.map((q, idx) => {
            const isAnswered = !!simulado.answers[q.id];
            const isCurrent = simulado.currentQuestionIndex === idx;

            return (
              <button
                key={q.id}
                onClick={() => goToQuestion(idx)}
                className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors 
                    ${isCurrent ? 'bg-green-50 border border-green-200 shadow-sm' : 
                    isAnswered ? 'bg-slate-100 opacity-60' : 'hover:bg-slate-100 border border-transparent'}`}
              >
                <span className={`text-sm font-bold ${isCurrent ? 'text-green-700' : 'text-slate-700'}`}>
                  Questão {idx + 1}
                </span>
                {isAnswered && <Check size={14} className="text-green-600" />}
              </button>
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
            <div className={`flex items-center gap-2 font-mono font-bold text-lg px-4 py-1.5 rounded-full border shadow-sm transition-colors bg-slate-50 text-slate-700 border-slate-200`}>
                <Clock size={18} />
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
                   <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Nota Final</p>
                      <p className="text-3xl font-black text-green-600">{simulado.calculateScore().score}</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Aproveitamento</p>
                      <p className="text-3xl font-black text-slate-800">{simulado.calculateScore().percentage}%</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Acertos</p>
                      <p className="text-3xl font-black text-slate-800">{simulado.calculateScore().correct}</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Total</p>
                      <p className="text-3xl font-black text-slate-800">{simulado.calculateScore().total}</p>
                   </div>
                </div>

                {/* GABARITO DETALHADO */}
                <div className="mt-8 mb-12 text-left bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                    <ListChecks size={24} className="text-green-600" /> Gabarito e Correção
                  </h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                    {filteredQuestions.map((q, i) => {
                      const userAnswer = simulado.answers[q.id];
                      const isCorrect = userAnswer === q.correctOption;
                      const isUnanswered = !userAnswer;

                      return (
                        <div key={q.id} className={`p-4 rounded-xl border flex items-center justify-between ${isCorrect ? 'bg-green-100 border-green-200' : isUnanswered ? 'bg-slate-100 border-slate-200' : 'bg-red-100 border-red-200'}`}>
                           <div className="flex flex-col">
                             <span className="font-bold text-slate-800">Questão {i + 1}</span>
                             <span className="text-xs text-slate-500">{q.discipline}</span>
                           </div>
                           <div className="flex items-center gap-4">
                             <div className="flex flex-col items-end">
                               <span className="text-[10px] font-bold text-slate-400 uppercase">Sua Resposta</span>
                               <span className={`font-black ${isUnanswered ? 'text-slate-400' : isCorrect ? 'text-green-700' : 'text-red-700'}`}>{userAnswer || '-'}</span>
                             </div>
                             <div className="flex flex-col items-end border-l pl-4 border-slate-300">
                               <span className="text-[10px] font-bold text-slate-400 uppercase">Correta</span>
                               <span className="font-black text-slate-800">{q.correctOption}</span>
                             </div>
                           </div>
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
                <div className="text-xl text-slate-800 font-medium leading-relaxed mb-10 selection:bg-green-100">
                  {simulado.currentQuestion.statement}
                </div>

                <div className="space-y-3 mb-10">
                  {Object.entries(simulado.currentQuestion.options).map(([letter, text]) => {
                    const isSelected = selectedOption === letter;
                    const isCorrect = simulado.currentQuestion.correctOption === letter;
                    const isConfirmed = showExplanation;

                    let classes = "w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ";
                    if (isConfirmed) {
                       if (isCorrect) classes += "border-emerald-500 bg-emerald-50 ";
                       else if (isSelected) classes += "border-red-500 bg-red-50 ";
                       else classes += "border-slate-100 opacity-40 ";
                    } else {
                       if (isSelected) classes += "border-green-500 bg-green-50 shadow-md ring-1 ring-green-500/20 ";
                       else classes += "border-slate-100 hover:border-green-300 bg-white ";
                    }

                    return (
                      <button
                        key={letter}
                        onClick={() => handleOptionSelect(letter)}
                        className={classes}
                      >
                        <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border-2 ${isSelected ? 'bg-green-600 border-green-600 text-white' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                          {letter}
                        </div>
                        <span className={`text-base font-bold ${isCorrect && isConfirmed ? 'text-emerald-900' : 'text-slate-700'}`}>{text}</span>
                      </button>
                    );
                  })}
                </div>

                {!showExplanation && (
                  <button
                    disabled={!selectedOption}
                    onClick={handleConfirm}
                    className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white px-12 py-5 rounded-2xl font-black shadow-2xl transition-all disabled:opacity-30 disabled:translate-y-0 transform hover:-translate-y-1 flex items-center justify-center gap-3"
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
