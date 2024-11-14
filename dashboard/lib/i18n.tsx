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

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false, 
  },
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
