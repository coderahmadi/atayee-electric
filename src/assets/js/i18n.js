import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const languages = ['fr', 'en'];
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/atayee-electric/locales/{{lng}}/{{ns}}.json', // Customize the path structure
        },
        fallbackLng: 'fr',
        debug: true,
        whitelist: languages,
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n; 