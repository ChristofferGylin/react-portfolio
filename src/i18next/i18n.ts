import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import I18NextHttpBackend from 'i18next-http-backend'

i18n.use(I18NextHttpBackend).use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    ns: ['about', 'contact', 'cv', 'home', 'menu', 'portfolio'],
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }

  })

export default i18n