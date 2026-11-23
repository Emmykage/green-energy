import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  House,
  Package,
  ChartNoAxesCombined,
  FileText,
  Network,
  Zap,
  Sun,
  BatteryCharging,
  Wind,
  Cable,
  MapPin,
  Mail,
  ChevronRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../logo/Logo";

const navItems = [
  ["About", "/about"],
  ["Capabilities", "/services"],
  ["Sectors", "/sectors"],
  ["Projects", "/projects"],
  ["Leadership", "/leadership"],
  ["Contact", "/contact"],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a1922]/95 text-white backdrop-blur-xl">
      <div className="container-site flex h-[76px] items-center justify-between gap-8">
        <Logo />
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-bold tracking-wide text-white/80 transition hover:text-[#b6d49b]"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-green">
            Discuss a Project <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0b1922] lg:hidden"
          >
            <div className="container-site flex flex-col gap-5 py-6">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-white/85"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-green w-full"
              >
                Discuss a Project <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
