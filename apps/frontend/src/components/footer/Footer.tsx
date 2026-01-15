import Github from "./GitHub";
import LinkedIn from "./LinkedIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="header-footer bottom-0 foreground">
      <nav className="flex flex-row items-center gap-2">
        <LinkedIn />
        <Github />
      </nav>
      <span className="text-cyan-300">© {currentYear} Christoffer Gylin</span>
    </footer>
  );
};

export default Footer;
