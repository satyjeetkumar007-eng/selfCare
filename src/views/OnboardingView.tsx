import React, { useState } from 'react';
import { BookOpen, ShieldCheck, HeartPulse, ChevronRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OnboardingView: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { language, setLanguage, t } = useApp();
  const [currentStep, setCurrentStep] = useState(0);

  const screens = [
    {
      icon: BookOpen,
      color: 'from-sky-500 to-teal-500',
      bgColor: 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800',
      titleEnglish: 'Learn About Illnesses',
      titleHindi: 'बीमारियों के बारे में जानें',
      descEnglish: 'Explore common illnesses and understand their symptoms, causes, and warning signs clearly.',
      descHindi: 'सामान्य बीमारियों की खोज करें और उनके लक्षणों, कारणों और चेतावनी संकेतों को आसानी से समझें।',
    },
    {
      icon: ShieldCheck,
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800',
      titleEnglish: 'Know the Precautions',
      titleHindi: 'सावधानियों को पहचानें',
      descEnglish: 'Learn evidence-based precautions, daily prevention tips, and proactive hygiene habits.',
      descHindi: 'सामान्य सावधानियां, दैनिक रोकथाम के उपाय और व्यक्तिगत स्वच्छता की आदतें सीखें।',
    },
    {
      icon: HeartPulse,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
      titleEnglish: 'Take Care of Yourself',
      titleHindi: 'अपना ख्याल रखें',
      descEnglish: 'Get useful health information and self-care practices in a simple and easy-to-understand format.',
      descHindi: 'सरल और आसानी से समझने योग्य प्रारूप में उपयोगी स्वास्थ्य और देखभाल की जानकारी प्राप्त करें।',
    },
  ];

  const handleNext = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const activeScreen = screens[currentStep];
  const IconComponent = activeScreen.icon;

  return (
    <div
      id="onboarding-screen"
      className="fixed inset-0 z-40 flex flex-col justify-between p-6 bg-gradient-to-b from-white via-teal-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors"
    >
      {/* Header bar: Language Switcher & Skip button */}
      <div className="w-full flex items-center justify-between pt-2">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-teal-700 dark:text-teal-300 shadow-xs hover:bg-teal-50 transition"
        >
          <span>{language === 'en' ? 'हिंदी 🇮🇳' : 'English 🇬🇧'}</span>
        </button>

        <button
          onClick={onComplete}
          className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {t.btnSkip}
        </button>
      </div>

      {/* Main Content Area with dynamic step transition */}
      <div className="flex flex-col items-center text-center max-w-sm mx-auto my-auto space-y-8">
        {/* Large Hero Graphic */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-2xl scale-125" />
          <div
            className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-tr ${activeScreen.color} p-1 transition-all duration-300`}
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
              <IconComponent className="w-16 h-16 sm:w-20 sm:h-20 text-teal-600 dark:text-teal-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-3 px-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? activeScreen.titleEnglish : activeScreen.titleHindi}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs mx-auto">
            {language === 'en' ? activeScreen.descEnglish : activeScreen.descHindi}
          </p>
        </div>

        {/* Step Indicator Dots */}
        <div className="flex items-center gap-2 pt-2">
          {screens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep === idx
                  ? 'w-8 bg-teal-600 dark:bg-teal-400'
                  : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="w-full max-w-sm mx-auto pb-4 space-y-3">
        <button
          onClick={handleNext}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-teal-600/25 active:scale-[0.98] transition flex items-center justify-center gap-2"
        >
          <span>{currentStep === screens.length - 1 ? t.btnGetStarted : t.btnNext}</span>
          {currentStep === screens.length - 1 ? (
            <Check className="w-5 h-5 stroke-[2.5]" />
          ) : (
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          )}
        </button>
      </div>
    </div>
  );
};
