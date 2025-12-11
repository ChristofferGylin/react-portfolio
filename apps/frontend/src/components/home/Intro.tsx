import { useTranslation } from "react-i18next"
import Typewriter from "./Typewriter"

const techs = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "C",
    "C++",
]

const Intro = () => {
 
    const { t } = useTranslation(['home'])

    return (
        <div className="aspect-square flex flex-col gap-6 overflow-hidden">
            <p>{t("intro.hi", { ns: "home"})}</p>
            <h1>Christoffer Gylin</h1>
            <p className="text-4xl font-bold">{t("intro.tagline1", { ns: "home"})}</p>
            <p className="text-4xl font-bold">{t("intro.tagline2", { ns: "home"})} <Typewriter words={techs} /></p>
        </div>
    )
}

export default Intro