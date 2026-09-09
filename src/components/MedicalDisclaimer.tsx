import React, { useState } from 'react';
import { ShieldAlert, AlertCircle, X, ChevronRight, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface MedicalDisclaimerProps {
  compact?: boolean;
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ compact = false }) => {
  const { language, t } = useApp();
  const [showModal, setShowModal] = useState(false);

  const disclaimerEnglish =
    'The information provided in this app is for educational and informational purposes only. It is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.';

  const disclaimerHindi =
    'इस ऐप में दी गई जानकारी केवल शैक्षणिक और सूचनात्मक उद्देश्यों के लिए है। यह चिकित्सा सलाह, निदान या उपचार के रूप में नहीं है। किसी भी चिकित्सीय स्थिति के संबंध में हमेशा अपने डॉक्टर या योग्य स्वास्थ्य विशेषज्ञ की सलाह लें।';

  const currentDisclaimer = language === 'en' ? disclaimerEnglish : disclaimerHindi;

  if (compact) {
    return (
      <>
        <div
          id="medical-disclaimer-compact"
          onClick={() => setShowModal(true)}
          className="cursor-pointer flex items-center justify-between p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 transition hover:bg-amber-100/90 dark:hover:bg-amber-950/50"
        >
          <div className="flex items-center gap-2.5 text-xs font-semibold">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="line-clamp-1">
              {language === 'en' ? 'Educational Only • Not Medical Advice' : 'केवल शैक्षणिक उद्देश्य • चिकित्सीय सलाह नहीं'}
            </span>
          </div>
          <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 flex items-center gap-0.5 whitespace-nowrap pl-1">
            {language === 'en' ? 'Read' : 'देखें'} <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-amber-200 dark:border-amber-900/50 relative space-y-4">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <AlertCircle className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {t.disclaimerTitle}
                </h3>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                  {t.disclaimerBadge}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
                {currentDisclaimer}
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-2">
                <p>
                  {language === 'en'
                    ? 'In the event of a severe medical emergency, immediately contact emergency services (112 / 911) or proceed to the nearest medical emergency room.'
                    : 'किसी भी आपातकालीन स्थिति में तुरंत 112 / 911 पर संपर्क करें या नजदीकी अस्पताल के आपातकालीन विभाग में जाएं।'}
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition cursor-pointer"
              >
                {language === 'en' ? 'I Understand' : 'मैं समझता/समझती हूँ'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div
      id="medical-disclaimer-card"
      className="p-4 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 text-amber-950 dark:text-amber-200 space-y-2.5 shadow-xs"
    >
      <div className="flex items-center gap-2">
        <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
        <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300">
          {t.disclaimerTitle}
        </h4>
      </div>
      <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
        {currentDisclaimer}
      </p>
    </div>
  );
};
