import { UserProfile, Illness, FavoriteRecord, Language } from '../types';
import { ILLNESSES } from '../data/illnesses';

const STORAGE_USERS_KEY = 'selfcare_db_users';
const STORAGE_CURRENT_USER_KEY = 'selfcare_current_user_id';
const STORAGE_FAVORITES_PREFIX = 'selfcare_favs_';
const STORAGE_CUSTOM_ILLNESSES_KEY = 'selfcare_db_custom_illnesses';
const STORAGE_LANG_KEY = 'selfcare_app_lang';

// Default initial user for instant seamless experience
const DEFAULT_USER: UserProfile = {
  userId: 'user-demo-1',
  name: 'Satyjeet Kumar',
  email: 'satyjeetkumar007@gmail.com',
  profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  language: 'en',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export class HealthDatabaseService {
  // Load stored users or seed default
  private static getUsers(): Record<string, { user: UserProfile; passwordHash: string }> {
    try {
      const data = localStorage.getItem(STORAGE_USERS_KEY);
      if (data) return JSON.parse(data);
    } catch {
      // ignore
    }
    const initial: Record<string, { user: UserProfile; passwordHash: string }> = {
      [DEFAULT_USER.userId]: {
        user: DEFAULT_USER,
        passwordHash: 'password123',
      },
    };
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(initial));
    } catch {
      // ignore
    }
    return initial;
  }

  // Get current active user
  public static getCurrentUser(): UserProfile | null {
    try {
      const currentId = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
      const users = this.getUsers();
      if (currentId && users[currentId]) {
        return users[currentId].user;
      }
    } catch {
      // ignore
    }
    // Default to initial user if not logged out
    return DEFAULT_USER;
  }

  // Login
  public static login(email: string, password: string): { success: boolean; user?: UserProfile; error?: string } {
    const users = this.getUsers();
    const userEntry = Object.values(users).find(
      (u) => u.user.email.toLowerCase() === email.toLowerCase().trim()
    );

    if (!userEntry) {
      return { success: false, error: 'errAccountNotFound' };
    }

    if (userEntry.passwordHash !== password) {
      return { success: false, error: 'errIncorrectPassword' };
    }

    localStorage.setItem(STORAGE_CURRENT_USER_KEY, userEntry.user.userId);
    return { success: true, user: userEntry.user };
  }

  // Google Sign-In Simulation
  public static loginWithGoogle(): { success: boolean; user: UserProfile } {
    const googleUser: UserProfile = {
      userId: 'user-google-' + Date.now(),
      name: 'Google Health User',
      email: 'user.health@gmail.com',
      profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
      language: 'en',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const users = this.getUsers();
    users[googleUser.userId] = {
      user: googleUser,
      passwordHash: 'google_oauth_token',
    };
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    localStorage.setItem(STORAGE_CURRENT_USER_KEY, googleUser.userId);
    return { success: true, user: googleUser };
  }

  // Register
  public static register(name: string, email: string, password: string): { success: boolean; user?: UserProfile; error?: string } {
    const users = this.getUsers();
    const existing = Object.values(users).find(
      (u) => u.user.email.toLowerCase() === email.toLowerCase().trim()
    );

    if (existing) {
      return { success: false, error: 'Account already exists with this email address' };
    }

    const newUser: UserProfile = {
      userId: 'user-' + Date.now(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      profileImage: `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(name)}`,
      language: 'en',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    users[newUser.userId] = {
      user: newUser,
      passwordHash: password,
    };

    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    localStorage.setItem(STORAGE_CURRENT_USER_KEY, newUser.userId);
    return { success: true, user: newUser };
  }

  // Logout
  public static logout(): void {
    localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
  }

  // Update profile
  public static updateProfile(userId: string, updates: Partial<UserProfile>): UserProfile | null {
    const users = this.getUsers();
    if (users[userId]) {
      users[userId].user = {
        ...users[userId].user,
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
      return users[userId].user;
    }
    return null;
  }

  // Favorites management per user
  public static getFavorites(userId: string): string[] {
    try {
      const data = localStorage.getItem(STORAGE_FAVORITES_PREFIX + userId);
      if (data) {
        const records: FavoriteRecord[] = JSON.parse(data);
        return records.map((r) => r.illnessId);
      }
    } catch {
      // ignore
    }
    // Default initial sample favorites
    return ['common-cold', 'fever', 'headache'];
  }

  public static toggleFavorite(userId: string, illnessId: string): string[] {
    const current = this.getFavorites(userId);
    let updated: string[];
    if (current.includes(illnessId)) {
      updated = current.filter((id) => id !== illnessId);
    } else {
      updated = [...current, illnessId];
    }
    const records: FavoriteRecord[] = updated.map((id) => ({
      illnessId: id,
      savedAt: new Date().toISOString(),
    }));
    try {
      localStorage.setItem(STORAGE_FAVORITES_PREFIX + userId, JSON.stringify(records));
    } catch {
      // ignore
    }
    return updated;
  }

  // Illnesses Dataset & Custom Illness additions
  public static getAllIllnesses(): Illness[] {
    try {
      const customData = localStorage.getItem(STORAGE_CUSTOM_ILLNESSES_KEY);
      if (customData) {
        const customIllnesses: Illness[] = JSON.parse(customData);
        return [...customIllnesses, ...ILLNESSES];
      }
    } catch {
      // ignore
    }
    return ILLNESSES;
  }

  public static addIllness(newIllness: Illness): Illness[] {
    try {
      const customData = localStorage.getItem(STORAGE_CUSTOM_ILLNESSES_KEY);
      const existing: Illness[] = customData ? JSON.parse(customData) : [];
      const updated = [newIllness, ...existing];
      localStorage.setItem(STORAGE_CUSTOM_ILLNESSES_KEY, JSON.stringify(updated));
      return [...updated, ...ILLNESSES];
    } catch {
      return ILLNESSES;
    }
  }

  // Global Language Preference
  public static getSavedLanguage(): Language {
    try {
      const lang = localStorage.getItem(STORAGE_LANG_KEY);
      if (lang === 'en' || lang === 'hi') return lang;
    } catch {
      // ignore
    }
    return 'en';
  }

  public static setSavedLanguage(lang: Language): void {
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // ignore
    }
  }

  // Onboarding status
  public static isOnboardingCompleted(): boolean {
    try {
      return localStorage.getItem('selfcare_onboarding_done') === 'true';
    } catch {
      return false;
    }
  }

  public static setOnboardingCompleted(completed: boolean): void {
    try {
      localStorage.setItem('selfcare_onboarding_done', completed ? 'true' : 'false');
    } catch {
      // ignore
    }
  }
}

