import React from 'react';
import { Home, Compass, Heart, HeartPulse, User } from 'lucide-react';
import { TabType } from '../types';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, favorites, t } = useApp();

  const navItems: { id: TabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'explore', label: t.navExplore, icon: Compass },
    { id: 'favorites', label: t.navFavorites, icon: Heart },
    { id: 'tips', label: t.navSelfCare, icon: HeartPulse },
    { id: 'profile', label: t.navProfile, icon: User },
  ];

  return (
    <nav
      id="bottom-navigation-bar"
      aria-label="Main Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 shadow-lg"
    >
      <div className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const IconComponent = item.icon;

          return (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-teal-600 dark:text-teal-400 font-bold'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <div
                  className={`p-1 rounded-xl transition-colors ${
                    isActive ? 'bg-teal-50 dark:bg-teal-950/60' : ''
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? 'scale-110 stroke-[2.4] fill-teal-600/15' : 'stroke-[1.8]'
                    }`}
                  />
                </div>

                {item.id === 'favorites' && favorites.length > 0 && (
                  <span
                    id="favorites-counter-badge"
                    className="absolute -top-1 -right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-teal-600 text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs"
                  >
                    {favorites.length > 99 ? '99+' : favorites.length}
                  </span>
                )}
              </div>

              <span className="text-[10px] mt-0.5 tracking-tight whitespace-nowrap">
                {item.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-1 w-6 h-0.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
