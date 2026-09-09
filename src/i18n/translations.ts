import { Language } from '../types';

export const TRANSLATIONS = {
  en: {
    appName: 'Self Care',
    tagline: 'Know Your Health. Take Care of Yourself.',
    appDescription: 'An educational health and wellness platform providing easy-to-understand information about common sicknesses and illnesses.',

    // Navigation
    navHome: 'Home',
    navExplore: 'Explore',
    navFavorites: 'Favorites',
    navTips: 'Self Care',
    navProfile: 'Profile',

    // Onboarding
    onboarding1Title: 'Learn About Illnesses',
    onboarding1Desc: 'Explore common illnesses and understand their symptoms and causes.',
    onboarding2Title: 'Know the Precautions',
    onboarding2Desc: 'Learn general precautions and prevention tips.',
    onboarding3Title: 'Take Care of Yourself',
    onboarding3Desc: 'Get useful health information in a simple and easy-to-understand format.',
    getStarted: 'Get Started',
    skip: 'Skip',
    next: 'Next',

    // Authentication
    loginTitle: 'Welcome Back',
    loginSubtitle: 'Sign in to access your saved health guides and personalized care',
    emailLabel: 'Email Address',
    emailPlaceholder: 'name@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    forgotPassword: 'Forgot Password?',
    loginBtn: 'Login',
    createAccountBtn: 'Create New Account',
    continueWithGoogle: 'Continue with Google',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    signInLink: 'Sign In',

    // Registration
    registerTitle: 'Create Account',
    registerSubtitle: 'Join Self Care to personalize your health learning journey',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. John Doe',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    signUpBtn: 'Create Account',

    // Auth Validation & Errors
    errEmailInvalid: 'Invalid email address format',
    errPasswordShort: 'Password must be at least 6 characters',
    errPasswordMatch: 'Passwords do not match',
    errAccountNotFound: 'Account not found. Please register first.',
    errIncorrectPassword: 'Incorrect password. Please try again.',
    errConnection: 'Internet connection problem. Please verify your connection.',
    errGeneric: 'Something went wrong. Please try again.',

    // Forgot password modal
    forgotPassTitle: 'Reset Password',
    forgotPassDesc: "Enter your registered email address and we'll send you a password reset link.",
    sendResetLink: 'Send Reset Link',
    resetSentSuccess: 'Password reset link sent! Please check your inbox.',

    // Logout
    logoutTitle: 'Logout',
    logoutConfirm: 'Are you sure you want to logout?',
    cancel: 'Cancel',
    logoutBtn: 'Logout',

    // Home Screen
    greeting: 'Hello, {name} 👋',
    homeSubtitle: 'Take care of yourself today.',
    searchPlaceholder: 'Search illness or symptom…',
    popularIllnesses: 'Popular Illnesses',
    popularSubtitle: 'Frequently referenced health conditions',
    categories: 'Categories',
    allCategories: 'Browse all categories',
    dailyTipTitle: 'Daily Self-Care Tip',
    dailyTipDefault: 'Drink enough water and stay hydrated throughout the day.',
    viewDetails: 'View Details',
    viewAll: 'See All',
    readGuide: 'Read Medical Guide',

    // Explore / Search
    exploreTitle: 'Explore Illnesses',
    exploreSubtitle: 'Search by medical condition, symptom, or category',
    noIllnessFound: 'No illness found. Please try another search.',
    filterByCategory: 'Filter by Category',
    filterBySymptom: 'Common Symptoms',
    allConditions: 'All Conditions',
    resultsCount: '{count} conditions found',
    clearFilters: 'Clear filters',

    // Illness Details
    overview: 'Overview',
    commonSymptoms: 'Common Symptoms',
    possibleCauses: 'Possible Causes',
    riskFactors: 'Risk Factors',
    precautions: 'Precautions',
    prevention: 'Prevention Tips',
    generalSelfCare: 'General Self-Care',
    whenToSeeDoctor: 'When to See a Doctor',
    emergencyNotice: 'Emergency Warning Signs',
    faqs: 'Frequently Asked Questions',
    contagiousBadge: 'Contagious',
    nonContagiousBadge: 'Non-contagious',
    durationLabel: 'Typical Duration',
    audioReadAloud: 'Read Aloud',
    audioStop: 'Stop Audio',
    shareCondition: 'Share',
    saveToFavorites: 'Add to Favorites',
    removeFromFavorites: 'Remove Favorite',
    savedInFavorites: 'Saved in Favorites',

    // Favorites
    favoritesTitle: 'Saved Illnesses',
    favoritesSubtitle: 'Quick access to your bookmarked health conditions',
    noFavoritesTitle: 'No bookmarked illnesses yet',
    noFavoritesDesc: 'Save conditions here for quick reference whenever you need them.',
    exploreConditionsBtn: 'Explore Illnesses',
    removeBtn: 'Remove',

    // Self Care section
    selfCareSectionTitle: 'Daily Self Care',
    selfCareSectionSubtitle: 'Evidence-based health guidance for everyday vitality',
    hydrationTrackerTitle: 'Daily Water Intake',
    hydrationSub: 'Target: 8 glasses (2 Liters) per day',
    breathingTitle: 'Stress Management Breathing',
    breathingSub: '4-4-4-4 Box breathing exercise to calm your mind',
    habitsLoggedToday: '{count} habits completed today',

    // Profile & Settings
    profileTitle: 'Profile & Settings',
    editProfile: 'Edit Profile',
    language: 'Language',
    selectLanguage: 'Select Language',
    settings: 'Settings',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    medicalDisclaimer: 'Medical Disclaimer',
    adminPanel: 'Database & Illness Manager',
    adminSubtitle: 'View database records or publish new illnesses',
    appearance: 'Appearance & Theme',
    darkMode: 'Dark Mode',
    readingScale: 'Reading Text Size',
    scaleNormal: 'Normal (100%)',
    scaleLarge: 'Large (115%)',
    scaleExtra: 'Extra (125%)',
    emergencyHotlines: 'Emergency Hotlines',
    saveProfileBtn: 'Save Profile Changes',
    profileSavedNotice: 'Profile updated successfully!',

    // Disclaimer
    disclaimerTitle: 'Medical Educational Disclaimer',
    disclaimerText:
      'Self Care provides general health and educational information. It is not a diagnostic tool and does not replace professional medical advice, diagnosis, or treatment. If you have severe, persistent, or worsening symptoms, consult a qualified healthcare professional or seek appropriate medical care.',
  },

  hi: {
    appName: 'सेल्फ केयर',
    tagline: 'अपने स्वास्थ्य को जानें, अपना ख्याल रखें।',
    appDescription: 'एक शैक्षिक स्वास्थ्य और वेलनेस प्लेटफॉर्म जो सामान्य बीमारियों और व्याधियों के बारे में आसान जानकारी प्रदान करता है।',

    // Navigation
    navHome: 'होम',
    navExplore: 'खोजें',
    navFavorites: 'पसंदीदा',
    navTips: 'सेल्फ केयर',
    navProfile: 'प्रोफ़ाइल',

    // Onboarding
    onboarding1Title: 'बीमारियों के बारे में जानें',
    onboarding1Desc: 'सामान्य बीमारियों को जानें और उनके लक्षणों तथा कारणों को समझें।',
    onboarding2Title: 'सावधानियों को जानें',
    onboarding2Desc: 'सामान्य सावधानियों और रोकथाम के सुझावों को जानें।',
    onboarding3Title: 'अपना ख्याल रखें',
    onboarding3Desc: 'सरल और आसानी से समझने योग्य प्रारूप में उपयोगी स्वास्थ्य जानकारी प्राप्त करें।',
    getStarted: 'शुरू करें',
    skip: 'छोड़ें',
    next: 'आगे बढ़ें',

    // Authentication
    loginTitle: 'वापसी पर स्वागत है',
    loginSubtitle: 'अपने सहेजे गए स्वास्थ्य मार्गदर्शकों तक पहुँचने के लिए साइन इन करें',
    emailLabel: 'ईमेल पता',
    emailPlaceholder: 'name@example.com',
    passwordLabel: 'पासवर्ड',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
    forgotPassword: 'पासवर्ड भूल गए?',
    loginBtn: 'लॉगिन करें',
    createAccountBtn: 'नया खाता बनाएं',
    continueWithGoogle: 'Google के साथ जारी रखें',
    dontHaveAccount: 'क्या आपके पास खाता नहीं है?',
    alreadyHaveAccount: 'क्या आपके पास पहले से खाता है?',
    signInLink: 'साइन इन करें',

    // Registration
    registerTitle: 'खाता बनाएं',
    registerSubtitle: 'अपनी स्वास्थ्य यात्रा को शुरू करने के लिए सेल्फ केयर से जुड़ें',
    fullNameLabel: 'पूरा नाम',
    fullNamePlaceholder: 'उदा. सत्यजीत कुमार',
    confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
    confirmPasswordPlaceholder: 'पासवर्ड दोबारा दर्ज करें',
    signUpBtn: 'खाता बनाएं',

    // Auth Validation & Errors
    errEmailInvalid: 'अमान्य ईमेल पता प्रारूप',
    errPasswordShort: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए',
    errPasswordMatch: 'पासवर्ड मेल नहीं खाते',
    errAccountNotFound: 'खाता नहीं मिला। कृपया पहले पंजीकरण करें।',
    errIncorrectPassword: 'गलत पासवर्ड। कृपया पुनः प्रयास करें।',
    errConnection: 'इंटरनेट कनेक्शन की समस्या। कृपया कनेक्शन की जांच करें।',
    errGeneric: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',

    // Forgot password modal
    forgotPassTitle: 'पासवर्ड रीसेट करें',
    forgotPassDesc: 'अपना पंजीकृत ईमेल पता दर्ज करें, हम आपको पासवर्ड रीसेट लिंक भेजेंगे।',
    sendResetLink: 'रीसेट लिंक भेजें',
    resetSentSuccess: 'पासवर्ड रीसेट लिंक भेज दिया गया है! कृपया अपना इनबॉक्स देखें।',

    // Logout
    logoutTitle: 'लॉगआउट',
    logoutConfirm: 'क्या आप वाकई लॉगआउट करना चाहते हैं?',
    cancel: 'रद्द करें',
    logoutBtn: 'लॉगआउट',

    // Home Screen
    greeting: 'नमस्ते, {name} 👋',
    homeSubtitle: 'आज अपना ख्याल रखें।',
    searchPlaceholder: 'बीमारी या लक्षण खोजें…',
    popularIllnesses: 'लोकप्रिय बीमारियां',
    popularSubtitle: 'अक्सर खोजी जाने वाली स्वास्थ्य स्थितियां',
    categories: 'श्रेणियां',
    allCategories: 'सभी श्रेणियां देखें',
    dailyTipTitle: 'दैनिक सेल्फ-केयर टिप',
    dailyTipDefault: 'पर्याप्त पानी पिएं और दिन भर हाइड्रेटेड रहें।',
    viewDetails: 'विवरण देखें',
    viewAll: 'सभी देखें',
    readGuide: 'स्वास्थ्य गाइड पढ़ें',

    // Explore / Search
    exploreTitle: 'बीमारियां खोजें',
    exploreSubtitle: 'बीमारी, लक्षण या श्रेणी के अनुसार खोजें',
    noIllnessFound: 'कोई बीमारी नहीं मिली। कृपया कोई अन्य खोज आज़माएँ।',
    filterByCategory: 'श्रेणी के अनुसार फ़िल्टर करें',
    filterBySymptom: 'सामान्य लक्षण',
    allConditions: 'सभी स्थितियां',
    resultsCount: '{count} स्थितियां मिलीं',
    clearFilters: 'फ़िल्टर हटाएं',

    // Illness Details
    overview: 'अवलोकन',
    commonSymptoms: 'सामान्य लक्षण',
    possibleCauses: 'संभावित कारण',
    riskFactors: 'जोखिम कारक',
    precautions: 'सावधानियां',
    prevention: 'रोकथाम के सुझाव',
    generalSelfCare: 'सामान्य सेल्फ-केयर',
    whenToSeeDoctor: 'डॉक्टर को कब दिखाएं',
    emergencyNotice: 'आपातकालीन चेतावनी संकेत',
    faqs: 'अक्सर पूछे जाने वाले प्रश्न',
    contagiousBadge: 'संक्रामक',
    nonContagiousBadge: 'गैर-संक्रामक',
    durationLabel: 'सामान्य अवधि',
    audioReadAloud: 'ऑडियो सुनें',
    audioStop: 'ऑडियो बंद करें',
    shareCondition: 'साझा करें',
    saveToFavorites: 'पसंदीदा में जोड़ें',
    removeFromFavorites: 'पसंदीदा से हटाएं',
    savedInFavorites: 'पसंदीदा में सहेजा गया',

    // Favorites
    favoritesTitle: 'सहेजी गई बीमारियां',
    favoritesSubtitle: 'आपके द्वारा बुकमार्क की गई स्वास्थ्य स्थितियां',
    noFavoritesTitle: 'अभी तक कोई बीमारी बुकमार्क नहीं की गई',
    noFavoritesDesc: 'त्वरित संदर्भ के लिए बीमारियों को यहां सहेजें।',
    exploreConditionsBtn: 'बीमारियों का अन्वेषण करें',
    removeBtn: 'हटाएं',

    // Self Care section
    selfCareSectionTitle: 'दैनिक सेल्फ केयर',
    selfCareSectionSubtitle: 'दैनिक जीवन के लिए साक्ष्य-आधारित स्वास्थ्य सुझाव',
    hydrationTrackerTitle: 'दैनिक पानी का सेवन',
    hydrationSub: 'लक्ष्य: 8 गिलास (2 लीटर) प्रतिदिन',
    breathingTitle: 'तनाव प्रबंधन श्वास व्यायाम',
    breathingSub: 'मन को शांत करने के लिए 4-4-4-4 बॉक्स श्वास व्यायाम',
    habitsLoggedToday: 'आज {count} आदतें पूरी हुईं',

    // Profile & Settings
    profileTitle: 'प्रोफ़ाइल एवं सेटिंग्स',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    language: 'भाषा',
    selectLanguage: 'भाषा चुनें',
    settings: 'सेटिंग्स',
    privacyPolicy: 'गोपनीयता नीति',
    termsConditions: 'नियम एवं शर्तें',
    medicalDisclaimer: 'चिकित्सा अस्वीकरण',
    adminPanel: 'डेटाबेस एवं बीमारी प्रबंधन',
    adminSubtitle: 'डेटाबेस रिकॉर्ड देखें या नई बीमारी जोड़ें',
    appearance: 'दिखावट एवं थीम',
    darkMode: 'डार्क मोड',
    readingScale: 'पढ़ने का टेक्स्ट आकार',
    scaleNormal: 'सामान्य (100%)',
    scaleLarge: 'बड़ा (115%)',
    scaleExtra: 'अतिरिक्त बड़ा (125%)',
    emergencyHotlines: 'आपातकालीन हेल्पलाइन',
    saveProfileBtn: 'बदलाव सहेजें',
    profileSavedNotice: 'प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!',

    // Disclaimer
    disclaimerTitle: 'चिकित्सा शैक्षिक अस्वीकरण',
    disclaimerText:
      'Self Care सामान्य स्वास्थ्य और शैक्षिक जानकारी प्रदान करता है। यह किसी बीमारी का निदान करने का साधन नहीं है और डॉक्टर की सलाह, निदान या उपचार का विकल्प नहीं है। यदि आपके लक्षण गंभीर, लगातार या बिगड़ रहे हैं, तो योग्य स्वास्थ्य विशेषज्ञ से सलाह लें या उचित चिकित्सा सहायता प्राप्त करें।',
  },
};
