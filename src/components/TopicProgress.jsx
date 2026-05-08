import React, { useMemo } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { questionsData } from '../questions';

/**
 * TopicProgress — Barras de progresso por disciplina
 * Mostra o avanço do candidato em cada área do conhecimento
 */
const TopicProgress = ({ history, onStartTopic }) => {

  // 1. Calcular total de questões disponíveis por disciplina
  const topicTotals = useMemo(() => {
    const totals = {};
    questionsData.forEach(q => {
      const d = q.discipline;
      if (!d) return;
      totals[d] = (totals[d] || 0) + 1;
    });
    return totals;
  }, []);

  // 2. Calcular questões respondidas corretamente por disciplina (via domain_stats)
  const topicProgress = useMemo(() => {
    if (!history || history.length === 0) return {};

    const progress = {};
    history.forEach(h => {
      if (!h.domain_stats) return;
      Object.entries(h.domain_stats).forEach(([discipline, stats]) => {
        if (!progress[discipline]) {
          progress[discipline] = { correct: 0, total: 0 };
        }
        progress[discipline].correct += stats.correct || 0;
        progress[discipline].total += stats.total || 0;
      });
    });
    return progress;
  }, [history]);

  // 3. Montar lista ordenada — disciplinas com questões disponíveis
  const topicList = useMemo(() => {
    return Object.entries(topicTotals)
      .filter(([, count]) => count >= 3) // Só mostrar disciplinas com 3+ questões
      .map(([discipline, totalAvailable]) => {
        const prog = topicProgress[discipline];
        const answered = prog?.total || 0;
        const correct = prog?.correct || 0;
        const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        const progressPct = Math.min((answered / totalAvailable) * 100, 100);

        let status = 'Ainda não iniciado';
        let statusColor = 'text-slate-400';
        let barColor = 'bg-slate-300';

        if (answered > 0) {
          if (rate >= 80) {
            status = `Dominado (${rate}% de acerto)`;
            statusColor = 'text-emerald-600';
            barColor = 'bg-emerald-500';
          } else if (rate >= 50) {
            status = `Em progresso (${rate}% de acerto)`;
            statusColor = 'text-amber-600';
            barColor = 'bg-amber-400';
          } else {
            status = `Precisa reforço (${rate}% de acerto)`;
            statusColor = 'text-red-500';
            barColor = 'bg-red-400';
          }
        }

        return { discipline, totalAvailable, answered, correct, rate, progressPct, status, statusColor, barColor };
      })
      .sort((a, b) => {
        // Ordenar: em progresso primeiro, depois não iniciados
        if (a.answered > 0 && b.answered === 0) return -1;
        if (a.answered === 0 && b.answered > 0) return 1;
        return b.progressPct - a.progressPct;
      });
  }, [topicTotals, topicProgress]);

  if (topicList.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-black text-slate-800 flex items-center gap-3 mb-6">
        <BookOpen className="text-green-600" size={24} />
        Progresso por Disciplina
      </h2>

      <div className="grid md:grid-cols-2 gap-3">
        {topicList.map(({ discipline, totalAvailable, answered, progressPct, status, statusColor, barColor }) => (
          <button
            key={discipline}
            onClick={() => onStartTopic && onStartTopic(discipline)}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all text-left group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 pr-2">
                <p className="font-black text-slate-800 text-sm group-hover:text-green-700 transition-colors leading-tight">
                  {discipline}
                </p>
                <p className={`text-[11px] font-bold mt-0.5 ${statusColor}`}>
                  {status}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                  {answered}/{totalAvailable}
                </span>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-green-500 transition-colors" />
              </div>
            </div>

            {/* Barra de progresso */}
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicProgress;
