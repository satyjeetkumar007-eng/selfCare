import React, { useEffect, useState } from 'react';
import { Heart, Activity, Sparkles, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { language, setLanguage } = useApp();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      id="splash-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 bg-gradient-to-b from-white via-teal-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors"
    >
      {/* Language Quick Switcher at top */}
      <div className="w-full max-w-sm flex justify-end pt-2">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800 border border-teal-200 dark:border-slate-700 text-xs font-bold text-teal-800 dark:text-teal-300 shadow-xs hover:bg-teal-50 transition"
        >
          <span>{language === 'en' ? 'हिंदी 🇮🇳' : 'English 🇬🇧'}</span>
        </button>
      </div>

      {/* Center Emblem & Branding */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-xs my-auto">
        <div className="relative">
          {/* Calming halo aura */}
          <div className="absolute inset-0 rounded-3xl bg-teal-500/20 blur-xl animate-pulse" />

          {/* Logo container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 p-0.5 shadow-xl flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[22px] flex items-center justify-center relative overflow-hidden">
              {/* Subtle medical cross watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-14 h-4 bg-teal-600 rounded-full" />
                <div className="h-14 w-4 bg-teal-600 rounded-full absolute" />
              </div>

              {/* Heartbeat Pulse Icon */}
              <div className="relative z-10 flex flex-col items-center text-teal-600 dark:text-teal-400">
                <Heart className="w-10 h-10 fill-teal-600/15 stroke-[2] animate-bounce" />
                <Activity className="w-6 h-6 -mt-2 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Self Care
            </span>
            <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
              +
            </span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-300 leading-snug">
            {language === 'en' ? '“Know Your Health. Take Care of Yourself.”' : '“अपने स्वास्थ्य को जानें, अपना ख्याल रखें।”'}
          </p>

          <p className="text-xs text-slate-400 max-w-[240px] mx-auto pt-1">
            {language === 'en'
              ? 'Medical information & wellness guidance'
              : 'चिकित्सा जानकारी और स्वास्थ्य मार्गदर्शन'}
          </p>
        </div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="w-full max-w-xs space-y-3 pb-4">
        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>{language === 'en' ? 'Loading health insights…' : 'स्वास्थ्य जानकारी लोड हो रही है…'}</span>
          <button
            onClick={onFinish}
            className="font-bold text-teal-600 dark:text-teal-400 hover:underline"
          >
            {language === 'en' ? 'Skip' : 'छोड़ें'}
          </button>
        </div>
      </div>
    </div>
  );
};
