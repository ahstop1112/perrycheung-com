import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import coreEn from './i18n/en/core.json';

const resources = {
  en: {
    core: coreEn,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',

    ns: ['core'],
    defaultNS: 'core',

    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;