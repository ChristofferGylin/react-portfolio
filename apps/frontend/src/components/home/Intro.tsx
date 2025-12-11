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
        <div className="h-fit flex flex-col gap-6 overflow-hidden">
            <p className="text-3xl">{t("intro.hi", { ns: "home"})}</p>
            <h1 className="text-7xl">Christoffer Gylin</h1>
            <p className="text-5xl font-bold">{t("intro.tagline", { ns: "home"})} <Typewriter words={techs} /></p>
        </div>
    )
}

export default Intro