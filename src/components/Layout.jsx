import React, { useState, useContext } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, LogOut, Award, User, Settings, PieChart, Shield, Zap, X, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useReview } from '../hooks/useReview';

export default function Layout({ session }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useContext(LanguageContext);
  const [menuAberto, setMenuAberto] = useState(false);
  const { queue } = useReview(session);

  // Se não estiver logado, não deve renderizar nada (protegido pelo App.jsx, mas por segurança)
  if (!session) return <Outlet />;

  const userEmail = session?.user?.email || 'Aluno';
  const isAdmin = userEmail === 'lucasho94@hotmail.com';
  const isPremium = session?.user?.user_metadata?.isPremium || isAdmin;
  const userInitial = userEmail.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const navLinks = [
    { path: '/dashboard', label: t('menu_dashboard', 'Dashboard'), icon: <PieChart size={18} /> },
    { path: '/study', label: t('menu_study', 'Estudar'), icon: <BookOpen size={18} /> },
    { path: '/review', label: t('menu_review', 'Revisar'), icon: <TrendingUp size={18} /> },
    { path: '/help', label: t('menu_help', 'Ajuda'), icon: <Shield size={18} /> },
  ];

  if (isAdmin) {
    navLinks.push({ path: '/admin', label: t('menu_admin', 'Gestor'), icon: <Zap size={18} /> });
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-green-200">
      
      {/* NAVBAR GLOBAL */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          
          {/* Logo e Links Desktop */}
          <div className="flex items-center gap-8">
            <div 
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => navigate('/dashboard')}
            >
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <BookOpen size={16} className="text-white" />
              </div>
              <span className="font-black text-lg tracking-tight text-slate-800 hidden sm:block">
                  Simulador <span className="text-green-600">Petrobras</span>
              </span>
            </div>

            <div className="hidden md:flex gap-1 bg-slate-50 p-1 rounded-xl border border-slate-100">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg flex items-center gap-2 transition-all relative ${
                    location.pathname === link.path 
                      ? 'bg-white text-green-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.icon} {link.label}
                  {link.path === '/review' && queue.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                       {queue.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* User Menu & Language */}
          <div className="flex items-center gap-3 relative">
            <div className="hidden sm:block">
               <LanguageSwitcher />
            </div>
            
            <button 
              onClick={() => setMenuAberto(!menuAberto)}
              className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-lg hover:scale-105 transition-transform shadow-md relative border-2 border-transparent hover:border-slate-200"
            >
              {userInitial}
              {isPremium && (
                 <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    <Award size={10} fill="currentColor" />
                 </div>
              )}
            </button>

            {/* Dropdown Menu */}
            {menuAberto && (
                <div className="absolute top-14 right-0 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-50 animate-fade-in-up">
                    <div className="px-4 py-3 border-b border-slate-100 mb-2">
                        <p className="text-xs text-slate-400 uppercase font-black tracking-wider">{t('connected_account', 'Conta Conectada')}</p>
                        <p className="font-bold text-slate-800 truncate">{userEmail}</p>
                        <div className="mt-2 flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                            <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">
                                {isPremium ? t('active_subscription', 'Plano Premium') : t('free_plan', 'Plano Gratuito')}
                            </span>
                        </div>
                    </div>
                    
                    <button 
                      onClick={() => { navigate('/profile'); setMenuAberto(false); }}
                      className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                    >
                        <User size={16} /> {t('menu_profile', 'Meu Perfil')}
                    </button>
                    <button 
                      onClick={() => { navigate('/settings'); setMenuAberto(false); }}
                      className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                    >
                        <Settings size={16} /> {t('menu_settings', 'Configurações')}
                    </button>
                    
                    <div className="h-px bg-slate-100 my-2"></div>
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-2.5 font-bold text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors"
                    >
                        <LogOut size={16} /> {t('menu_logout', 'Sair')}
                    </button>
                </div>
            )}
          </div>
        </div>
      </nav>

      {/* Navegação Mobile Inferior */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 z-40 px-2 py-2 flex justify-around">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all relative ${
                location.pathname === link.path 
                  ? 'text-green-600' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {link.icon}
              <span className="text-[10px] font-black mt-1">{link.label}</span>
              {link.path === '/review' && queue.length > 0 && (
                 <span className="absolute top-1 right-2 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {queue.length}
                 </span>
              )}
            </button>
          ))}
      </div>

      {/* CONTEÚDO DAS ROTAS */}
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

    </div>
  );
}
