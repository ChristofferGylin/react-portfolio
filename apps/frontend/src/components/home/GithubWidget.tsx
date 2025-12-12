import { useEffect, useState } from "react"
import changeValueGradually from "../../utils/changeValueGradually";
import { useTranslation } from "react-i18next";

type LanguagePercent = { 
    value: number;
    displayValue: number;
}


const GithubWidget = () => {

    const { t } = useTranslation(["home"])
    const [languages, setLanguages] = useState<Record<string, LanguagePercent>>({"TypeScript": {value: 0, displayValue: 0}, "JavaScript": {value: 0, displayValue: 0}, "HTML": {value: 0, displayValue: 0}, "C++": {value: 0, displayValue: 0}, "CSS": {value: 0, displayValue: 0}})
    
    useEffect(() => {
        const fetchData = async () => {

            const animationDuration = 2000
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/github`)

            if (!res.ok) {
                const data = await res.json()

                console.error(data.error)
                return
            }

            const data: Record<string, number> = await res.json()
            
            for (const lang in data) {

                setLanguages((old) => {
                    const newLanguages = {...old}

                    if (!newLanguages[lang]) {
                        newLanguages[lang] = {value: 0, displayValue: 0}
                    }

                    newLanguages[lang].value = data[lang]
                    
                    return newLanguages
                })

                changeValueGradually({
                    startValue: 0,
                    startTime: Date.now(),
                    endValue: data[lang],
                    duration: animationDuration,
                    callback: (value) => {
                        setLanguages((old) => {
                            const newLanguages = {...old}

                            newLanguages[lang].displayValue = value
                    
                            return newLanguages
                        })
                    }
                })

            }
        }

        fetchData()
    }, [])

    return (
        <div className="justify-self-center w-full lg:w-4/5 xl:w-3/4 h-fit border border-cyan-300 foreground rounded-xl flex flex-col p-5 shadow shadow-cyan-200/30">
            <h1 className="text-2xl md:text-3xl text-cyan-300 border-b border-cyan-200/50 p-3">{t("github.heading", {ns: "home"})}</h1>
            <ul className="w-full flex flex-col gap-3 p-4 text-lg md:text-2xl text-cyan-400">
                {Object.entries(languages).map(([key, lang]) => {
                return (
                    <li className="flex flex-col gap-1 w-full" key={key}>
                        <div className="w-full flex justify-between" >
                            <span>{key}</span> <span>{lang.displayValue}%</span>
                        </div>
                        <div className="w-full h-6 bg-cyan-400/20 rounded-xl flex justify-end">
                            <div style={{width: `${lang.value}%`}} className="bg-cyan-400 h-6 rounded-xl transition-[width] duration-[2s]"></div>
                        </div>
                    </li>)
            })}
            </ul>
            
        </div>
    )
}

export default GithubWidget