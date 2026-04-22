import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Brand Story", path: "/story" },
  { label: "Collections", path: "/collections" },
  { label: "Journal", path: "/journal" },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer
      ref={ref}
      className="relative w-full px-6 md:px-16 lg:px-24 pt-20 pb-10 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand column */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/"
                className="font-mono text-xb-white text-sm tracking-[0.4em] uppercase hover:text-xb-gold transition-colors duration-300"
              >
                XBOSON
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-light italic text-xb-muted text-lg leading-relaxed"
            >
              Dressed in Ideas.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-xb-muted/50 text-xs leading-relaxed max-w-xs"
            >
              Built in the space between faith and physics. Where the sacred and
              the empirical stop arguing and start listening to each other.
            </motion.p>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-4">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xb-gold/60 text-xs tracking-widest uppercase"
            >
              Navigate
            </motion.p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="font-body text-xb-muted/60 text-sm hover:text-xb-white tracking-wide transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xb-gold/60 text-xs tracking-widest uppercase"
            >
              Contact
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-2"
            >
              <p className="font-body text-xb-muted/60 text-sm">
                Lagos, Nigeria
              </p>

              <a
                href="mailto:xbosonluxury@gmail.com"
                className="font-body text-xb-muted/60 text-sm hover:text-xb-gold transition-colors duration-300"
              >
                xbosonluxury@gmail.com
              </a>
            </motion.div>

            {/* Gold divider + tagline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="w-6 h-px bg-xb-gold/30" />
              <span className="font-mono text-xb-gold/40 text-xs tracking-widest uppercase">
                Est. 2022
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
        >
          <p className="font-mono text-xb-muted/30 text-xs tracking-widest">
            © 2024 Xboson Luxury. All rights reserved.
          </p>
          <p className="font-mono text-xb-muted/20 text-xs tracking-widest uppercase">
            Cloth. Culture. Conviction.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
