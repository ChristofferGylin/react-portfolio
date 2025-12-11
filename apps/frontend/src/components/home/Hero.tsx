import { useTranslation } from "react-i18next"
import GithubWidget from "./GithubWidget"

const Hero = () => {

    const { t } = useTranslation(['home'])

    return (
        <section className="w-full grid grid-cols-2 gap-32 p-24">
            <div className="aspect-square flex flex-col gap-6 overflow-hidden">
                <p>{t("intro.hi", { ns: "home"})}</p>
                <h1>Christoffer Gylin</h1>
                <p className="text-4xl font-bold">{t("intro.tagline1", { ns: "home"})}</p>
                <p className="text-4xl font-bold">{t("intro.tagline2", { ns: "home"})}</p>
            </div>
            <GithubWidget />
        </section>
    )
}

export default Hero