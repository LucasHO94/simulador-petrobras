import React, { useState, useContext } from 'react';
import { Shield, HelpCircle, Mail, MessageCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import SupportModal from '../components/SupportModal';

const FAQS = [
  {
    q: 'Como funciona o sistema de Flashcards e Revisão Espaçada?',
    a: 'O sistema utiliza o algoritmo de Repetição Espaçada (SRS). Quando você estuda por flashcards e marca que errou uma questão, ela é automaticamente enviada para a sua Fila de Revisão para o dia seguinte. Questões que você acerta demoram mais tempo para reaparecer (3 dias), focando seu tempo onde você mais precisa.'
  },
  {
    q: 'O que significa a porcentagem de "Aproveitamento" no Dashboard?',
    a: 'Seu aproveitamento é calculado dividindo o número total de questões que você acertou pelo número total de questões que você já respondeu na plataforma. A meta recomendada para provas de alto nível da Cesgranrio é manter um aproveitamento acima de 80%.'
  },
  {
    q: 'Posso resetar meu progresso?',
    a: 'Atualmente, o progresso acumulado serve para personalizar o algoritmo ao seu perfil. Caso precise refazer questões específicas, recomendamos a ferramenta de Micro Simulados focada nos tópicos onde seu aproveitamento está vermelho ou amarelo.'
  },
  {
    q: 'Como funcionam as Metas Diárias?',
    a: 'Você pode definir sua meta diária nas configurações do seu perfil (10, 15 ou 20 questões). O Dashboard exibirá seu progresso em relação a essa meta. Cumprir a meta todos os dias aumenta sua "ofensiva", desbloqueando selos e mantendo sua constância de estudos.'
  }
];

export default function Help({ session }) {
  const { t } = useContext(LanguageContext);
  const [openFaq, setOpenFaq] = useState(null);
  const [showSupport, setShowSupport] = useState(false);
  const [supportSubject, setSupportSubject] = useState('Dúvida Geral');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenSupport = (subject) => {
    setSupportSubject(subject);
    setShowSupport(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden mb-12 animate-fade-in-up">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center shrink-0 border border-white/20">
                 <Shield size={48} className="text-blue-100" />
              </div>
              <div className="text-center md:text-left">
                 <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Central de Ajuda</h1>
                 <p className="text-blue-100 font-medium text-lg max-w-lg leading-relaxed">
                   Precisa de ajuda com o simulador ou encontrou algum problema? Estamos aqui para garantir que sua jornada até a aprovação seja perfeita.
                 </p>
              </div>
           </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '100ms'}}>
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow flex flex-col items-center text-center group cursor-pointer" onClick={() => handleOpenSupport('Suporte')}>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Fale com um Especialista</h3>
              <p className="text-slate-500 font-medium mb-6">Dúvidas sobre o conteúdo, recursos Premium ou sugestões para a plataforma.</p>
              <button className="mt-auto px-6 py-3 bg-slate-100 hover:bg-blue-50 text-blue-700 font-black text-sm uppercase tracking-widest rounded-xl transition-colors">
                 Enviar Mensagem
              </button>
           </div>
           
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow flex flex-col items-center text-center group cursor-pointer" onClick={() => handleOpenSupport('Problema')}>
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <AlertCircle size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Relatar um Problema</h3>
              <p className="text-slate-500 font-medium mb-6">Encontrou algum erro em uma questão ou bug no sistema? Avise nossa equipe.</p>
              <button className="mt-auto px-6 py-3 bg-slate-100 hover:bg-red-50 text-red-600 font-black text-sm uppercase tracking-widest rounded-xl transition-colors">
                 Reportar Erro
              </button>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
           <div className="flex items-center gap-3 mb-8 px-4">
              <HelpCircle className="text-green-600" size={28} />
              <h2 className="text-2xl font-black text-slate-800">Perguntas Frequentes</h2>
           </div>

           <div className="space-y-4">
              {FAQS.map((faq, index) => (
                 <div 
                   key={index} 
                   className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-blue-300 shadow-md' : 'border-slate-200 shadow-sm hover:border-blue-200'}`}
                 >
                    <button 
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                      onClick={() => toggleFaq(index)}
                    >
                       <span className={`font-black text-lg ${openFaq === index ? 'text-blue-700' : 'text-slate-800'}`}>
                         {faq.q}
                       </span>
                       <div className={`p-2 rounded-full transition-colors shrink-0 ${openFaq === index ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                          {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                       </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out origin-top ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="px-6 pb-6 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4">
                          {faq.a}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
        
        {/* Support Modal (Reaproveitado do que já existia ou criando novo se necessário) */}
        {showSupport && (
           <SupportModal 
             isOpen={showSupport} 
             onClose={() => setShowSupport(false)} 
             userSession={session} 
             initialSubject={supportSubject}
           />
        )}
      </div>
    </div>
  );
}
