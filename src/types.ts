export type Language = 'en' | 'hi';

export type CategoryId =
  | 'fever-infections'
  | 'cold-flu'
  | 'respiratory'
  | 'digestive'
  | 'skin'
  | 'headache-pain'
  | 'eye'
  | 'ear-throat'
  | 'heart'
  | 'diabetes'
  | 'children'
  | 'seasonal';

export interface Category {
  id: CategoryId;
  nameEnglish: string;
  nameHindi: string;
  descriptionEnglish: string;
  descriptionHindi: string;
  iconName: string;
  badgeBg: string;
  badgeText: string;
  gradient: string;
}

export interface FAQItem {
  questionEnglish: string;
  questionHindi: string;
  answerEnglish: string;
  answerHindi: string;
}

export interface SymptomItem {
  iconName?: string;
  textEnglish: string;
  textHindi: string;
}

export interface Illness {
  id: string;
  nameEnglish: string;
  nameHindi: string;
  medicalName?: string;
  category: CategoryId;
  categoryNameEnglish: string;
  categoryNameHindi: string;
  imageUrl: string;
  shortDescriptionEnglish: string;
  shortDescriptionHindi: string;
  contagious: boolean;
  typicalDurationEnglish: string;
  typicalDurationHindi: string;
  overviewEnglish: string;
  overviewHindi: string;
  symptomsEnglish: string[];
  symptomsHindi: string[];
  causesEnglish: string[];
  causesHindi: string[];
  riskFactorsEnglish: string[];
  riskFactorsHindi: string[];
  precautionsEnglish: string[];
  precautionsHindi: string[];
  preventionEnglish: string[];
  preventionHindi: string[];
  selfCareEnglish: string[];
  selfCareHindi: string[];
  doctorWarningEnglish: string[];
  doctorWarningHindi: string[];
  emergencySignsEnglish?: string[];
  emergencySignsHindi?: string[];
  faqEnglish: FAQItem[];
  faqHindi: FAQItem[];
  isPopular?: boolean;
  isFeatured?: boolean;
  tagsEnglish: string[];
  tagsHindi: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface HealthTip {
  id: string;
  titleEnglish: string;
  titleHindi: string;
  categoryEnglish: string;
  categoryHindi: string;
  shortDescriptionEnglish: string;
  shortDescriptionHindi: string;
  fullGuidanceEnglish: string[];
  fullGuidanceHindi: string[];
  iconName: string;
  accentColor: string;
  actionableStepsEnglish: string[];
  actionableStepsHindi: string[];
}

export interface UserProfile {
  userId: string;
  name: string;
  email: string;
  profileImage: string;
  language: Language;
  createdAt: string;
  updatedAt: string;
}

export interface FavoriteRecord {
  illnessId: string;
  savedAt: string;
}

export type TabType = 'home' | 'explore' | 'favorites' | 'tips' | 'profile';

export type AuthScreenType = 'splash' | 'onboarding' | 'login' | 'register' | 'app';
