import React, { useState, useMemo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Target, Clock, Zap, Target as TargetIcon, ChevronRight, Layers, FileText, Database, Code, Briefcase, Settings } from 'lucide-react';
import { questionsData } from '../questions';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Study() {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);

  const emphases = [
    { id: 'Ciência de Dados', title: 'Ciência de Dados', icon: <Database size={24} />, color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { id: 'Analista de Sistemas - Engenharia de Software', title: 'Engenharia de Software', icon: <Code size={24} />, color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { id: 'Analista de Sistemas - Processos de Negócio', title: 'Processos de Negócio', icon: <Layers size={24} />, color: 'bg-purple-50 text-purple-600 border-purple-200' },
    { id: 'Engenharia Civil', title: 'Engenharia Civil', icon: <Briefcase size={24} />, color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { id: 'Engenharia de Petróleo', title: 'Engenharia de Petróleo', icon: <TargetIcon size={24} />, color: 'bg-rose-50 text-rose-600 border-rose-200' },
  ];

  const [selectedEmphasis, setSelectedEmphasis] = useState(emphases[0].id);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);

  // Índice único por disciplina: { count, cargos } — construído em uma passagem
  const disciplineIndex = useMemo(() => {
    const idx = {};
    questionsData.forEach(q => {
      if (!q.discipline) return;
      if (!idx[q.discipline]) idx[q.discipline] = { count: 0, cargos: new Set() };
      idx[q.discipline].count++;
      const cargos = Array.isArray(q.cargo) ? q.cargo : (q.cargo ? [q.cargo] : []);
      cargos.forEach(c => idx[q.discipline].cargos.add(c));
    });
    return idx;
  }, []);

  // Estatísticas por ênfase derivadas do índice
  const emphasisStats = useMemo(() => {
    const stats = {};
    emphases.forEach(e => {
      const related = Object.values(disciplineIndex).filter(d => d.cargos.has(e.id));
      stats[e.id] = {
        questions: related.reduce((sum, d) => sum + d.count, 0),
        topics: related.length,
      };
    });
    return stats;
  }, [disciplineIndex]);

  // Lista de tópicos da ênfase selecionada derivada do índice
  const currentTopics = useMemo(() => {
    return Object.entries(disciplineIndex)
      .filter(([, d]) => d.cargos.has(selectedEmphasis))
      .map(([name, d]) => ({ name, count: d.count }))
      .sort((a, b) => b.count - a.count);
  }, [disciplineIndex, selectedEmphasis]);

  const startSimulator = (type, mode = 'tutorial', disciplina = '', block = '') => {
    let url = `/simulator/${type}?mode=${mode}&cargo=${encodeURIComponent(selectedEmphasis)}`;
    if (disciplina) url += `&disciplina=${encodeURIComponent(disciplina)}`;
    if (block) url += `&block=${block}`;
    navigate(url);
  };

  const studyModes = [
    {
      id: 'livre',
      title: 'Simulado Livre',
      desc: 'Questões aleatórias com feedback imediato após cada resposta.',
      icon: <BookOpen size={24} />,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      border: 'border-blue-100 hover:border-blue-300',
      action: () => setShowDifficultyModal(true)
    },
    {
      id: 'cronometrado',
      title: 'Prova Real (Simulado 70q)',
      desc: 'Formato Oficial Petrobras: 70 questões, 4 horas de duração e critérios de eliminação reais.',
      icon: <Clock size={24} />,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      border: 'border-amber-100 hover:border-amber-300',
      action: () => startSimulator('avancado', 'exam')
    },
    {
      id: 'flashcard',
      title: 'Flashcards',
      desc: 'Memorização ativa. Vire a carta para ver a resposta e a explicação.',
      icon: <Zap size={24} />,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
      border: 'border-purple-100 hover:border-purple-300',
      action: () => startSimulator('avancado', 'flashcard')
    },
    {
      id: 'revisao',
      title: 'Revisão Inteligente',
      desc: 'Repetição espaçada das questões que você errou nos simulados.',
      icon: <Layers size={24} />,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100 hover:border-emerald-300',
      action: () => navigate('/review')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      
      {/* 1. Seletor de Ênfase */}
      <section>
        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <TargetIcon className="text-green-600" /> Selecione sua Ênfase
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {emphases.map(emp => {
            const isSelected = selectedEmphasis === emp.id;
            const stats = emphasisStats[emp.id];
            
            return (
              <button
                key={emp.id}
                onClick={() => setSelectedEmphasis(emp.id)}
                className={`p-6 rounded-3xl border-2 transition-all flex items-center gap-5 text-left relative overflow-hidden group
                  ${isSelected ? `border-green-500 bg-white shadow-lg` : `border-slate-200 bg-slate-50 opacity-70 hover:opacity-100 hover:border-slate-300`}`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 transition-transform"></div>
                )}
                
                <div className={`p-4 rounded-2xl ${isSelected ? emp.color : 'bg-slate-200 text-slate-400'}`}>
                  {emp.icon}
                </div>
                <div>
                  <h3 className={`font-black text-lg mb-1 ${isSelected ? 'text-slate-800' : 'text-slate-600'}`}>
                    {emp.title}
                  </h3>
                  <div className="flex gap-3 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1"><FileText size={12} /> {stats?.questions || 0} Questões</span>
                    <span className="flex items-center gap-1"><Layers size={12} /> {stats?.topics || 0} Tópicos</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* 2. Modos de Estudo */}
      <section>
        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <BookOpen className="text-green-600" /> Modos de Estudo
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {studyModes.map(mode => (
            <button
              key={mode.id}
              onClick={mode.action}
              className={`p-6 rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col h-full group ${mode.border}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${mode.bg} ${mode.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {mode.icon}
              </div>
              <h3 className="font-black text-slate-800 text-lg mb-2">{mode.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-1">
                {mode.desc}
              </p>
              <div className={`font-bold text-sm flex items-center gap-1 transition-colors ${mode.color}`}>
                Iniciar <ChevronRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Estudo por Tópico */}
      <section>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
            <Layers className="text-green-600" /> Micro Simulados por Tópico
          </h2>
          <p className="text-slate-500 font-medium mb-8">
            Foque nos assuntos que você mais precisa revisar. Selecione um tópico específico para gerar um mini simulado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {currentTopics.map(topic => (
              <button
                key={topic.name}
                onClick={() => startSimulator('avancado', 'micro', topic.name)}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-green-300 hover:shadow-md transition-all text-left group"
              >
                <span className="font-bold text-slate-700 text-sm truncate pr-2 group-hover:text-green-700 transition-colors">
                  {topic.name}
                </span>
                <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2 py-1 rounded-lg group-hover:bg-green-100 group-hover:text-green-700 transition-colors">
                  {topic.count} q
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Dificuldade para Simulado Livre */}
      {showDifficultyModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] p-8 max-w-md w-full shadow-2xl animate-fade-in-up">
            <h3 className="text-2xl font-black text-slate-800 mb-2">Nível de Dificuldade</h3>
            <p className="text-slate-500 font-medium mb-6">Escolha o nível do simulado livre.</p>
            
            <div className="space-y-3 mb-8">
               <button onClick={() => { setShowDifficultyModal(false); startSimulator('iniciante', 'tutorial') }} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                  <div className="font-black text-slate-700 text-lg group-hover:text-blue-700">🌱 Iniciante</div>
                  <div className="font-medium text-xs text-slate-500 mt-1">Fundamentos e teoria básica.</div>
               </button>
               <button onClick={() => { setShowDifficultyModal(false); startSimulator('intermediario', 'tutorial') }} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                  <div className="font-black text-slate-700 text-lg group-hover:text-blue-700">🚀 Intermediário</div>
                  <div className="font-medium text-xs text-slate-500 mt-1">Nível médio das provas da Cesgranrio.</div>
               </button>
               <button onClick={() => { setShowDifficultyModal(false); startSimulator('avancado', 'tutorial') }} className="w-full text-left p-4 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all shadow-sm group">
                  <div className="font-black text-slate-800 text-lg group-hover:text-green-700">🔥 Avançado <span className="text-[10px] uppercase tracking-widest text-green-600 ml-2">(Padrão Ouro)</span></div>
                  <div className="font-medium text-xs text-slate-600 mt-1">Questões complexas e pegadinhas reais da banca.</div>
               </button>
            </div>
            
            <button onClick={() => setShowDifficultyModal(false)} className="w-full py-4 text-slate-500 font-black hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors">
               CANCELAR
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
