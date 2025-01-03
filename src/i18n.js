import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'cz'],
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false 
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    backend: {
      loadPath: 'locales/{{lng}}/translation.json', //add mh-portfolio/locales...
    },
  });

export default i18n;
