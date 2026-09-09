import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Heart, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RegisterView: React.FC = () => {
  const { language, setLanguage, t, register, loginWithGoogle, setAuthScreen } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage(language === 'en' ? 'Please enter your full name' : 'कृपया अपना पूरा नाम दर्ज करें');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage(t.errInvalidEmail);
      return;
    }

    if (password.length < 6) {
      setErrorMessage(
        language === 'en'
          ? 'Password must be at least 6 characters long'
          : 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए'
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(
        language === 'en'
          ? 'Passwords do not match. Please verify both fields.'
          : 'पासवर्ड मेल नहीं खाते। कृपया दोनों फ़ील्ड की जांच करें।'
      );
      return;
    }

    if (!agreedToDisclaimer) {
      setErrorMessage(
        language === 'en'
          ? 'Please acknowledge the medical educational disclaimer.'
          : 'कृपया चिकित्सा शैक्षिक अस्वीकरण को स्वीकार करें।'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const res = register(name, email, password);
      setIsSubmitting(false);
      if (!res.success) {
        setErrorMessage(res.error || t.errNetworkProblem);
      }
    }, 400);
  };

  return (
    <div
      id="register-view"
      className="min-h-screen flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-b from-teal-50/40 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors"
    >
      {/* Top Bar with Language Toggle */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs">
            <Heart className="w-4 h-4 fill-white" />
          </div>
          <span className="font-extrabold text-slate-800 dark:text-white tracking-tight">
            Self Care
          </span>
        </div>

        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-teal-700 dark:text-teal-300 shadow-xs hover:bg-teal-50 transition"
        >
          <span>{language === 'en' ? 'हिंदी 🇮🇳' : 'English 🇬🇧'}</span>
        </button>
      </div>

      {/* Main Registration Card */}
      <div className="w-full max-w-md mx-auto my-auto py-4">
        <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-teal-900/5 border border-slate-100 dark:border-slate-700/60 backdrop-blur-xs">
          {/* Header */}
          <div className="text-center space-y-1.5 mb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.registerTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.registerSubtitle}
            </p>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 flex items-start gap-2.5 text-xs font-medium animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t.fullName}
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'en' ? 'e.g. Satyjeet Kumar' : 'उदा. सत्यजीत कुमार'}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t.emailAddress}
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t.password}
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t.confirmPassword}
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                  required
                />
              </div>
            </div>

            {/* Medical Disclaimer acknowledgement checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 text-[11px] text-slate-600 dark:text-slate-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreedToDisclaimer}
                  onChange={(e) => setAgreedToDisclaimer(e.target.checked)}
                  className="mt-0.5 rounded-md border-slate-300 text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span>
                  {language === 'en'
                    ? 'I understand that Self Care is educational and does not provide medical diagnosis or replace a doctor.'
                    : 'मैं समझता/समझती हूँ कि सेल्फ केयर केवल शैक्षिक उद्देश्य के लिए है और यह डॉक्टर का विकल्प नहीं है।'}
                </span>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 active:scale-[0.99] transition flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
            >
              <span>
                {isSubmitting
                  ? (language === 'en' ? 'Creating Account...' : 'खाता बन रहा है...')
                  : t.btnCreateAccount}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social Divider */}
          <div className="relative my-5 flex items-center justify-center">
            <div className="border-t border-slate-200 dark:border-slate-700 w-full" />
            <span className="bg-white dark:bg-slate-800 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider absolute">
              {t.orContinueWith}
            </span>
          </div>

          {/* Google Sign-In */}
          <button
            onClick={loginWithGoogle}
            className="w-full py-3 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-semibold text-sm shadow-xs transition flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>{t.btnContinueWithGoogle}</span>
          </button>

          {/* Switch to Login */}
          <div className="mt-5 text-center text-xs text-slate-500 dark:text-slate-400">
            <span>{t.alreadyHaveAccount} </span>
            <button
              onClick={() => setAuthScreen('login')}
              className="font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              {t.btnLogin}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-md mx-auto text-center pb-2">
        <p className="text-[10px] text-slate-400 dark:text-slate-500">
          {language === 'en'
            ? 'All information in Self Care is strictly educational.'
            : 'सेल्फ केयर में सभी जानकारी पूरी तरह से शैक्षिक है।'}
        </p>
      </div>
    </div>
  );
};
