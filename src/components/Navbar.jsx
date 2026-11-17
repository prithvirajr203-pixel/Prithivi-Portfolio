import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LabStatus from "./LabStatus.jsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Client Work", href: "#client-work" },
  { label: "Skills", href: "#skills" },
  { label: "Book", href: "#book" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-line/70 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-xl md:text-2xl tracking-wide text-offwhite"
        >
          R.PRITHIVIRAJ
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[13px] tracking-[0.14em] text-silver hover:text-gold transition-colors duration-300"
              >
                {item.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <LabStatus online />
        </div>

        <button
          className="lg:hidden relative z-50 flex flex-col justify-center items-center w-9 h-9 gap-[6px]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-offwhite"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-offwhite"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-offwhite"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-0 bg-black/97 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-7"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="text-2xl font-display tracking-wide text-silver-light hover:text-gold transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="mt-4">
              <LabStatus online />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
