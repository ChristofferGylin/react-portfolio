import { useTranslation } from "react-i18next"
import ImageButton from "../UI/ImageButton"
import Indicator from "../UI/Indicator"

const LanguageSelector = () => {

    const { i18n } = useTranslation()

    const languageIndicatorPosition = i18n.resolvedLanguage === 'en' ? 'translate-x-[34px]' : ''

    const onSetLanguage = (newLang: 'en' | 'se') => {
        i18n.changeLanguage(newLang)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-0.5 h-full pt-1.5">
            <div className="flex justify-between w-[54px] h-5">
                <ImageButton src={"/flags/se.svg"} alt='Change language to Swedish' callback={() => {onSetLanguage('se')}} />
                <p className="flex justify-center items-center">/</p>
                <ImageButton src={"/flags/gb.svg"} alt='Change language to English' callback={() => {onSetLanguage('en')}} />
            </div>
            <div className={`flex w-[60px]`}>
                <Indicator width="w-[26px]" style={languageIndicatorPosition} />
            </div>
        </div>
    )
}

export default LanguageSelector