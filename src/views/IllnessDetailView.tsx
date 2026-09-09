import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Share2,
  Clock,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Activity,
  CheckCircle2,
  Info,
  Radio,
  Flame,
  Stethoscope,
  Siren,
  Sparkles,
} from 'lucide-react';
import { Illness } from '../types';
import { MedicalDisclaimer } from '../components/MedicalDisclaimer';
import { useApp } from '../context/AppContext';

interface IllnessDetailViewProps {
  illness: Illness;
  onBack: () => void;
}

export const IllnessDetailView: React.FC<IllnessDetailViewProps> = ({ illness, onBack }) => {
  const { language, setLanguage, favorites, toggleFavorite, t } = useApp();
  const isFavorite = favorites.includes(illness.id);

  // Accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    overview: true,
    symptoms: true,
    causes: true,
    riskFactors: false,
    precautions: true,
    prevention: false,
    selfCare: true,
    doctorWarning: true,
    emergencySigns: true,
    faq: true,
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedToast, setCopiedToast] = useState(false);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleShare = async () => {
    const title = language === 'en' ? illness.nameEnglish : illness.nameHindi;
    const text = language === 'en' ? illness.shortDescriptionEnglish : illness.shortDescriptionHindi;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - Self Care Guide`,
          text: text,
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(`${title}: ${text}`);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };

  // Bilingual content getters
  const displayName = language === 'en' ? illness.nameEnglish : illness.nameHindi;
  const secondaryName = language === 'en' ? illness.nameHindi : illness.nameEnglish;
  const categoryName = language === 'en' ? illness.categoryNameEnglish : illness.categoryNameHindi;
  const duration = language === 'en' ? illness.typicalDurationEnglish : illness.typicalDurationHindi;
  const overview = language === 'en' ? illness.overviewEnglish : illness.overviewHindi;
  const symptoms = language === 'en' ? illness.symptomsEnglish : illness.symptomsHindi;
  const causes = language === 'en' ? illness.causesEnglish : illness.causesHindi;
  const riskFactors = language === 'en' ? illness.riskFactorsEnglish : illness.riskFactorsHindi;
  const precautions = language === 'en' ? illness.precautionsEnglish : illness.precautionsHindi;
  const prevention = language === 'en' ? illness.preventionEnglish : illness.preventionHindi;
  const selfCare = language === 'en' ? illness.selfCareEnglish : illness.selfCareHindi;
  const doctorWarnings = language === 'en' ? illness.doctorWarningEnglish : illness.doctorWarningHindi;
  const emergencySigns = language === 'en' ? illness.emergencySignsEnglish : illness.emergencySignsHindi;
  const faqs = illness.faqEnglish;

  return (
    <div id="illness-detail-view" className="pb-28 animate-in fade-in duration-300">
      {/* 1. Header Image Banner with Controls */}
      <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
        <img
          src={illness.imageUrl}
          alt={displayName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/50" />

        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <button
            onClick={onBack}
            aria-label="Back"
            className="p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur-md shadow-md hover:bg-white active:scale-95 transition cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-teal-300 dark:border-teal-700 text-teal-800 dark:text-teal-300 text-xs font-black shadow-md hover:bg-teal-50 transition cursor-pointer"
            >
              {language === 'en' ? 'हिंदी 🇮🇳' : 'English 🇬🇧'}
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              aria-label="Share"
              className="p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur-md shadow-md hover:bg-white active:scale-95 transition cursor-pointer"
            >
              <Share2 className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Favorite Heart Button */}
            <button
              onClick={() => toggleFavorite(illness.id)}
              aria-label={isFavorite ? t.removeFromFavorites : t.saveToFavorites}
              className={`p-2.5 rounded-full backdrop-blur-md shadow-md transition-all active:scale-95 cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white hover:bg-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white stroke-white' : 'stroke-[2]'}`} />
            </button>
          </div>
        </div>

        {/* Floating Title and Meta Information */}
        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-500/90 text-white backdrop-blur-md">
              {categoryName}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold backdrop-blur-md ${
                illness.contagious
                  ? 'bg-amber-500/90 text-white'
                  : 'bg-emerald-500/90 text-white'
              }`}
            >
              {illness.contagious
                ? (language === 'en' ? 'Contagious' : 'संक्रामक')
                : (language === 'en' ? 'Non-contagious' : 'गैर-संक्रामक')}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            {displayName}
          </h1>

          <div className="flex items-center gap-2 text-xs text-teal-200/90 font-medium">
            <span>{secondaryName}</span>
            <span>•</span>
            <span className="italic">{illness.medicalName}</span>
          </div>
        </div>
      </div>

      {/* Share Toast */}
      {copiedToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs px-4 py-2 rounded-full shadow-lg animate-fade-in">
          {language === 'en' ? 'Illness link copied to clipboard!' : 'लिंक कॉपी हो गया!'}
        </div>
      )}

      {/* Main Content Sections */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-900/60">
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">{t.typicalDuration}</div>
              <div className="font-bold text-slate-800 dark:text-slate-100">{duration}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Radio className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">{t.contagious}</div>
              <div className="font-bold text-slate-800 dark:text-slate-100">
                {illness.contagious ? (language === 'en' ? 'Yes' : 'हाँ') : (language === 'en' ? 'No' : 'नहीं')}
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">{language === 'en' ? 'Classification' : 'वर्गीकरण'}</div>
              <div className="font-bold text-slate-800 dark:text-slate-100 truncate">{categoryName}</div>
            </div>
          </div>
        </div>

        {/* 1. Overview */}
        <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
            <Info className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h2>{t.sectionOverview}</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {overview}
          </p>
        </section>

        {/* 2. Common Symptoms */}
        <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
            <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h2>{t.sectionSymptoms}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-2xl bg-teal-50/50 dark:bg-slate-900/60 border border-teal-100 dark:border-slate-700/60"
              >
                <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                  {symptom}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Causes & Risk Factors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Causes */}
          <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
              <Flame className="w-5 h-5 text-amber-500" />
              <h2>{t.sectionCauses}</h2>
            </div>
            <ul className="space-y-2">
              {causes.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{cause}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Risk Factors */}
          <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
              <AlertTriangle className="w-5 h-5 text-indigo-500" />
              <h2>{t.sectionRiskFactors}</h2>
            </div>
            <ul className="space-y-2">
              {riskFactors.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{risk}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 4. Precautions & Prevention */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Precautions */}
          <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
              <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2>{t.sectionPrecautions}</h2>
            </div>
            <ul className="space-y-2">
              {precautions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Prevention */}
          <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              <h2>{t.sectionPrevention}</h2>
            </div>
            <ul className="space-y-2">
              {prevention.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 5. General Self-Care Guidance (Home Care) */}
        <section className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white dark:to-slate-800 rounded-3xl p-5 border border-emerald-300/60 dark:border-emerald-800/50 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
            <Heart className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-600/20" />
            <h2>{t.sectionSelfCare}</h2>
          </div>
          <div className="space-y-2.5">
            {selfCare.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-emerald-200/70 dark:border-emerald-900/60"
              >
                <div className="w-6 h-6 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. When to See a Doctor (Warning Card) */}
        <section className="p-5 rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/70 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-200 font-extrabold text-base">
            <Stethoscope className="w-5 h-5 text-amber-600 shrink-0" />
            <h2>{t.sectionWhenDoctor}</h2>
          </div>
          <ul className="space-y-2">
            {doctorWarnings.map((warn, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">{warn}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. Emergency Warning Signs (Red Alert Box) */}
        <section className="p-5 rounded-3xl bg-rose-50 dark:bg-rose-950/50 border-2 border-rose-400 dark:border-rose-900 space-y-3 shadow-md shadow-rose-950/5">
          <div className="flex items-center gap-2.5 text-rose-900 dark:text-rose-200 font-black text-base">
            <Siren className="w-5 h-5 text-rose-600 shrink-0 animate-bounce" />
            <h2>{t.sectionEmergency}</h2>
          </div>
          <p className="text-xs text-rose-700 dark:text-rose-300 font-medium">
            {language === 'en'
              ? 'If any of the following critical emergency symptoms are observed, seek immediate hospital emergency care or call 112 / 911:'
              : 'यदि निम्नलिखित में से कोई भी गंभीर आपातकालीन लक्षण दिखाई दे, तो तुरंत 112 / 911 पर कॉल करें या अस्पताल जाएं:'}
          </p>
          <ul className="space-y-2 pt-1">
            {emergencySigns.map((emergency, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/80 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800/80 text-xs font-bold text-rose-800 dark:text-rose-200"
              >
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{emergency}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 8. Frequently Asked Questions (FAQ Accordions) */}
        {faqs && faqs.length > 0 && (
          <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base">
              <HelpCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2>{t.sectionFaq}</h2>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                const question = language === 'en' ? faq.questionEnglish : faq.questionHindi;
                const answer = language === 'en' ? faq.answerEnglish : faq.answerHindi;

                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-700 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-3.5 text-left text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-750 transition cursor-pointer"
                    >
                      <span className="pr-3">{question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-3.5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal bg-slate-50/50 dark:bg-slate-900/40">
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 9. Save to Favorites Quick Button Bar */}
        <div className="pt-2">
          <button
            onClick={() => toggleFavorite(illness.id)}
            className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer ${
              isFavorite
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-900 hover:bg-rose-100'
                : 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700 shadow-teal-600/20'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600 stroke-rose-600' : ''}`} />
            <span>{isFavorite ? t.removeFromFavorites : t.saveToFavorites}</span>
          </button>
        </div>

        {/* 10. Bottom Medical Disclaimer Banner */}
        <div className="pt-4">
          <MedicalDisclaimer compact={false} />
        </div>
      </div>
    </div>
  );
};
