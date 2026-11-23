import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0a1821] py-16 text-white">
      <div className="container-site">
        <div className="grid gap-10 border-b border-[#31434c] pb-14 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">
          <div>
            <Logo footer />
            <p className="mt-5 max-w-[380px] text-sm leading-7 text-[#a7b7ba]">
              Renewable energy infrastructure contracting, engineering,
              equipment procurement and project delivery.
            </p>
          </div>
          <div>
            <h4 className="eyebrow mb-5 text-[#afc9b2]">Explore</h4>
            <a className="footer-link" href="#about">
              About Vtail
            </a>
            <a className="footer-link" href="#services">
              Capabilities
            </a>
            <a className="footer-link" href="#sectors">
              Sectors
            </a>
            <a className="footer-link" href="#projects">
              Projects
            </a>
          </div>
          <div>
            <h4 className="eyebrow mb-5 text-[#afc9b2]">Company</h4>
            <a className="footer-link" href="#leadership">
              Leadership
            </a>
            <a className="footer-link" href="#approach">
              Our Approach
            </a>
            <a className="footer-link" href="#contact">
              Contact
            </a>
            <a className="footer-link" href="#home">
              Back to Top ↑
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[11px] text-[#a1b1b3] sm:flex-row">
          <span>
            © {new Date().getFullYear()} Vtail Energy. Fictional company website
            concept.
          </span>
          <span>Engineering Energy. Delivering Infrastructure.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
