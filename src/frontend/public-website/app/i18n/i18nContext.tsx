"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import bn from "./locales/bn.json";

const translations: Record<string, Record<string, string>> = {
  en,
  hi,
  bn
};

type Language = "en" | "hi" | "bn";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || translations["en"][key] || key;
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    // Return a dummy context during SSR if wrapped improperly to avoid crashing
    return { language: "en", setLanguage: () => {}, t: (key: string) => key };
  }
  return context;
}
