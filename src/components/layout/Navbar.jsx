import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Brand Story", path: "/story" },
  { label: "Collections", path: "/collections" },
  { label: "Journal", path: "/journal" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-5 md:px-8 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-xb-black/90 backdrop-blur-sm border-b border-white/1"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-mono text-xb-white text-xl tracking-widest z-50 outline-none"
      >
        XBOSON
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="font-body text-sm text-xb-muted hover:text-xb-white tracking-widest uppercase transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Order Button */}
      <Link
        to="/"
        className="hidden md:block font-mono text-xs text-xb-gold border border-xb-gold px-5 py-2 tracking-widest uppercase hover:bg-xb-gold hover:text-xb-black transition-all duration-300"
      >
        Order
      </Link>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
      >
        <span
          className={`block w-5 h-px bg-xb-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-5 h-px bg-xb-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-5 h-px bg-xb-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-xb-black flex flex-col items-center justify-center gap-10 z-40"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-light text-xb-white tracking-widest hover:text-xb-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-xb-gold border border-xb-gold px-8 py-3 tracking-widest uppercase mt-4 block"
            >
              Order
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
