import React, { useState } from 'react';
import { Heart, Activity, PhoneCall, Moon, Sun, Type, X, AlertTriangle, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const { language, setLanguage, isDarkMode, toggleDarkMode, fontSize, setFontSize, user, setActiveTab, t } = useApp();
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <>
      <header
        id="app-header"
        className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors"
      >
        <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
          {/* Logo & Name & Tagline */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-xs shadow-teal-500/20 group-hover:scale-105 transition">
              <div className="relative flex items-center justify-center">
                <Heart className="w-5 h-5 fill-white" />
                <Activity className="w-2.5 h-2.5 text-teal-600 absolute stroke-[2.5]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                  Self Care
                </span>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                  +
                </span>
              </div>
              <p className="text-[10px] font-semibold text-teal-700 dark:text-teal-400/90 truncate max-w-[170px] sm:max-w-[210px]">
                {language === 'en' ? 'Know Your Health' : 'अपने स्वास्थ्य को जानें'}
              </p>
            </div>
          </div>

          {/* Controls: Language, Font, Dark Mode, SOS, Profile */}
          <div className="flex items-center gap-1">
            {/* Language Switcher */}
            <button
              id="language-switch-header-btn"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              title={language === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-teal-800 dark:text-teal-300 text-xs font-bold hover:bg-teal-100 transition"
            >
              <span>{language === 'en' ? 'HI' : 'EN'}</span>
            </button>

            {/* Font Size Adjuster */}
            <button
              id="font-size-adjust-btn"
              onClick={cycleFontSize}
              title="Adjust text size for readability"
              aria-label="Adjust font size"
              className="p-1.5 rounded-xl text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center text-xs font-bold"
            >
              <Type className="w-4 h-4" />
              <span className="text-[9px] ml-0.5 font-bold">
                {fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
              className="p-1.5 rounded-xl text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Emergency Hotline Button */}
            <button
              id="emergency-hotline-btn"
              onClick={() => setShowEmergencyModal(true)}
              title="Emergency helpline numbers"
              aria-label="Emergency hotlines"
              className="flex items-center gap-1 px-2 py-1 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-[11px] font-bold transition"
            >
              <PhoneCall className="w-3 h-3" />
              <span>SOS</span>
            </button>
          </div>
        </div>
      </header>

      {/* Emergency Hotline Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-red-100 dark:border-red-900/40 relative space-y-4">
            <button
              onClick={() => setShowEmergencyModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {language === 'en' ? 'Emergency Assistance' : 'आपातकालीन सहायता'}
                </h3>
                <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                  {language === 'en' ? 'Call immediately in danger' : 'खतरे में तुरंत संपर्क करें'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'If someone is experiencing sudden unconsciousness, severe chest pain, inability to breathe, or severe injury, contact emergency services right away.'
                : 'यदि किसी को अचानक बेहोशी, सीने में तेज दर्द, सांस न ले पाना या गंभीर चोट लगी हो, तो तुरंत आपातकालीन सेवाओं से संपर्क करें।'}
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="tel:112"
                className="flex items-center justify-between p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 hover:bg-red-100 transition"
              >
                <div>
                  <div className="font-bold text-sm">{language === 'en' ? 'National Emergency Helpline' : 'राष्ट्रीय आपातकालीन नंबर'}</div>
                  <div className="text-[11px] text-red-500">India: 112 / US: 911</div>
                </div>
                <span className="font-black text-base px-2.5 py-1 rounded-xl bg-red-600 text-white shadow-xs">
                  112
                </span>
              </a>

              <a
                href="tel:102"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition"
              >
                <div>
                  <div className="font-bold text-sm">{language === 'en' ? 'Ambulance Service' : 'एम्बुलेंस सेवा'}</div>
                  <div className="text-[11px] text-slate-400">Emergency Medical Transportation</div>
                </div>
                <span className="font-bold text-sm px-2.5 py-1 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white">
                  102 / 108
                </span>
              </a>
            </div>

            <button
              onClick={() => setShowEmergencyModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {t.btnCancel}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
