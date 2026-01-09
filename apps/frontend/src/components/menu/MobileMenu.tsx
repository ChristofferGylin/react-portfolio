import LanguageSelector from "./LanguageSelector";
import MenuItem from "./MenuItem";
import { useState } from "react";
import {
  IoMenu,
  IoClose,
  IoHome,
  IoInformationCircle,
  IoFolder,
  IoDocumentText,
} from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import IconButton from "../UI/IconButton";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t } = useTranslation(["menu"]);

  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible((old) => !old);
  };

  const iconStyle =
    "text-2xl text-sky-200 stroke-sky-200 group-hover/ButtonGroup:text-sky-50 group-hover/ButtonGroup:stroke-sky-50";

  return (
    <nav className="flex md:hidden gap-3">
      <LanguageSelector />
      <IconButton
        Icon={
          visible ? (
            <IoClose className={iconStyle} />
          ) : (
            <IoMenu className={iconStyle} />
          )
        }
        callback={toggleMenu}
      />
      <ul
        className={`
        fixed top-14 right-0 z-50
        w-48
        flex flex-col
        rounded-bl-lg
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        foreground
        `}
      >
        <MenuItem
          href="/"
          title={t("home", { ns: "menu" })}
          Icon={<IoHome />}
        />
        <MenuItem
          href="/about"
          title={t("about", { ns: "menu" })}
          Icon={<IoInformationCircle />}
        />
        <MenuItem
          href="/portfolio"
          title={t("portfolio", { ns: "menu" })}
          Icon={<IoFolder />}
        />
        <MenuItem
          href="/cv"
          title={t("cv", { ns: "menu" })}
          Icon={<IoDocumentText />}
        />
        <MenuItem
          href="/contact"
          title={t("contact", { ns: "menu" })}
          Icon={<MdAlternateEmail />}
        />
      </ul>
    </nav>
  );
};

export default MobileMenu;
