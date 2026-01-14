import { IoClose, IoMenu } from "react-icons/io5";
import IconButton from "../UI/IconButton";
import DesktopMenu from "./DesktopMenu";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMobileMenuVisible((old) => !old);
  };

  const iconStyle =
    "md:hidden text-2xl text-sky-200 stroke-sky-200 group-hover/ButtonGroup:text-sky-50 group-hover/ButtonGroup:stroke-sky-50";

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full h-14 flex justify-between items-center p-2 border-b foreground">
        <span className="flex text-2xl h-full items-center">
          CHRISTOFFER GYLIN
        </span>
        <nav className="flex gap-3 h-full">
          <DesktopMenu />
          <LanguageSelector />
          <IconButton
            Icon={
              mobileMenuVisible ? (
                <IoClose className={iconStyle} />
              ) : (
                <IoMenu className={iconStyle} />
              )
            }
            callback={toggleMenu}
          />
        </nav>
      </header>
      <MobileMenu visible={mobileMenuVisible} />
    </>
  );
};

export default Menu;
