import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext(null);
const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'app-language';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;
  return DEFAULT_LANGUAGE;
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const safeLanguage = translations[language] ? language : DEFAULT_LANGUAGE;
    window.localStorage.setItem(STORAGE_KEY, safeLanguage);
  }, [language]);

  const value = useMemo(() => {
    const safeLanguage = translations[language] ? language : DEFAULT_LANGUAGE;
    return {
      language: safeLanguage,
      setLanguage,
      t: translations[safeLanguage],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
