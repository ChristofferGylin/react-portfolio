import GithubWidget from "./GithubWidget"
import Intro from "./Intro"

const Hero = () => {

    return (
        <section className="w-full flex flex-col gap-20 xl:gap-0 xl:grid xl:grid-cols-2 p-4 pt-20 xl:p-12">
            <Intro />
            <GithubWidget />
        </section>
    )
}

export default Hero