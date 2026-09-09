import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, UserProfile, Illness, TabType, AuthScreenType } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { HealthDatabaseService } from '../services/db';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)['en'];
  user: UserProfile | null;
  favorites: string[];
  toggleFavorite: (illnessId: string) => void;
  illnesses: Illness[];
  addNewIllness: (illness: Illness) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  authScreen: AuthScreenType;
  setAuthScreen: (screen: AuthScreenType) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  selectedIllness: Illness | null;
  setSelectedIllness: (illness: Illness | null) => void;
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  login: (email: string, pass: string) => { success: boolean; error?: string };
  loginWithGoogle: () => void;
  register: (name: string, email: string, pass: string) => { success: boolean; error?: string };
  logout: () => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Language
  const [language, setLanguageState] = useState<Language>(() => HealthDatabaseService.getSavedLanguage());

  // User Auth State
  const [user, setUser] = useState<UserProfile | null>(() => HealthDatabaseService.getCurrentUser());

  // Auth Screen State: splash -> onboarding (if first visit) -> login / app
  const [authScreen, setAuthScreen] = useState<AuthScreenType>('splash');

  // Navigation State
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedIllness, setSelectedIllness] = useState<Illness | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Illnesses List (including any admin additions)
  const [illnesses, setIllnesses] = useState<Illness[]>(() => HealthDatabaseService.getAllIllnesses());

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    const current = HealthDatabaseService.getCurrentUser();
    return current ? HealthDatabaseService.getFavorites(current.userId) : ['common-cold', 'fever', 'headache'];
  });

  // Theme & Font Scale
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('selfcare_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [fontSize, setFontSizeState] = useState<'normal' | 'large' | 'xlarge'>(() => {
    try {
      const saved = localStorage.getItem('selfcare_font_size');
      return (saved as 'normal' | 'large' | 'xlarge') || 'normal';
    } catch {
      return 'normal';
    }
  });

  // Dark Mode DOM sync
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('selfcare_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('selfcare_theme', 'light');
    }
  }, [isDarkMode]);

  // Language Setter
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    HealthDatabaseService.setSavedLanguage(lang);
    if (user) {
      const updated = HealthDatabaseService.updateProfile(user.userId, { language: lang });
      if (updated) setUser(updated);
    }
  };

  // Font Size Setter
  const setFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    setFontSizeState(size);
    localStorage.setItem('selfcare_font_size', size);
  };

  // Toggle Favorite
  const toggleFavorite = (illnessId: string) => {
    const uid = user ? user.userId : 'guest-user';
    const updated = HealthDatabaseService.toggleFavorite(uid, illnessId);
    setFavorites(updated);
  };

  // Add new illness (Admin capability)
  const addNewIllness = (newIllness: Illness) => {
    const all = HealthDatabaseService.addIllness(newIllness);
    setIllnesses(all);
  };

  // Auth Functions
  const login = (email: string, pass: string) => {
    const res = HealthDatabaseService.login(email, pass);
    if (res.success && res.user) {
      setUser(res.user);
      setFavorites(HealthDatabaseService.getFavorites(res.user.userId));
      setLanguageState(res.user.language || 'en');
      setAuthScreen('app');
      return { success: true };
    }
    return { success: false, error: res.error };
  };

  const loginWithGoogle = () => {
    const res = HealthDatabaseService.loginWithGoogle();
    if (res.success && res.user) {
      setUser(res.user);
      setFavorites(HealthDatabaseService.getFavorites(res.user.userId));
      setAuthScreen('app');
    }
  };

  const register = (name: string, email: string, pass: string) => {
    const res = HealthDatabaseService.register(name, email, pass);
    if (res.success && res.user) {
      setUser(res.user);
      setFavorites(HealthDatabaseService.getFavorites(res.user.userId));
      setAuthScreen('app');
      return { success: true };
    }
    return { success: false, error: res.error };
  };

  const logout = () => {
    HealthDatabaseService.logout();
    setUser(null);
    setAuthScreen('login');
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    if (user) {
      const updated = HealthDatabaseService.updateProfile(user.userId, updates);
      if (updated) setUser(updated);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        user,
        favorites,
        toggleFavorite,
        illnesses,
        addNewIllness,
        isDarkMode,
        toggleDarkMode,
        fontSize,
        setFontSize,
        authScreen,
        setAuthScreen,
        activeTab,
        setActiveTab,
        selectedIllness,
        setSelectedIllness,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        login,
        loginWithGoogle,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
