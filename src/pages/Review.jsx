import React, { useState, useEffect } from 'react';
import { Layers, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReview } from '../hooks/useReview';
import { questionsData } from '../questions';
import FlashcardMode from '../components/FlashcardMode';

export default function Review({ session }) {
  const navigate = useNavigate();
  const { queue, loading, processReview, refreshQueue } = useReview(session);
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (queue.length > 0) {
      // Map queue items to actual question objects
      const mapped = queue.map(q => questionsData.find(qd => qd.id === q.question_id)).filter(Boolean);
      setReviewQuestions(mapped);
    } else {
      setReviewQuestions([]);
    }
  }, [queue]);

  const handleFinish = () => {
    setFinished(true);
  };

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
        <p className="font-black text-slate-400 animate-pulse uppercase tracking-[0.2em] text-xs">Buscando Fila de Revisão...</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Revisão Concluída!</h1>
        <p className="text-slate-500 font-medium mb-8">Você zerou sua fila de repetição espaçada por hoje. Excelente trabalho!</p>
        
        <button 
           onClick={() => {
             setFinished(false);
             setStarted(false);
             refreshQueue();
             navigate('/dashboard');
           }}
           className="bg-slate-900 hover:bg-black text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all"
        >
           VOLTAR AO PAINEL
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Layers size={48} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">Revisão Inteligente</h1>
        
        {reviewQuestions.length > 0 ? (
          <div className="max-w-md mx-auto">
             <p className="text-slate-500 font-medium text-lg mb-8 leading-relaxed">
               Você tem <strong className="text-blue-600">{reviewQuestions.length} questões</strong> pendentes na sua fila de repetição espaçada hoje.
             </p>
             <button 
                onClick={() => setStarted(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-5 rounded-2xl shadow-xl transition-transform hover:-translate-y-1"
             >
                COMEÇAR REVISÃO AGORA
             </button>
             <button 
                onClick={() => navigate('/dashboard')}
                className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-2xl transition-colors"
             >
                Deixar para depois
             </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
             <p className="text-slate-500 font-medium text-lg mb-8 leading-relaxed">
               Sua fila está vazia! Você não tem nenhuma revisão agendada para hoje. Volte amanhã ou continue fazendo simulados.
             </p>
             <button 
                onClick={() => navigate('/study')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-xl transition-transform"
             >
                IR PARA ÁREA DE ESTUDOS
             </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <FlashcardMode 
      questions={reviewQuestions} 
      onFinish={handleFinish} 
      session={session} 
      onAnswer={processReview} 
    />
  );
}
