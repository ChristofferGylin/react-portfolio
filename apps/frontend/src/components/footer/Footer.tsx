import Github from "./GitHub";
import LinkedIn from "./LinkedIn";

const Footer = () => {
  return (
    <footer className="header-footer bottom-0 foreground">
      <nav className="flex flex-row items-center gap-2">
        <LinkedIn />
        <Github />
      </nav>
      <span>Copyright 2026</span>
    </footer>
  );
};

export default Footer;
