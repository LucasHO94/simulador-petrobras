import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, Target, Flame, Trophy, Play, LogOut, Check, X, Medal, Star, Award, TrendingUp, Settings, User, PieChart, AlertCircle, Shield, Clock, Sun, Users, ChevronRight, Mail, Zap, ListChecks } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { generateCertificate } from '../utils/certificate';
import SupportModal from '../components/SupportModal';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import KPICards from '../components/KPICards';
import TopicProgress from '../components/TopicProgress';


export default function Dashboard({ session }) {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

  // States Interativos Novos
  const [menuAberto, setMenuAberto] = useState(false);
  const [seloHoverId, setSeloHoverId] = useState(null);
  const [seloModal, setSeloModal] = useState(null);
  const [historicoCompletoAberto, setHistoricoCompletoAberto] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [radarData, setRadarData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);
  const [showCertificatesModal, setShowCertificatesModal] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [supportSubject, setSupportSubject] = useState('Suporte');
  const [dailyGoal, setDailyGoal] = useState(10);
  const [rawHistory, setRawHistory] = useState([]);
  const [showAllDomains, setShowAllDomains] = useState(false);

  const fetchHistory = async () => {
    if (!session?.user?.id) return;
    
    setLoadingHistory(true);
    try {
      const { data, error } = await supabase
        .from('petro_simulator_history')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRawHistory(data || []);
      
      // Map dos tipos para nomes amigáveis
      const mappedData = data.map(h => ({
        id: h.id,
        date: new Date(h.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
        type: h.exam_type.charAt(0).toUpperCase() + h.exam_type.slice(1),
        score: h.score,
        passed: h.passed,
        domain_stats: h.domain_stats
      }));
      setHistory(mappedData);

      // NOVO: Processamento para o Gráfico de Radar (Etapa 3)
      // Agregamos os últimos 5 simulados para ter uma média de desempenho por tema
      const statsAggregator = {};
      const recentTests = data.slice(0, 5);
      
      recentTests.forEach(test => {
         if (test.domain_stats) {
            Object.keys(test.domain_stats).forEach(domain => {
               if (!statsAggregator[domain]) statsAggregator[domain] = { correct: 0, total: 0 };
               statsAggregator[domain].correct += test.domain_stats[domain].correct;
               statsAggregator[domain].total += test.domain_stats[domain].total;
            });
         }
      });

      const chartData = Object.keys(statsAggregator).map(domain => ({
         subject: domain,
         fullMark: 100,
         A: Math.round((statsAggregator[domain].correct / statsAggregator[domain].total) * 100)
      }));

      setRadarData(chartData);

      // NOVO: Cálculo de Ofensiva (Streak) Real
      const calculateStreak = (historyData) => {
        if (!historyData || historyData.length === 0) return 0;
        
        const dates = [...new Set(historyData.map(h => 
          new Date(h.created_at).toISOString().split('T')[0]
        ))].sort().reverse();

        let currentStreak = 0;
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (dates[0] !== today && dates[0] !== yesterday) return 0;

        let checkDate = dates[0] === today ? new Date() : new Date(Date.now() - 86400000);
        
        for (let i = 0; i < dates.length; i++) {
          const dateStr = checkDate.toISOString().split('T')[0];
          if (dates.includes(dateStr)) {
            currentStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
          } else {
            break;
          }
        }
        return currentStreak;
      };

      setStreak(calculateStreak(data));
    } catch (err) {
      console.warn("Histórico local (offline) ou RLS restrito:", err);
      // Podemos manter history vazio ou setar um erro
      setHistory([]);
    } finally {
      setLoadingHistory(false);
    }
  };

  const fetchRanking = async () => {
    setLoadingRanking(true);
    try {
        const { data: historyData, error: hError } = await supabase
            .from('petro_simulator_history')
            .select('user_id, correct_answers, score');
        
        if (hError) throw hError;

        let profilesData = [];
        try {
            const { data: pData, error: pError } = await supabase
                .from('petro_profiles')
                .select('id, nickname, full_name');
            if (pError) throw pError;
            profilesData = pData || [];
        } catch (e) {
            console.warn("Could not fetch profiles, using anonymous names.");
        }

        // Group history by user_id
        const userStatsMap = {};
        historyData.forEach(h => {
            if (!userStatsMap[h.user_id]) {
                userStatsMap[h.user_id] = { correct: 0, best: 0 };
            }
            userStatsMap[h.user_id].correct += h.correct_answers || 0;
            if (h.score > userStatsMap[h.user_id].best) {
                userStatsMap[h.user_id].best = h.score;
            }
        });

        const userRanking = Object.keys(userStatsMap).map(userId => {
            const profile = profilesData.find(p => p.id === userId);
            const isMe = session?.user?.id === userId;
            return {
                name: isMe ? 'Você' : (profile?.nickname || profile?.full_name || 'Participante Anônimo'),
                total_correct: userStatsMap[userId].correct,
                best_score: userStatsMap[userId].best
            };
        }).sort((a, b) => b.total_correct - a.total_correct).slice(0, 5);

        setRanking(userRanking);
    } catch (err) {
        console.error("Erro ao carregar ranking:", err);
        setRanking([]);
    } finally {
        setLoadingRanking(false);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase.from('petro_profiles').select('*').eq('id', session.user.id).maybeSingle();
        if (error) throw error;
        if (data) {
          setProfile(data);
          // Carregar meta diária do perfil (com fallback para localStorage)
          const savedGoal = data.daily_goal || parseInt(localStorage.getItem('petro_daily_goal') || '10');
          setDailyGoal(savedGoal);
        }
      } catch (err) {
        console.warn("Profile fetch error or RLS:", err);
        const savedGoal = parseInt(localStorage.getItem('petro_daily_goal') || '10');
        setDailyGoal(savedGoal);
      }
    };

    fetchHistory();
    fetchProfile();
    fetchRanking();
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const startSimulator = (type, mode = 'tutorial', disciplina = '', block = '') => {
    let url = `/simulator/${type}?mode=${mode}`;
    if (disciplina) url += `&disciplina=${encodeURIComponent(disciplina)}`;
    if (block) url += `&block=${block}`;
    navigate(url);
  };

  const userEmail = session?.user?.email || 'Aluno';
  const isAdmin = userEmail === 'lucasho94@hotmail.com';
  const isPremium = profile?.is_premium || session?.user?.user_metadata?.isPremium || isAdmin;
  const userInitial = userEmail.charAt(0).toUpperCase();

  const handleStripeCheckout = async (planType) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { 
            planType, // 'monthly' ou 'annual'
            userId: session.user.id,
            userEmail: userEmail
        }
      });

      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (err) {
      console.error("Erro ao iniciar checkout:", err);
      alert("Houve um erro ao conectar com o provedor de pagamento. Tente novamente em instantes.");
    }
  };

  // Badges Dinamicos Reais (Expandidos)
  const selos = [
      { 
          id: 'fogo', 
          icone: <Flame size={28} className={history.length > 0 ? "text-orange-500" : "text-slate-300"} fill={history.length > 0 ? "currentColor" : "none"}/>, 
          titulo: 'Pioneiro', 
          desc: 'Seu primeiro passo na plataforma.', 
          grad: history.length > 0 ? 'from-amber-300 to-orange-500' : 'from-slate-100 to-slate-200',
          conquistado: history.length > 0
      },
      { 
          id: 'livro', 
          icone: <BookOpen size={28} className={history.length >= 10 ? "text-indigo-600" : "text-slate-300"}/>, 
          titulo: t('ach_marathon_title'), 
          desc: t('ach_marathon_desc'), 
          grad: history.length >= 10 ? 'from-blue-400 to-indigo-600' : 'from-slate-100 to-slate-200',
          conquistado: history.length >= 10
      },
      { 
          id: 'alvo', 
          icone: <Target size={28} className={history.some(h => h.score >= 70) ? "text-teal-600" : "text-slate-300"}/>, 
          titulo: t('ach_precision_title'), 
          desc: t('ach_precision_desc'), 
          grad: history.some(h => h.score >= 70) ? 'from-emerald-400 to-teal-500' : 'from-slate-100 to-slate-200',
          conquistado: history.some(h => h.score >= 70)
      },
      { 
          id: 'trofeu', 
          icone: <Trophy size={28} className={history.some(h => h.score === 100) ? "text-amber-500" : "text-slate-300"}/>, 
          titulo: t('ach_perfect_title'), 
          desc: t('ach_perfect_desc'), 
          grad: history.some(h => h.score === 100) ? 'from-yellow-300 to-amber-500' : 'from-slate-100 to-slate-200',
          conquistado: history.some(h => h.score === 100)
      },
      { 
        id: 'clock', 
        icone: <Clock size={28} className={history.some(h => {
             const hr = new Date(h.created_at).getHours();
             return hr >= 22 || hr <= 4;
        }) ? "text-purple-600" : "text-slate-300"}/>, 
        titulo: t('ach_owl_title'), 
        desc: t('ach_owl_desc'), 
        grad: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 22 || hr <= 4;
        }) ? 'from-indigo-400 to-purple-600' : 'from-slate-100 to-slate-200',
        conquistado: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 22 || hr <= 4;
        })
      },
      { 
        id: 'sun', 
        icone: <Sun size={28} className={history.some(h => {
             const hr = new Date(h.created_at).getHours();
             return hr >= 5 && hr <= 9;
        }) ? "text-amber-500" : "text-slate-300"}/>, 
        titulo: t('ach_sun_title'), 
        desc: t('ach_sun_desc'), 
        grad: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 5 && hr <= 9;
        }) ? 'from-orange-300 to-amber-500' : 'from-slate-100 to-slate-200',
        conquistado: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 5 && hr <= 9;
        })
      },
      { 
        id: 'shield', 
        icone: <Shield size={28} className={streak >= 7 ? "text-blue-600" : "text-slate-300"}/>, 
        titulo: t('ach_shield_title'), 
        desc: t('ach_shield_desc'), 
        grad: streak >= 7 ? 'from-blue-400 to-blue-700' : 'from-slate-100 to-slate-200',
        conquistado: streak >= 7
      },
       { 
        id: 'award', 
        icone: <Award size={28} className={history.some(h => h.exam_type === 'avançado' && h.passed) ? "text-red-600" : "text-slate-300"}/>, 
        titulo: t('ach_award_title'), 
        desc: t('ach_award_desc'), 
        grad: history.some(h => h.exam_type === 'avançado' && h.passed) ? 'from-red-400 to-red-700' : 'from-slate-100 to-slate-200',
        conquistado: history.some(h => h.exam_type === 'avançado' && h.passed)
      },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16 relative">


      {/* MODAL DE SELOS GAAMIFICATION */}
      {seloModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={() => setSeloModal(null)}>
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl transform transition-all animate-fade-in-up" onClick={e => e.stopPropagation()}>
                <div className={`h-24 bg-gradient-to-br ${seloModal.grad} w-full relative flex justify-center items-end pb-3`}>
                    <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full cursor-pointer hover:bg-white/40" onClick={() => setSeloModal(null)}>
                        <X size={16} className="text-white" />
                    </div>
                </div>
                <div className="flex justify-center -mt-10 mb-4 px-6 relative z-10">
                    <div className="bg-white p-2 rounded-2xl shadow-xl w-20 h-20 flex items-center justify-center border-4 border-slate-50">
                        {seloModal.icone}
                    </div>
                </div>
                <div className="text-center px-6 pb-8">
                    <h3 className="font-black text-2xl text-slate-800 mb-2">{seloModal.titulo}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                        {seloModal.desc}
                    </p>
                    <button onClick={() => setSeloModal(null)} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors">
                        {t('amazing_back')}
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* MODAL DE HISTÓRICO COMPLETO */}
      {historicoCompletoAberto && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-fade-in-up">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="font-black text-xl flex items-center gap-2"><TrendingUp className="text-green-600" /> {t('history_plenary')}</h2>
                    <button onClick={() => setHistoricoCompletoAberto(false)} className="p-2 bg-slate-200 hover:bg-slate-300 rounded-full"><X size={18}/></button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
                    {history.map((h, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                         <div>
                             <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md ${h.type === 'Avançado' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{h.type}</span>
                             <div className="font-bold text-slate-800 mt-1">{h.date}</div>
                         </div>
                         <div className="flex flex-col items-end">
                             <span className={`font-black text-xl ${h.passed ? 'text-emerald-500' : 'text-red-500'}`}>{h.score}</span>
                             <span className="text-[10px] text-slate-400 font-bold uppercase">{h.passed ? t('passed_simple') : t('failed_simple')}</span>
                         </div>
                     </div>
                    ))}
                    {history.length === 0 && <p className="text-center text-slate-400 font-bold">{t('no_pending_requests')}</p>}
                </div>
            </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8">
        
        {/* Coluna Central/Esquerda: Banner e Ações */}
        <div className="lg:col-span-8 space-y-8">

          {/* KPI Cards — Métricas Pessoais */}
          <KPICards history={rawHistory} dailyGoal={dailyGoal} t={t} />
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-green-700 via-green-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-4 left-6 z-10">
               <span className="text-green-100 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Medal size={14} className="text-amber-400" /> {t('student_panel')}
               </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white mt-8 mb-4 max-w-2xl leading-tight">
               {t('expert_panel')}
            </h1>
            
            <p className="text-green-100 text-lg max-w-xl md:max-w-2xl font-medium leading-relaxed mb-8">
               {t('expert_desc')}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-auto">
               <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold shadow-md
                  ${isPremium ? 'bg-green-600/50 text-green-50 border border-green-400/30' : 'bg-slate-800/80 text-slate-300 border border-slate-700'}`}>
                  <Check size={16} className={isPremium ? 'text-green-300' : 'text-slate-500'} /> 
                  {isPremium ? t('active_subscription') : t('free_plan')}
               </span>
            </div>
            
            {/* Decorações do Banner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-10 w-40 h-40 bg-green-400 opacity-10 rounded-full blur-2xl"></div>
            <Target className="absolute -bottom-16 -right-16 text-white opacity-10 transform rotate-12" size={300} />
          </div>

          {/* CTA para a Nova Página de Estudo */}
          <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
             {/* Efeitos de Fundo */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
             <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-400 opacity-20 rounded-full blur-2xl"></div>

             <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-green-100 text-[10px] font-black uppercase tracking-widest mb-6">
                   <Target size={14} className="text-green-300" /> Nova Área de Estudos
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                   Pronto para começar seu treinamento?
                </h2>
                <p className="text-green-100 font-medium leading-relaxed">
                   Acesse a nova Central de Estudos. Escolha sua ênfase, selecione entre 4 modos de estudo diferentes (incluindo Flashcards e Revisão) ou foque em tópicos específicos.
                </p>
             </div>

             <button 
                onClick={() => navigate('/study')}
                className="relative z-10 shrink-0 bg-white text-green-800 hover:scale-105 transition-all duration-300 font-black px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-3 group/btn"
             >
                <BookOpen size={24} className="group-hover/btn:-translate-y-1 transition-transform" /> 
                <span className="text-lg">Ir para Estudar</span>
             </button>
          </div>
        </div>

        {/* Coluna Direita: Microsoft Style Histórico e Gamificação */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Seção de Conquistas e Gráfico de Radar */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
             
             {/* Performance por Domínio: lista de barras ordenada por pior desempenho */}
             <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black text-slate-800 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <PieChart className="text-green-600" size={18} /> {t('performance_domain')}
                  </h3>
                  {radarData.length > 0 && (
                    <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2 py-1 rounded-lg">
                      {radarData.length} temas
                    </span>
                  )}
                </div>

                {radarData.length > 0 ? (
                  <div className="space-y-3">
                    {[...radarData]
                      .sort((a, b) => a.A - b.A)
                      .slice(0, showAllDomains ? undefined : 7)
                      .map((item) => {
                        const isRed   = item.A < 50;
                        const isAmber = item.A >= 50 && item.A < 70;
                        return (
                          <div key={item.subject}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold text-slate-700 truncate pr-2 max-w-[78%]" title={item.subject}>
                                {item.subject}
                              </span>
                              <span className={`text-xs font-black tabular-nums ${isRed ? 'text-red-600' : isAmber ? 'text-amber-600' : 'text-emerald-600'}`}>
                                {item.A}%
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${isRed ? 'bg-red-500' : isAmber ? 'bg-amber-400' : 'bg-emerald-500'}`}
                                style={{ width: `${item.A}%` }}
                              />
                            </div>
                          </div>
                        );
                      })
                    }

                    {radarData.length > 7 && (
                      <button
                        onClick={() => setShowAllDomains(v => !v)}
                        className="w-full mt-1 py-2 text-[11px] font-black text-slate-500 hover:text-green-700 border border-dashed border-slate-300 hover:border-green-300 hover:bg-white rounded-xl transition-all"
                      >
                        {showAllDomains ? 'Mostrar menos' : `Ver todos os ${radarData.length} domínios ↓`}
                      </button>
                    )}

                    <div className="flex items-center gap-4 mt-2 pt-3 border-t border-slate-200">
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-red-500"></div><span className="text-[9px] font-bold text-slate-400 uppercase">&lt;50% Crítico</span></div>
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-amber-400"></div><span className="text-[9px] font-bold text-slate-400 uppercase">50–70% Atenção</span></div>
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></div><span className="text-[9px] font-bold text-slate-400 uppercase">≥70% Ok</span></div>
                    </div>
                  </div>
                ) : (
                  <div className="py-10 flex flex-col items-center justify-center text-center">
                    <AlertCircle size={32} className="text-slate-300 mb-2" />
                    <p className="text-xs text-slate-400 font-bold">{t('no_radar_data')}</p>
                  </div>
                )}
             </div>

             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-black text-slate-800 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Medal className="text-purple-600" size={18} /> {t('achievements')}
                    </h3>
                    <span className="bg-purple-50 text-purple-700 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest">{selos.filter(s => s.conquistado).length} {t('unlocked')}</span>
                 </div>
                 
                 <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                     {selos.map(selo => (
                      <div 
                        key={selo.id}
                        onMouseEnter={() => setSeloHoverId(selo.id)}
                        onMouseLeave={() => setSeloHoverId(null)}
                        onClick={() => setSeloModal(selo)}
                        className={`relative cursor-pointer transition-all duration-300 flex flex-col items-center justify-center p-3 rounded-2xl border-2
                          ${selo.conquistado ? 'border-transparent bg-gradient-to-br shadow-md hover:scale-105 ' + selo.grad : 'border-dashed border-slate-200 bg-slate-50 opacity-40 hover:opacity-100'}`}
                      >
                         <div className="bg-white p-2.5 rounded-xl shadow-sm mb-3">
                           {selo.icone}
                         </div>
                         <span className={`text-[9px] font-black uppercase text-center tracking-wider leading-tight max-w-[80px]
                           ${selo.conquistado ? 'text-slate-800' : 'text-slate-400'}`}>
                           {selo.id === 'fogo' ? t('badge_pioneer') :
                            selo.id === 'livro' ? t('badge_marathon') :
                            selo.id === 'alvo' ? t('badge_precision') :
                            selo.id === 'trofeu' ? t('badge_perfectionist') :
                            selo.id === 'clock' ? t('badge_owl') :
                            selo.id === 'sun' ? t('badge_early_bird') :
                            selo.id === 'shield' ? t('badge_unshakable') :
                            selo.id === 'award' ? t('badge_master') : selo.titulo}
                         </span>
                         
                         {/* Tooltip Hover */}
                         <div className={`absolute -top-2 left-1/2 -mt-2 -translate-x-1/2 -translate-y-full w-48 bg-slate-800 text-white text-xs p-3 rounded-xl shadow-xl transition-all duration-200 z-50 pointer-events-none text-center
                           ${seloHoverId === selo.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                            <p className="font-bold mb-1 text-purple-300">{selo.id === 'fogo' ? t('badge_pioneer') :
                            selo.id === 'livro' ? t('badge_marathon') :
                            selo.id === 'alvo' ? t('badge_precision') :
                            selo.id === 'trofeu' ? t('badge_perfectionist') :
                            selo.id === 'clock' ? t('badge_owl') :
                            selo.id === 'sun' ? t('badge_early_bird') :
                            selo.id === 'shield' ? t('badge_unshakable') :
                            selo.id === 'award' ? t('badge_master') : selo.titulo}</p>
                            <p className="text-[10px] text-slate-300 leading-tight">{selo.desc}</p>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-spacing-x-4 border-t-[8px] border-t-slate-800 border-x-[8px] border-x-transparent border-b-0 w-0 h-0"></div>
                         </div>
                      </div>
                    ))}
                 </div>
                 <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6">
                    {t('click_badges')}
                 </p>
              </div>
          </div>

          {/* NOVO: Ranking Global (Etapa 6.5) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-black text-slate-800 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Users className="text-green-600" size={18} /> {t('global_ranking')}
                    </h3>
                    <span className="bg-green-50 text-green-700 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest">{t('total_points')}</span>
                 </div>

             <div className="space-y-4">
                {loadingRanking ? (
                    <div className="py-10 text-center animate-pulse">
                        <div className="h-4 bg-slate-100 rounded-full w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-slate-100 rounded-full w-1/2 mx-auto"></div>
                    </div>
                ) : ranking.length > 0 ? (
                    ranking.map((user, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${idx === 0 ? 'bg-amber-50 border-amber-100 shadow-sm' : 'bg-slate-50 border-slate-100'}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm
                                    ${idx === 0 ? 'bg-amber-400 text-white' : idx === 1 ? 'bg-slate-300 text-slate-700' : idx === 2 ? 'bg-orange-300 text-white' : 'bg-white text-slate-400'}
                                `}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <p className="font-black text-slate-800 truncate pr-2 max-w-[120px] sm:max-w-[180px]">{user.name}</p>
                                       <div className="flex items-center gap-1 mt-0.5">
                                          <TrendingUp size={10} className="text-slate-400" />
                                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Best: {user.best_score / 10}%</p>
                                       </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                   <p className="text-xl font-black text-green-600 leading-none">{user.total_correct}</p>
                                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{t('questions')}</p>
                               </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center text-slate-400 font-medium">
                        {t('waiting_competitors')}
                    </div>
                )}
             </div>
             
             <p className="text-center text-[10px] text-slate-400 italic mt-6 mt-auto">
                    {t('tie_breaker')}
                 </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
            <h2 className="font-black text-xl text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <TrendingUp className="text-blue-600" size={24} /> {t('performance_pl200')}
            </h2>

            {loadingHistory ? (
              <div className="text-center py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-xs text-slate-400 font-bold">{t('consulting_db')}</p>
              </div>
            ) : history.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                  <div className="text-slate-400 mb-3"><Star size={32} className="mx-auto opacity-50" /></div>
                  <p className="text-slate-500 font-medium">{t('no_simulations')}</p>
                  <p className="text-xs text-slate-400 mt-1">{t('journey_starts_today')}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {history.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex flex-col gap-3 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-700 text-sm bg-slate-100 px-2 py-1 rounded-md">{h.date}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{h.type}</span>
                    </div>
                    <div className="flex items-center gap-5 mt-1">
                      <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl shrink-0 ${h.passed ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                        {h.passed ? <Check className="mb-0.5" size={24} /> : <X className="mb-0.5" size={24} />}
                        <span className="text-[11px] font-black uppercase text-center leading-none">{h.passed ? t('passed') : t('failed')}</span>
                      </div>
                      <div className="flex-1 flex flex-col gap-2 w-full">
                        <div className="flex justify-between items-end">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wide">{t('score')}</span>
                            <span className={`text-xl font-black ${h.passed ? 'text-emerald-600' : 'text-slate-700'}`}>{h.score} / 1000</span>
                        </div>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full relative overflow-hidden shadow-inner">
                          <div className={`h-full rounded-full transition-all duration-1000 ${h.passed ? 'bg-emerald-500' : 'bg-slate-400'}`} style={{ width: `${h.score / 10}%` }}></div>
                          <div className="absolute top-0 bottom-0 left-[70%] w-1 bg-white border-l border-red-500/20 z-10" title="Nota de Corte Oficial (700 Pontos)"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {history.length > 0 && (
                <button onClick={() => setHistoricoCompletoAberto(true)} className="w-full mt-6 py-3 bg-slate-50 hover:bg-slate-100 text-blue-700 font-bold rounded-xl transition-colors text-sm border border-slate-200">
                    {t('view_full_history')}
                </button>
            )}
          </div>
        </div>
      </div>

      {/* MODAL DE CERTIFICADOS */}
      {showCertificatesModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-up border border-white/20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative">
                    <button 
                        onClick={() => setShowCertificatesModal(false)}
                        className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                            <Trophy size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black">{t('achievements_gallery')}</h2>
                            <p className="text-blue-100 font-medium text-sm">{t('official_certificates')}</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 max-h-[60vh] overflow-y-auto">
                    {history.filter(h => h.passed && h.score >= 80).length > 0 ? (
                        <div className="space-y-4">
                            {history.filter(h => h.passed && h.score >= 80).map((cert, i) => (
                                <div key={i} className="group p-5 bg-slate-50 hover:bg-white hover:shadow-xl rounded-3xl border border-slate-100 hover:border-blue-200 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            <Award className="text-blue-600" size={28} />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-800">{t('specialist_cert')}</p>
                                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                                                <span>{cert.date}</span>
                                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                                <span className="text-blue-600">{cert.score}% {t('performance')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => generateCertificate(profile?.nickname || profile?.full_name || userEmail.split('@')[0], cert.score, cert.date, selectedCargo || 'Analista de Sistemas')}
                                        className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200"
                                    >
                                        <TrendingUp size={16} /> DOWNLOAD PDF
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 px-6">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                <Award size={40} />
                            </div>
                            <h3 className="text-lg font-black text-slate-800 mb-2">{t('no_certs_title')}</h3>
                            <p className="text-sm text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
                                {t('no_certs_desc')}
                            </p>
                            <button 
                                onClick={() => {
                                    setShowCertificatesModal(false);
                                    startSimulator('avancado', 'exam');
                                }}
                                className="mt-8 px-8 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                {t('start_real_now')}
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{t('certified_platform')}</p>
                </div>
            </div>
        </div>
      )}
      <SupportModal 
        isOpen={showSupport} 
        onClose={() => setShowSupport(false)} 
        userSession={session} 
        initialSubject={supportSubject}
      />
    </div>
  );
}
