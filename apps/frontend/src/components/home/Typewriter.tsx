import { useEffect, useRef, useState } from "react"

type TypewriterProps = {
    typingDelay?: number;
    waitingDelay?: number;
    words: string[];
}

const Typewriter = ({ typingDelay = 200, waitingDelay = 1200, words }: TypewriterProps) => {

    const [typed, setTyped] = useState("")
    const wordIndex = useRef(0)
    const letterIndex = useRef(0)
    const isDeleting = useRef(false)
    const timer = useRef<number>(0)

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

                setTyped(words[wordIndex.current].slice(0, letterIndex.current))

                if (letterIndex.current >= words[wordIndex.current].length) {

                    if (wordIndex.current + 1 >= words.length) {
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

        timer.current = setTimeout(typeText, typingDelay)
        return () => clearTimeout(timer.current)

    }, [])

    return <>{typed}<span className="inline-block h-9 w-0.5 bg-white ml-1 animate-blink" ></span></>
}

export default Typewriter