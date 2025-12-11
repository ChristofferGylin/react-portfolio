"use client"

//import { useLanguageContext } from "@/contexts/Language"
//import { aboutTexts } from "../About/aboutTexts"
import GithubWidget from "./GithubWidget"

const texts = {
    en: {
        greeting: 'Hi, my name is',
        tagline: 'I like building things with code',
    },
    sv: {
        greeting: 'Hej, jag heter',
        tagline: 'Jag tycker om att bygga saker med kod',
    }
}

const Hero = () => {

    //const { language } = useLanguageContext()
    
        //const content = language === 'en' ? texts.en : texts.sv
        //const bodyText = language === 'en' ? aboutTexts.en.bodyText : aboutTexts.sv.bodyText

        const content = texts.en
        const bodyText = ['I am a creative full-stack developer who loves challenges, building websites, apps, and user interfaces, solving problems, and coming up with new exciting solutions.',
            'I have always been interested in technology in general and computers in particular, and since the age of seven, I have used a computer almost every day. It was clear early on that computers were my thing and that they would become a major part of my future.',
        ]
    return (
        <section className="w-full grid grid-cols-2 gap-32 p-24">
            <div className="aspect-square flex flex-col gap-6 overflow-hidden">
                <p>{content.greeting}</p>
                <h1>Christoffer Gylin</h1>
                <p className="text-4xl font-bold">{content.tagline}</p>
                <div className="flex flex-col gap-6 overflow-hidden text-xl">
                    {<p>{bodyText[0]}</p>}
                    {<p className="line-clamp-5">{bodyText[1]}..</p>}
                </div>
            </div>
            <GithubWidget />
        </section>
    )
}

export default Hero