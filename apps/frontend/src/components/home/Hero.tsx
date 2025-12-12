import GithubWidget from "./GithubWidget"
import Intro from "./Intro"

const Hero = () => {

    return (
        <section className="w-full grid grid-rows-2 lg:grid-cols-2 lg:gap-32 p-24">
            <Intro />
            <GithubWidget />
        </section>
    )
}

export default Hero