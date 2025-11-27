import { useTranslation } from "react-i18next"
import LanguageSelector from "./LanguageSelector"
import MenuItem from "./MenuItem"

const DesktopMenu = () => {

    const { t } = useTranslation(['menu'])

    return (
        <nav className="hidden md:flex gap-3 h-full">
                <ul className="flex justify-between">
                    <MenuItem href="/" title={t('home', { ns: 'menu'})} />
                    <MenuItem href="/about" title={t('about', { ns: 'menu'})} />
                    <MenuItem href="/portfolio" title={t('portfolio', { ns: 'menu'})} />
                    <MenuItem href="/cv" title={t('cv', { ns: 'menu'})} />
                    <MenuItem href="/contact" title={t('contact', { ns: 'menu'})} />
                </ul>
                <LanguageSelector />
        </nav>
    )
}

export default DesktopMenu