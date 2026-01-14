import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  const { t } = useTranslation(["menu"]);

  return (
    <ul className="hidden md:flex justify-between">
      <MenuItem href="/" title={t("home", { ns: "menu" })} />
      <MenuItem href="/about" title={t("about", { ns: "menu" })} />
      <MenuItem href="/portfolio" title={t("portfolio", { ns: "menu" })} />
      <MenuItem href="/cv" title={t("cv", { ns: "menu" })} />
      <MenuItem href="/contact" title={t("contact", { ns: "menu" })} />
    </ul>
  );
};

export default DesktopMenu;
