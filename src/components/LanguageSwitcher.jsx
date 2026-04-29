import React, { useContext } from 'react';
import { Globe } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-sm font-bold shadow-sm
        ${language === 'pt' 
          ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100' 
          : 'bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100'
        }`}
    >
      <Globe size={16} />
      <span className="uppercase tracking-wider">
        {language === 'pt' ? 'PT-BR' : 'EN-US'}
      </span>
    </button>
  );
}
