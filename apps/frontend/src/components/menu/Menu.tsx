import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const Menu = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full h-14 flex justify-between items-center p-2 border-b foreground">
            <span className="flex text-2xl h-full items-center">CHRISTOFFER GYLIN</span>
            <DesktopMenu />
            <MobileMenu />
        </header>
    )
}

export default Menu