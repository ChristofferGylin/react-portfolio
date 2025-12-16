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
        
            <div className="h-fit flex flex-col lg:self-center justify-self-center max-w-100 sm:max-w-none sm:w-148 lg:w-120 3xl:w-200 gap-6 md:gap-10 px-2 xl:p-2">
                <p className="text-2xl sm:text-3xl">{t("intro.hi", { ns: "home"})}</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl">Christoffer Gylin</h1>
                <p className="text-2xl sm:text-3xl">{t("intro.tagline", { ns: "home"})} <Typewriter words={techs} /></p>
            </div>
        
    )
}

export default Intro