import LanguageSelector from "./LanguageSelector"
import MenuItem from "./MenuItem"

const DesktopMenu = () => {

    return (
        <nav className="hidden md:flex gap-3 h-full">
                <ul className="flex justify-between">
                    <MenuItem href="/" title={"Home"} />
                    <MenuItem href="/about" title={"About"} />
                    <MenuItem href="/portfolio" title={"Portfolio"} />
                    <MenuItem href="/cv" title={"CV"} />
                    <MenuItem href="/contact" title={"Contact"} />
                </ul>
                <LanguageSelector />
        </nav>
    )
}

export default DesktopMenu