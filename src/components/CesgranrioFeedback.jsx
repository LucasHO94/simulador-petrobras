import React from 'react';
import { Lightbulb, Target, AlertCircle, Trophy, Check, X } from 'lucide-react';

/**
 * Componente de Feedback detalhado padrão Cesgranrio
 */
const CesgranrioFeedback = ({ question, selectedOption, t }) => {
  const { resolution } = question;
  if (!resolution) return null;

  const isCorrect = selectedOption === question.correctOption;

  return (
    <div className="animate-fade-in-up mt-8 border-t border-slate-200 pt-8 pb-10 no-copy">
      {/* Indicador de Acerto/Erro */}
      <div className={`p-5 rounded-2xl mb-8 flex items-center gap-4 font-black text-xl shadow-lg
        ${isCorrect
          ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white'
          : 'bg-gradient-to-r from-red-400 to-red-500 text-white'
        }`}>
        {isCorrect ? (
          <><Check size={32} /> {t('success_match', 'ACERTO EXATO!')}</>
        ) : (
          <><X size={32} /> {t('error_wrong', 'VOCÊ ERROU')}</>
        )}
      </div>

      <div className="space-y-6">
        {/* Papo Reto */}
        <div className="bg-green-50 shadow-sm p-6 rounded-2xl border border-green-100">
          <h4 className="font-black text-green-900 flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
            <Target size={20} className="text-green-600" /> {t('straight_talk_title', 'Papo Reto')}
          </h4>
          <p className="whitespace-pre-wrap leading-relaxed no-copy font-medium text-slate-700">{resolution.papoReto}</p>
        </div>

        {/* Pulo do Gato */}
        <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200">
          <h4 className="font-black text-amber-900 flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
            <Lightbulb size={20} className="text-amber-600" /> {t('pro_tip_title', 'O Pulo do Gato')}
          </h4>
          <p className="whitespace-pre-wrap leading-relaxed no-copy font-medium text-amber-900/80">{resolution.puloDoGato}</p>
        </div>

        {/* Cascas de Banana (Análise por Alternativa) */}
        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
          <h4 className="font-black text-red-900 flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
            <AlertCircle size={20} className="text-red-600" /> {t('pitfalls_title', 'Cascas de Banana')}
          </h4>
          <div className="space-y-4">
            {Object.entries(resolution.cascasDeBanana).map(([letter, explanation]) => (
              <div key={letter} className="flex gap-3 text-red-900/70 font-medium text-sm border-b border-red-200/30 pb-2 last:border-0 last:pb-0">
                <span className="font-black text-red-500 w-4">{letter}:</span>
                <p className="no-copy flex-1">{explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dica de Ouro */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
          <h4 className="font-black text-amber-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
            <Trophy size={20} className="text-emerald-600" /> {t('golden_tip_title', 'Dica de Ouro')}
          </h4>
          <p className="text-amber-900 font-bold text-lg leading-relaxed no-copy">{resolution.dicaDeOuro}</p>
        </div>
      </div>
    </div>
  );
};

export default CesgranrioFeedback;
