import GithubWidget from "./GithubWidget"

const Hero = () => {

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