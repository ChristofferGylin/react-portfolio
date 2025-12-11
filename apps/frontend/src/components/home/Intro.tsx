import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

const techs = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "C",
    "C++",
]

const typingDelay = 150
const waitingDelay = 1200

const Intro = () => {

    const [typed, setTyped] = useState("")
    const wordIndex = useRef(0)
    const letterIndex = useRef(0)
    const isDeleting = useRef(false)
    const timer = useRef<number>(0)
 
    const { t } = useTranslation(['home'])

    useEffect(() => {

        const typeText = () => {
            if (isDeleting.current) {
                setTyped((old) => {
                    const endIndex = old.length - 1

                    if (endIndex < 0) {
                        isDeleting.current = false
                        return ""
                    }
                    return old.slice(0, endIndex)
                })

                timer.current = setTimeout(typeText, typingDelay)
            } else {

                setTyped(techs[wordIndex.current].slice(0, letterIndex.current))

                if (letterIndex.current >= techs[wordIndex.current].length) {
                    
                    if (wordIndex.current + 1 >= techs.length) {
                        wordIndex.current = 0
                    } else {
                        wordIndex.current++
                    }

                    isDeleting.current = true
                    letterIndex.current = 0
                    timer.current = setTimeout(typeText, waitingDelay)


                } else {
                    letterIndex.current++
                    timer.current = setTimeout(typeText, typingDelay)
                }

            }
        }

        typeText()
        return () => clearTimeout(timer.current)
        
    }, [])

    return (
        <div className="aspect-square flex flex-col gap-6 overflow-hidden">
            <p>{t("intro.hi", { ns: "home"})}</p>
            <h1>Christoffer Gylin</h1>
            <p className="text-4xl font-bold">{t("intro.tagline1", { ns: "home"})}</p>
            <p className="text-4xl font-bold">{t("intro.tagline2", { ns: "home"})} {typed}</p>
        </div>
    )
}

export default Intro