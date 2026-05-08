import React, { useMemo } from 'react';
import { CheckCircle2, TrendingUp, Target, Flame } from 'lucide-react';

/**
 * KPICards — Três cards de métricas pessoais no topo do Dashboard
 * Inspirado na tela de Dashboard do UpLinux.Cert, adaptado ao Petrobras
 */
const KPICards = ({ history, dailyGoal = 10, t }) => {
  const stats = useMemo(() => {
    if (!history || history.length === 0) {
      return { totalCorrect: 0, totalAnswered: 0, globalRate: 0, todayAnswered: 0 };
    }

    const today = new Date().toISOString().split('T')[0];

    let totalCorrect = 0;
    let totalAnswered = 0;
    let todayAnswered = 0;

    history.forEach(h => {
      totalCorrect += h.correct_answers || 0;
      totalAnswered += h.total_questions || 0;

      // Contar questões respondidas hoje
      const hDate = new Date(h.created_at).toISOString().split('T')[0];
      if (hDate === today) {
        todayAnswered += h.total_questions || 0;
      }
    });

    const globalRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    return { totalCorrect, totalAnswered, globalRate, todayAnswered };
  }, [history]);

  const dailyProgress = Math.min((stats.todayAnswered / dailyGoal) * 100, 100);
  const dailyDone = stats.todayAnswered >= dailyGoal;

  const rateColor =
    stats.globalRate >= 70 ? 'text-emerald-600' :
    stats.globalRate >= 50 ? 'text-amber-600' :
    'text-red-500';

  const rateLabel =
    stats.globalRate >= 70 ? 'Excelente!' :
    stats.globalRate >= 50 ? 'Em progresso' :
    'Foco na revisão';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

      {/* Card 1 — Questões Respondidas */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Questões Respondidas
          </span>
          <div className="p-2 bg-blue-50 rounded-xl">
            <CheckCircle2 size={16} className="text-blue-500" />
          </div>
        </div>
        <p className="text-4xl font-black text-slate-800 tracking-tighter leading-none mb-1">
          {stats.totalAnswered.toLocaleString('pt-BR')}
        </p>
        <p className="text-xs font-bold text-slate-400">
          <span className="text-emerald-600 font-black">{stats.totalCorrect}</span> corretas
        </p>
      </div>

      {/* Card 2 — Taxa de Acerto Global */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Taxa de Acerto
          </span>
          <div className="p-2 bg-emerald-50 rounded-xl">
            <TrendingUp size={16} className="text-emerald-500" />
          </div>
        </div>
        <p className={`text-4xl font-black tracking-tighter leading-none mb-1 ${rateColor}`}>
          {stats.globalRate}%
        </p>
        <p className="text-xs font-bold text-slate-400">{rateLabel}</p>
      </div>

      {/* Card 3 — Meta Diária */}
      <div className={`rounded-2xl border shadow-sm p-5 hover:shadow-md transition-shadow ${
        dailyDone ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Meta Diária
          </span>
          <div className={`p-2 rounded-xl ${dailyDone ? 'bg-emerald-200' : 'bg-amber-50'}`}>
            {dailyDone
              ? <Flame size={16} className="text-emerald-600" fill="currentColor" />
              : <Target size={16} className="text-amber-500" />
            }
          </div>
        </div>
        <p className={`text-4xl font-black tracking-tighter leading-none mb-1 ${dailyDone ? 'text-emerald-600' : 'text-slate-800'}`}>
          {stats.todayAnswered}/{dailyGoal}
        </p>

        {/* Barra de progresso */}
        <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${dailyDone ? 'bg-emerald-500' : 'bg-amber-400'}`}
            style={{ width: `${dailyProgress}%` }}
          />
        </div>
        <p className="text-xs font-bold text-slate-400 mt-1">
          {dailyDone ? '🎯 Meta batida hoje!' : `${Math.max(dailyGoal - stats.todayAnswered, 0)} restantes`}
        </p>
      </div>

    </div>
  );
};

export default KPICards;
