// lib/i18n.tsx
"use client";

import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

const resources = {
  en: {
    common: require('../public/locales/en/common.json'),
  },
  pt: {
    common: require('../public/locales/pt/common.json'),
  },
};

// Configura e inicializa o i18n
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Define o idioma padrão
  fallbackLng: 'en', // Define o idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz escaping de valores
  },
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
