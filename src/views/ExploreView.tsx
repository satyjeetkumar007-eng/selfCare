import React, { useMemo } from 'react';
import { Search, X, Filter, Sparkles, AlertCircle } from 'lucide-react';
import { Illness, Category } from '../types';
import { CATEGORIES } from '../data/categories';
import { IllnessCard } from '../components/IllnessCard';
import { IconHelper } from '../components/IconHelper';
import { useApp } from '../context/AppContext';

export const ExploreView: React.FC = () => {
  const {
    language,
    t,
    illnesses,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    setSelectedIllness,
  } = useApp();

  // Filter illnesses based on category and search query (checking English and Hindi fields)
  const filteredIllnesses = useMemo(() => {
    return illnesses.filter((illness) => {
      // Category filter
      if (selectedCategory !== 'all' && illness.category !== selectedCategory) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchEnglishName = illness.nameEnglish.toLowerCase().includes(q);
        const matchHindiName = illness.nameHindi.toLowerCase().includes(q);
        const matchMedicalName = illness.medicalName.toLowerCase().includes(q);
        const matchCategoryEn = illness.categoryNameEnglish.toLowerCase().includes(q);
        const matchCategoryHi = illness.categoryNameHindi.toLowerCase().includes(q);
        const matchDescEn = illness.shortDescriptionEnglish.toLowerCase().includes(q);
        const matchDescHi = illness.shortDescriptionHindi.toLowerCase().includes(q);
        const matchSymptomsEn = illness.symptomsEnglish.some((s) => s.toLowerCase().includes(q));
        const matchSymptomsHi = illness.symptomsHindi.some((s) => s.toLowerCase().includes(q));
        const matchTagsEn = illness.tagsEnglish.some((t) => t.toLowerCase().includes(q));
        const matchTagsHi = illness.tagsHindi.some((t) => t.toLowerCase().includes(q));

        return (
          matchEnglishName ||
          matchHindiName ||
          matchMedicalName ||
          matchCategoryEn ||
          matchCategoryHi ||
          matchDescEn ||
          matchDescHi ||
          matchSymptomsEn ||
          matchSymptomsHi ||
          matchTagsEn ||
          matchTagsHi
        );
      }

      return true;
    });
  }, [illnesses, selectedCategory, searchQuery]);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div id="explore-view" className="space-y-4 pb-24 px-4 pt-2 animate-in fade-in duration-300">
      {/* Search Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.exploreTitle}
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {language === 'en'
            ? 'Search through common illnesses, symptoms, and medical information.'
            : 'सामान्य बीमारियों, लक्षणों और चिकित्सा जानकारी में खोजें।'}
        </p>

        {/* Search Input Box */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
          <input
            id="explore-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-xs transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Categories Horizontal Chip Carousel */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full font-bold text-xs whitespace-nowrap transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.allCategories}
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const catName = language === 'en' ? cat.nameEnglish : cat.nameHindi;

            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs whitespace-nowrap transition cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                <IconHelper iconName={cat.iconName} className="w-3.5 h-3.5" />
                <span>{catName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Stats Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-0.5">
        <span>
          {filteredIllnesses.length}{' '}
          {language === 'en' ? 'illnesses found' : 'बीमारियां उपलब्ध'}
          {selectedCategory !== 'all' && activeCategory && (
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              {' '}
              • {language === 'en' ? activeCategory.nameEnglish : activeCategory.nameHindi}
            </span>
          )}
        </span>

        {(searchQuery || selectedCategory !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-teal-600 dark:text-teal-400 font-bold hover:underline"
          >
            {t.clearFilter}
          </button>
        )}
      </div>

      {/* Illness Cards Grid */}
      {filteredIllnesses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredIllnesses.map((illness) => (
            <IllnessCard
              key={illness.id}
              illness={illness}
              onSelect={(selected) => setSelectedIllness(selected)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700 space-y-3 my-4">
          <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-base text-slate-800 dark:text-white">
            {t.noIllnessFound}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
            {language === 'en'
              ? 'Try adjusting your search terms or clearing the selected category filter.'
              : 'कृपया अन्य खोज शब्द का उपयोग करें या श्रेणी फ़िल्टर हटाएं।'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold shadow-xs hover:bg-teal-700 transition"
          >
            {t.clearFilter}
          </button>
        </div>
      )}
    </div>
  );
};
