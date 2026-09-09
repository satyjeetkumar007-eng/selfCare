import React, { useState } from 'react';
import {
  User,
  Moon,
  Sun,
  Type,
  PhoneCall,
  ShieldAlert,
  Heart,
  Activity,
  CheckCircle,
  Sparkles,
  HelpCircle,
  FileText,
  LogOut,
  Globe,
  PlusCircle,
  X,
} from 'lucide-react';
import { MedicalDisclaimer } from '../components/MedicalDisclaimer';
import { LogoutModal } from '../components/LogoutModal';
import { CATEGORIES } from '../data/categories';
import { useApp } from '../context/AppContext';
import { Illness } from '../types';

export const ProfileView: React.FC = () => {
  const {
    user,
    language,
    setLanguage,
    isDarkMode,
    toggleDarkMode,
    fontSize,
    setFontSize,
    favorites,
    logout,
    addNewIllness,
    t,
  } = useApp();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  // New illness form state
  const [newIllnessNameEn, setNewIllnessNameEn] = useState('');
  const [newIllnessNameHi, setNewIllnessNameHi] = useState('');
  const [newMedicalName, setNewMedicalName] = useState('');
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]?.id || 'fever-infection');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newDescEn, setNewDescEn] = useState('');
  const [newSymptomsEn, setNewSymptomsEn] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIllnessNameEn.trim()) return;

    const matchedCat = CATEGORIES.find((c) => c.id === newCategory);

    const newIllness: Illness = {
      id: `custom-${Date.now()}`,
      nameEnglish: newIllnessNameEn.trim(),
      nameHindi: newIllnessNameHi.trim() || newIllnessNameEn.trim(),
      medicalName: newMedicalName.trim() || newIllnessNameEn.trim(),
      category: newCategory as any,
      categoryNameEnglish: matchedCat?.nameEnglish || 'General',
      categoryNameHindi: matchedCat?.nameHindi || 'सामान्य',
      imageUrl:
        newImageUrl.trim() ||
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
      shortDescriptionEnglish:
        newDescEn.trim() ||
        `An informative educational overview of ${newIllnessNameEn}.`,
      shortDescriptionHindi:
        `${newIllnessNameHi || newIllnessNameEn} के बारे में शैक्षणिक और स्वास्थ्य मार्गदर्शन।`,
      typicalDurationEnglish: 'Varies based on condition',
      typicalDurationHindi: 'स्थिति के अनुसार भिन्न होता है',
      contagious: false,
      overviewEnglish:
        newDescEn.trim() ||
        `Comprehensive educational facts and home self-care guidelines for ${newIllnessNameEn}.`,
      overviewHindi:
        `${newIllnessNameHi || newIllnessNameEn} के बारे में विस्तृत अवलोकन और आत्म-देखभाल युक्तियां।`,
      symptomsEnglish: newSymptomsEn
        ? newSymptomsEn.split(',').map((s) => s.trim())
        : ['Mild discomfort', 'Fatigue', 'General unwell feeling'],
      symptomsHindi: ['हल्की बेचैनी', 'थकान', 'अस्वस्थ महसूस होना'],
      causesEnglish: ['Environmental factors', 'Microbial causes', 'Lifestyle'],
      causesHindi: ['पर्यावरणीय कारक', 'संक्रमण', 'जीवन शैली'],
      riskFactorsEnglish: ['Weakened immunity', 'Lack of sleep', 'Dehydration'],
      riskFactorsHindi: ['कमजोर रोग प्रतिरोधक क्षमता', 'नींद की कमी', 'पानी की कमी'],
      precautionsEnglish: ['Rest adequately', 'Stay hydrated', 'Monitor body signals'],
      precautionsHindi: ['पर्याप्त आराम करें', 'पानी पिएं', 'लक्षणों पर ध्यान दें'],
      preventionEnglish: ['Maintain balanced diet', 'Wash hands regularly', 'Exercise'],
      preventionHindi: ['संतुलित आहार लें', 'नियमित हाथ धोएं', 'व्यायाम करें'],
      selfCareEnglish: [
        'Ensure 8 hours of sleep',
        'Drink plenty of warm liquids',
        'Avoid strenuous physical exertion',
      ],
      selfCareHindi: ['8 घंटे की नींद लें', 'पर्याप्त गर्म तरल पदार्थ पिएं', 'शारीरिक तनाव से बचें'],
      doctorWarningEnglish: [
        'High persistent fever over 102°F (38.9°C)',
        'Difficulty breathing or chest tightness',
        'Symptoms worsening past 5 days',
      ],
      doctorWarningHindi: [
        'तेज बुखार जो 102°F से अधिक हो',
        'सांस लेने में कठिनाई या सीने में जकड़न',
        'लक्षण 5 दिनों से अधिक समय तक बिगड़ते रहें',
      ],
      emergencySignsEnglish: [
        'Loss of consciousness or severe confusion',
        'Inability to breathe',
        'Severe acute chest pain',
      ],
      emergencySignsHindi: [
        'बेहोशी या अत्यधिक भ्रम',
        'सांस न ले पाना',
        'सीने में अत्यधिक तीव्र दर्द',
      ],
      tagsEnglish: ['health', 'care', newIllnessNameEn.toLowerCase()],
      tagsHindi: ['स्वास्थ्य', 'देखभाल', (newIllnessNameHi || newIllnessNameEn).toLowerCase()],
      faqEnglish: [
        {
          questionEnglish: `How is ${newIllnessNameEn} managed at home?`,
          questionHindi: `${newIllnessNameHi || newIllnessNameEn} का घर पर कैसे ध्यान रखें?`,
          answerEnglish: 'Rest, stay well hydrated, and follow basic self-care guidance.',
          answerHindi: 'पर्याप्त आराम करें, पानी पिएं और बुनियादी देखभाल का पालन करें।',
        },
      ],
      faqHindi: [
        {
          questionEnglish: `How is ${newIllnessNameEn} managed at home?`,
          questionHindi: `${newIllnessNameHi || newIllnessNameEn} का घर पर कैसे ध्यान रखें?`,
          answerEnglish: 'Rest, stay well hydrated, and follow basic self-care guidance.',
          answerHindi: 'पर्याप्त आराम करें, पानी पिएं और बुनियादी देखभाल का पालन करें।',
        },
      ],
    };

    addNewIllness(newIllness);
    setAddSuccess(true);
    setTimeout(() => {
      setAddSuccess(false);
      setShowAddModal(false);
      setNewIllnessNameEn('');
      setNewIllnessNameHi('');
      setNewMedicalName('');
      setNewImageUrl('');
      setNewDescEn('');
      setNewSymptomsEn('');
    }, 1500);
  };

  return (
    <div id="profile-view" className="space-y-5 px-4 pt-2 pb-24 animate-in fade-in duration-300">
      {/* User Header Profile Card */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-4 relative">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner shrink-0">
            {user?.name ? (
              <span className="text-xl font-black">{user.name.charAt(0).toUpperCase()}</span>
            ) : (
              <User className="w-7 h-7" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="font-extrabold text-lg leading-tight truncate">
              {user?.name || 'Self Care User'}
            </h2>
            <p className="text-xs text-teal-100 font-medium truncate">
              {user?.email || 'user@selfcare.app'}
            </p>
            <div className="flex items-center gap-1 mt-1.5 text-[11px] text-teal-200">
              <Sparkles className="w-3 h-3" />
              <span>{language === 'en' ? 'Active Member' : 'सक्रिय सदस्य'}</span>
            </div>
          </div>
        </div>

        {/* Quick stats inside profile */}
        <div className="mt-4 pt-3.5 border-t border-white/15 grid grid-cols-2 gap-2 text-center text-xs">
          <div className="bg-white/10 rounded-xl p-2">
            <div className="font-extrabold text-base">{favorites.length}</div>
            <div className="text-[11px] text-teal-100">{t.navFavorites}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <div className="font-extrabold text-base">{language === 'en' ? 'English' : 'हिंदी'}</div>
            <div className="text-[11px] text-teal-100">{t.languageSetting}</div>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
          {t.settingsTitle}
        </h3>

        {/* Language Selector */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {t.languageSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'English (Current)' : 'हिंदी (वर्तमान)'}
              </div>
            </div>
          </div>

          <div className="flex items-center bg-slate-100 dark:bg-slate-700/70 p-1 rounded-xl gap-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                language === 'en'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                language === 'hi'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {t.themeSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {isDarkMode
                  ? (language === 'en' ? 'Dark Theme' : 'डार्क मोड')
                  : (language === 'en' ? 'Light Theme' : 'लाइट मोड')}
              </div>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
              isDarkMode ? 'bg-teal-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                isDarkMode ? 'left-6.5' : 'left-0.5'
              }`}
            />
          </button>
        </div>

        {/* Text Size Selector */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Type className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {t.textSizeSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {fontSize === 'normal'
                  ? (language === 'en' ? 'Default 16px' : 'सामान्य')
                  : fontSize === 'large'
                  ? (language === 'en' ? 'Large 18px' : 'बड़ा')
                  : (language === 'en' ? 'Extra Large 20px' : 'अति बड़ा')}
              </div>
            </div>
          </div>

          <div className="flex items-center bg-slate-100 dark:bg-slate-700/70 p-1 rounded-xl gap-1 text-xs font-bold">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                fontSize === 'normal'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                fontSize === 'large'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                fontSize === 'xlarge'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              A++
            </button>
          </div>
        </div>

        {/* Admin Feature: Add New Illness To Database */}
        <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {language === 'en' ? 'Contribute / Add Illness' : 'बीमारी जोड़ें'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'Expand medical knowledge base' : 'ज्ञानकोश में नई जानकारी जोड़ें'}
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs transition cursor-pointer"
          >
            {language === 'en' ? '+ Add' : '+ जोड़ें'}
          </button>
        </div>
      </div>

      {/* About & Disclaimer */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
          {language === 'en' ? 'About & Safety' : 'के बारे में एवं सुरक्षा'}
        </h3>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
          <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Heart className="w-4 h-4 text-teal-600" />
            <span>Self Care Health App</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {language === 'en'
              ? '“Know Your Health. Take Care of Yourself.” is an educational reference dedicated to spreading clear, accessible health knowledge across communities in English and Hindi.'
              : '“अपने स्वास्थ्य को जानें, अपना ख्याल रखें।” एक शैक्षणिक स्वास्थ्य मंच है जो अंग्रेजी और हिंदी दोनों भाषाओं में स्पष्ट स्वास्थ्य जानकारी प्रदान करता है।'}
          </p>
        </div>

        <MedicalDisclaimer compact={true} />
      </div>

      {/* Logout Action Button */}
      <div className="pt-2">
        <button
          onClick={() => setShowLogoutModal(true)}
          className="w-full py-3.5 px-4 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-sm font-bold hover:bg-rose-100/70 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>{t.btnLogout}</span>
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={() => {
          setShowLogoutModal(false);
          logout();
        }}
      />

      {/* Add New Illness Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center">
                <PlusCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {language === 'en' ? 'Add New Illness' : 'नई बीमारी जोड़ें'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'en' ? 'Persists directly to database' : 'सीधे डेटाबेस में सहेजा जाएगा'}
                </p>
              </div>
            </div>

            {addSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 text-center text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{language === 'en' ? 'Illness added successfully!' : 'बीमारी सफलतापूर्वक जोड़ी गई!'}</span>
              </div>
            ) : (
              <form onSubmit={handleAddSubmit} className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Illness Name (English) *' : 'बीमारी का नाम (अंग्रेजी) *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newIllnessNameEn}
                    onChange={(e) => setNewIllnessNameEn(e.target.value)}
                    placeholder="e.g. Bronchitis"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Illness Name (Hindi)' : 'बीमारी का नाम (हिंदी)'}
                  </label>
                  <input
                    type="text"
                    value={newIllnessNameHi}
                    onChange={(e) => setNewIllnessNameHi(e.target.value)}
                    placeholder="e.g. ब्रोंकाइटिस"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Medical / Scientific Name' : 'चिकित्सीय वैज्ञानिक नाम'}
                  </label>
                  <input
                    type="text"
                    value={newMedicalName}
                    onChange={(e) => setNewMedicalName(e.target.value)}
                    placeholder="e.g. Acute Bronchitis"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Category' : 'श्रेणी'}
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {language === 'en' ? cat.nameEnglish : cat.nameHindi}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Medical Image URL (Optional)' : 'मेडिकल इमेज यूआरएल (वैकल्पिक)'}
                  </label>
                  <input
                    type="url"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Short Description' : 'संक्षिप्त विवरण'}
                  </label>
                  <textarea
                    rows={2}
                    value={newDescEn}
                    onChange={(e) => setNewDescEn(e.target.value)}
                    placeholder="Brief educational explanation of the condition..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'en' ? 'Symptoms (comma separated)' : 'लक्षण (कॉमा से अलग)'}
                  </label>
                  <input
                    type="text"
                    value={newSymptomsEn}
                    onChange={(e) => setNewSymptomsEn(e.target.value)}
                    placeholder="Cough, Sore throat, Low fever"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300"
                  >
                    {t.btnCancel}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs transition"
                  >
                    {language === 'en' ? 'Save Illness' : 'सहेजें'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
