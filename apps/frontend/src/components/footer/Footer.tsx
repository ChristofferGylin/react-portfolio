import { linkedInPath } from "../../assets/icons/svgPaths";
import { sky200, sky50 } from "../../assets/tailwindHexColors";
import SvgLink from "../UI/SvgLink";

const Footer = () => {
  return (
    <footer className="header-footer bottom-0 foreground">
      <nav>
        <SvgLink
          path={linkedInPath}
          color={sky200}
          hoverColor={sky50}
          href="https://linkedin.com"
        />
      </nav>
    </footer>
  );
};

export default Footer;
