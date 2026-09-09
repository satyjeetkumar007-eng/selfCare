import React from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Heart,
  Droplet,
  Compass,
  AlertCircle,
  Activity,
  HeartPulse,
} from 'lucide-react';
import { Illness, Category } from '../types';
import { CATEGORIES } from '../data/categories';
import { HEALTH_TIPS } from '../data/healthTips';
import { IllnessCard } from '../components/IllnessCard';
import { IconHelper } from '../components/IconHelper';
import { MedicalDisclaimer } from '../components/MedicalDisclaimer';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const {
    language,
    t,
    user,
    illnesses,
    setSelectedIllness,
    setSelectedCategory,
    setSearchQuery,
    setActiveTab,
  } = useApp();

  const getGreeting = () => {
    const hour = new Date().getHours();
    const userName = user?.name ? user.name.split(' ')[0] : (language === 'en' ? 'Friend' : 'साथी');
    if (hour < 12) {
      return language === 'en' ? `Good morning, ${userName}` : `शुभ प्रभात, ${userName}`;
    } else if (hour < 17) {
      return language === 'en' ? `Good afternoon, ${userName}` : `नमस्ते, ${userName}`;
    } else {
      return language === 'en' ? `Good evening, ${userName}` : `शुभ संध्या, ${userName}`;
    }
  };

  const handleSearchClick = (query = '') => {
    setSearchQuery(query);
    setActiveTab('explore');
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('explore');
  };

  const featuredIllness = illnesses.find((i) => i.isFeatured) || illnesses[0];
  const popularIllnesses = illnesses.filter((i) => i.isPopular).slice(0, 6);
  const featuredTip = HEALTH_TIPS[0];

  const popularSearches = language === 'en'
    ? ['Fever', 'Common Cold', 'Cough', 'Headache', 'Migraine', 'Acidity', 'Diabetes']
    : ['बुखार', 'जुकाम', 'खांसी', 'सिरदर्द', 'माइग्रेन', 'एसिडिटी', 'डायबिटीज'];

  return (
    <div id="home-view" className="space-y-6 pb-24 animate-in fade-in duration-300">
      {/* 1. Header Greeting & Tagline */}
      <section className="px-4 pt-3 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'en' ? 'Self Care Health' : 'सेल्फ केयर स्वास्थ्य'}
          </span>
          <span className="text-[11px] font-medium text-slate-400">
            {new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN', {
              month: 'short',
              day: 'numeric',
              weekday: 'short',
            })}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {getGreeting()} <span className="inline-block animate-pulse">🌿</span>
        </h1>

        <p className="text-xs sm:text-sm font-semibold text-teal-700 dark:text-teal-300/90 leading-snug">
          {language === 'en'
            ? '“Know Your Health. Take Care of Yourself.”'
            : '“अपने स्वास्थ्य को जानें, अपना ख्याल रखें।”'}
        </p>

        {/* 2. Interactive Search Bar Entry */}
        <div
          id="home-search-trigger"
          onClick={() => handleSearchClick('')}
          role="button"
          tabIndex={0}
          className="mt-3.5 flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-teal-400 dark:hover:border-teal-500 cursor-pointer transition-all duration-200 group"
        >
          <Search className="w-4 h-4 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
          <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 flex-1 truncate">
            {t.searchPlaceholder}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300">
            {language === 'en' ? 'Search' : 'खोजें'}
          </span>
        </div>

        {/* Quick Symptom Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 no-scrollbar text-xs">
          <span className="text-[11px] text-slate-400 shrink-0 font-semibold mr-0.5">
            {language === 'en' ? 'Popular:' : 'लोकप्रिय:'}
          </span>
          {popularSearches.map((symptom) => (
            <button
              key={symptom}
              onClick={() => handleSearchClick(symptom)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 text-[11px] font-medium shrink-0 transition cursor-pointer"
            >
              {symptom}
            </button>
          ))}
        </div>
      </section>

      {/* Safety Notice Strip */}
      <div className="px-4">
        <MedicalDisclaimer compact={true} />
      </div>

      {/* 3. Featured Illness Spotlight Card */}
      {featuredIllness && (
        <section className="px-4">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                {language === 'en' ? 'Featured Health Guide' : 'विशेष स्वास्थ्य मार्गदर्शिका'}
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('explore')}
              className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>{t.viewAll}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div
            id="featured-illness-card"
            onClick={() => setSelectedIllness(featuredIllness)}
            className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl active:scale-[0.99]"
          >
            <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
              <img
                src={featuredIllness.imageUrl}
                alt={language === 'en' ? featuredIllness.nameEnglish : featuredIllness.nameHindi}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-600 text-white shadow-xs">
                {language === 'en' ? 'Featured Spotlight' : 'विशेष जानकारी'}
              </span>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-black text-xl leading-tight">
                  {language === 'en' ? featuredIllness.nameEnglish : featuredIllness.nameHindi}
                </h3>
                <p className="text-xs text-teal-200 font-medium">
                  {featuredIllness.medicalName} • {language === 'en' ? featuredIllness.typicalDurationEnglish : featuredIllness.typicalDurationHindi}
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 pr-3 font-normal">
                {language === 'en' ? featuredIllness.shortDescriptionEnglish : featuredIllness.shortDescriptionHindi}
              </p>
              <div className="shrink-0 w-9 h-9 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Browse by Health Category */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.categories}
          </h2>
          <button
            onClick={() => setActiveTab('explore')}
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>{t.viewAll}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {CATEGORIES.slice(0, 8).map((cat) => {
            const count = illnesses.filter((i) => i.category === cat.id).length;
            const catName = language === 'en' ? cat.nameEnglish : cat.nameHindi;

            return (
              <button
                key={cat.id}
                id={`home-category-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className="p-3 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 text-left hover:border-teal-500/50 hover:shadow-md transition-all duration-200 group active:scale-[0.98] cursor-pointer"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${cat.badgeBg} ${cat.badgeText}`}
                >
                  <IconHelper iconName={cat.iconName} className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-slate-800 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 truncate">
                  {catName}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {count} {language === 'en' ? 'Illnesses' : 'बीमारियां'}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. Daily Self-Care Tip Highlight */}
      <section className="px-4">
        <div className="p-4 rounded-3xl bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-teal-500/15 border border-teal-200/80 dark:border-teal-800/50 relative overflow-hidden">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider flex items-center gap-1">
                <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
                {t.selfCareTips}
              </span>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                {language === 'en' ? featuredTip.titleEnglish : featuredTip.titleHindi}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                {language === 'en' ? featuredTip.shortDescriptionEnglish : featuredTip.shortDescriptionHindi}
              </p>
            </div>

            <button
              onClick={() => setActiveTab('tips')}
              className="shrink-0 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs active:scale-95 transition cursor-pointer"
            >
              {language === 'en' ? 'Read Tips' : 'युक्तियां पढ़ें'}
            </button>
          </div>
        </div>
      </section>

      {/* 6. Popular / Common Illnesses */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? 'Common Illnesses' : 'सामान्य बीमारियां'}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('explore')}
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>{t.viewAll}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {popularIllnesses.map((illness) => (
            <IllnessCard
              key={illness.id}
              illness={illness}
              onSelect={(selected) => setSelectedIllness(selected)}
            />
          ))}
        </div>
      </section>

      {/* 7. Bottom Full Disclaimer */}
      <div className="px-4">
        <MedicalDisclaimer compact={false} />
      </div>
    </div>
  );
};
