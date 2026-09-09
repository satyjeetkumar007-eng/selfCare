import React from 'react';
import { Heart, ArrowRight, Compass, AlertCircle } from 'lucide-react';
import { Illness } from '../types';
import { IllnessCard } from '../components/IllnessCard';
import { useApp } from '../context/AppContext';

export const FavoritesView: React.FC = () => {
  const { language, favorites, illnesses, setSelectedIllness, setActiveTab, t } = useApp();

  const favoriteIllnesses = illnesses.filter((i) => favorites.includes(i.id));

  return (
    <div id="favorites-view" className="space-y-4 px-4 pt-2 pb-24 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span>{t.favoritesTitle}</span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {language === 'en'
              ? 'Quick access to your saved illness guides and health tips.'
              : 'आपके द्वारा सहेजी गई बीमारियों और स्वास्थ्य गाइड तक त्वरित पहुंच।'}
          </p>
        </div>

        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300">
          {favoriteIllnesses.length} {language === 'en' ? 'Saved' : 'सहेजे गए'}
        </span>
      </div>

      {favoriteIllnesses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {favoriteIllnesses.map((illness) => (
            <IllnessCard
              key={illness.id}
              illness={illness}
              onSelect={(selected) => setSelectedIllness(selected)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700 space-y-4 my-8 shadow-xs">
          <div className="w-16 h-16 rounded-3xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8 stroke-[1.8]" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.noFavoritesTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              {t.noFavoritesSubtitle}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('explore')}
            className="px-5 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md shadow-teal-600/20 active:scale-95 transition inline-flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>{t.exploreIllnesses}</span>
          </button>
        </div>
      )}
    </div>
  );
};
