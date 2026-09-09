import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { HealthDatabaseService } from './services/db';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { HealthTipsView } from './views/HealthTipsView';
import { FavoritesView } from './views/FavoritesView';
import { ProfileView } from './views/ProfileView';
import { IllnessDetailView } from './views/IllnessDetailView';
import { OnboardingView } from './views/OnboardingView';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';

const AppContent: React.FC = () => {
  const {
    authScreen,
    setAuthScreen,
    user,
    activeTab,
    selectedIllness,
    setSelectedIllness,
    fontSize,
  } = useApp();

  // Scroll to top whenever tab or selected illness changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, selectedIllness]);

  // Text scaling class
  const textScaleClass =
    fontSize === 'large'
      ? 'text-[108%]'
      : fontSize === 'xlarge'
      ? 'text-[116%]'
      : 'text-[100%]';

  // 1. Splash Screen
  if (authScreen === 'splash') {
    return (
      <SplashScreen
        onFinish={() => {
          if (!HealthDatabaseService.isOnboardingCompleted()) {
            setAuthScreen('onboarding');
          } else if (!user) {
            setAuthScreen('login');
          } else {
            setAuthScreen('app');
          }
        }}
      />
    );
  }

  // 2. Onboarding Flow (3 screens)
  if (authScreen === 'onboarding') {
    return (
      <OnboardingView
        onComplete={() => {
          HealthDatabaseService.setOnboardingCompleted(true);
          if (!user) {
            setAuthScreen('login');
          } else {
            setAuthScreen('app');
          }
        }}
      />
    );
  }

  // 3. Login Screen
  if (authScreen === 'login') {
    return (
      <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${textScaleClass}`}>
        <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 border-x border-slate-200/60 dark:border-slate-800 shadow-xl">
          <LoginView />
        </div>
      </div>
    );
  }

  // 4. Register Screen
  if (authScreen === 'register') {
    return (
      <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${textScaleClass}`}>
        <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 border-x border-slate-200/60 dark:border-slate-800 shadow-xl">
          <RegisterView />
        </div>
      </div>
    );
  }

  // 5. Main Application Screen
  return (
    <div
      id="self-care-app"
      className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 ${textScaleClass}`}
    >
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 border-x border-slate-200/60 dark:border-slate-800 shadow-xl flex flex-col relative">
        {/* Sticky Header (hidden if viewing detail to give full screen to detail view) */}
        {!selectedIllness && <Header />}

        {/* Dynamic Views */}
        <main className="flex-1">
          {selectedIllness ? (
            <IllnessDetailView
              illness={selectedIllness}
              onBack={() => setSelectedIllness(null)}
            />
          ) : (
            <>
              {activeTab === 'home' && <HomeView />}
              {activeTab === 'explore' && <ExploreView />}
              {activeTab === 'tips' && <HealthTipsView />}
              {activeTab === 'favorites' && <FavoritesView />}
              {activeTab === 'profile' && <ProfileView />}
            </>
          )}
        </main>

        {/* Bottom Navigation (Hidden if viewing detail) */}
        {!selectedIllness && <Navbar />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
