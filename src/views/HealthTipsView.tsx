import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Lightbulb,
  Heart,
  Droplet,
  ShieldCheck,
  Award,
  HeartPulse,
} from 'lucide-react';
import { HEALTH_TIPS } from '../data/healthTips';
import { IconHelper } from '../components/IconHelper';
import { BreathingWidget } from '../components/BreathingWidget';
import { HydrationWidget } from '../components/HydrationWidget';
import { MedicalDisclaimer } from '../components/MedicalDisclaimer';
import { useApp } from '../context/AppContext';

export const HealthTipsView: React.FC = () => {
  const { language, t } = useApp();
  const [expandedTipId, setExpandedTipId] = useState<string | null>('stay-hydrated');
  const [completedHabits, setCompletedHabits] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('selfcare_completed_habits');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleTip = (id: string) => {
    setExpandedTipId((prev) => (prev === id ? null : id));
  };

  const toggleHabit = (habitKey: string) => {
    setCompletedHabits((prev) => {
      const updated = { ...prev, [habitKey]: !prev[habitKey] };
      try {
        localStorage.setItem('selfcare_completed_habits', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const completedCount = Object.values(completedHabits).filter(Boolean).length;

  return (
    <div id="health-tips-view" className="space-y-6 px-4 pt-2 pb-24 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1">
            <HeartPulse className="w-3.5 h-3.5" />
            {language === 'en' ? 'Daily Wellness' : 'दैनिक स्वास्थ्य'}
          </span>
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            {completedCount}{' '}
            {language === 'en' ? 'habits checked today' : 'आदतें पूरी की गईं'}
          </span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t.selfCareTips}
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {language === 'en'
            ? 'Evidence-based daily habits for immune resilience, energy, and overall health.'
            : 'प्रतिरक्षा, ऊर्जा और समग्र स्वास्थ्य के लिए साक्ष्य-आधारित दैनिक आदतें।'}
        </p>
      </div>

      {/* Interactive Tools: Hydration & Breathing */}
      <div className="space-y-4">
        <HydrationWidget />
        <BreathingWidget />
      </div>

      {/* Detailed Health Tips List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>{language === 'en' ? 'Essential Self-Care Guides' : 'आवश्यक आत्म-देखभाल मार्गदर्शिका'}</span>
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            {HEALTH_TIPS.length} {language === 'en' ? 'Guides' : 'मार्गदर्शिका'}
          </span>
        </div>

        {HEALTH_TIPS.map((tip) => {
          const isExpanded = expandedTipId === tip.id;
          const title = language === 'en' ? tip.titleEnglish : tip.titleHindi;
          const shortDesc = language === 'en' ? tip.shortDescriptionEnglish : tip.shortDescriptionHindi;
          const detailedGuidance = language === 'en' ? tip.fullGuidanceEnglish.join(' ') : tip.fullGuidanceHindi.join(' ');
          const actionItems = language === 'en' ? tip.actionableStepsEnglish : tip.actionableStepsHindi;
          const categoryName = language === 'en' ? tip.categoryEnglish : tip.categoryHindi;

          return (
            <div
              key={tip.id}
              id={`health-tip-card-${tip.id}`}
              className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-xs transition-all duration-200"
            >
              {/* Card Header clickable */}
              <div
                onClick={() => toggleTip(tip.id)}
                className="p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-750 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <IconHelper iconName={tip.iconName} className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      {categoryName}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                <button
                  aria-label={isExpanded ? 'Collapse guide' : 'Expand guide'}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0"
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-700/60 space-y-3.5 bg-slate-50/50 dark:bg-slate-900/30">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {detailedGuidance}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>{language === 'en' ? 'Daily Action Checklist:' : 'दैनिक क्रिया सूची:'}</span>
                    </h4>

                    <div className="space-y-1.5">
                      {actionItems.map((action, idx) => {
                        const habitKey = `${tip.id}-${idx}`;
                        const isDone = !!completedHabits[habitKey];

                        return (
                          <div
                            key={idx}
                            onClick={() => toggleHabit(habitKey)}
                            className={`p-2.5 rounded-2xl flex items-center justify-between text-xs cursor-pointer border transition ${
                              isDone
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 line-through opacity-80'
                                : 'bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-400'
                            }`}
                          >
                            <span className="pr-2">{action}</span>
                            <span
                              className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition ${
                                isDone
                                  ? 'bg-emerald-600 text-white'
                                  : 'border border-slate-300 dark:border-slate-600'
                              }`}
                            >
                              {isDone ? '✓' : ''}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Safety Notice */}
      <MedicalDisclaimer compact={true} />
    </div>
  );
};
