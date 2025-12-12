import GithubWidget from "./GithubWidget"
import Intro from "./Intro"

const Hero = () => {

    return (
        <section className="w-full flex flex-col gap-20 lg:gap-0 lg:grid lg:grid-cols-2 p-4 lg:p-12 pt-20 xl:p-24">
            <Intro />
            <GithubWidget />
        </section>
    )
}

export default Hero