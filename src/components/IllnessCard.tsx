import React from 'react';
import { Heart, ArrowRight, Clock, ShieldAlert } from 'lucide-react';
import { Illness } from '../types';
import { useApp } from '../context/AppContext';

interface IllnessCardProps {
  illness: Illness;
  onSelect: (illness: Illness) => void;
}

export const IllnessCard: React.FC<IllnessCardProps> = ({ illness, onSelect }) => {
  const { language, favorites, toggleFavorite, t } = useApp();
  const isFavorite = favorites.includes(illness.id);

  const displayName = language === 'en' ? illness.nameEnglish : illness.nameHindi;
  const secondaryName = language === 'en' ? illness.nameHindi : illness.nameEnglish;
  const categoryName = language === 'en' ? illness.categoryNameEnglish : illness.categoryNameHindi;
  const shortDesc = language === 'en' ? illness.shortDescriptionEnglish : illness.shortDescriptionHindi;
  const duration = language === 'en' ? illness.typicalDurationEnglish : illness.typicalDurationHindi;

  return (
    <article
      id={`illness-card-${illness.id}`}
      onClick={() => onSelect(illness)}
      className="group cursor-pointer bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-xs hover:shadow-lg hover:border-teal-500/40 transition-all duration-300 flex flex-col active:scale-[0.99]"
    >
      {/* Image Banner */}
      <div className="relative h-44 sm:h-48 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <img
          src={illness.imageUrl}
          alt={displayName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-teal-800 dark:text-teal-300 shadow-xs">
            {categoryName}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          id={`favorite-btn-${illness.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(illness.id);
          }}
          aria-label={isFavorite ? t.removeFromFavorites : t.saveToFavorites}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 active:scale-90 cursor-pointer ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white stroke-white' : 'stroke-[2]'}`} />
        </button>

        {/* Floating title on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-extrabold text-lg leading-tight tracking-tight drop-shadow-sm">
            {displayName}
          </h3>
          <p className="text-xs text-teal-200/90 font-medium line-clamp-1">
            {secondaryName} • {illness.medicalName}
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-normal">
          {shortDesc}
        </p>

        {/* Meta badges: Duration & Contagious indicator */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-700/60 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
            <span className="truncate">{duration}</span>
          </div>

          <div className="flex items-center gap-1 text-teal-600 dark:text-teal-400 font-bold group-hover:translate-x-0.5 transition-transform">
            <span>{t.learnMore}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
};
