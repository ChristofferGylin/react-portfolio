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
        <div className="xl:relative flex justify-center w-full h-full">
            <div className="lg:relative h-fit w-full lg:w-4/5 xl:w-3/4 flex flex-col gap-6 md:gap-10 overflow-hidden px-2 xl:p-2 xl:top-12">
                <p className="text-2xl sm:text-4xl">{t("intro.hi", { ns: "home"})}</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl">Christoffer Gylin</h1>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("intro.tagline", { ns: "home"})} <Typewriter words={techs} /></p>
            </div>
        </div>
    )
}

export default Intro