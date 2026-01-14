import MenuItem from "./MenuItem";
import {
  IoHome,
  IoInformationCircle,
  IoFolder,
  IoDocumentText,
} from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ visible }: { visible: boolean }) => {
  const { t } = useTranslation(["menu"]);

  return (
    <ul
      className={`
        fixed top-14 right-0 z-50
        w-48
        flex flex-col
        md:hidden
        rounded-bl-lg
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        foreground
        `}
    >
      <MenuItem href="/" title={t("home", { ns: "menu" })} Icon={<IoHome />} />
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
  );
};

export default MobileMenu;
