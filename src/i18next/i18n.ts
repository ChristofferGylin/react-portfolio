import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                welcome: {
                    part1: 'Welcome <1>beautiful</1> people.',
                    part2: 'This is my portfolio',
                }
            }
        }
    }
})

export default i18n