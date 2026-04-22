import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GridBackground from "../ui/GridBackground";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-28 pb-28">
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase mb-8"
        >
          Lagos · Est. 2022
        </motion.p>

        {/* Line 1 — "Two ancient languages." */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-light text-xb-white leading-tight mb-3 w-full"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
        >
          Two ancient <br className="sm:hidden" /> languages.
        </motion.h1>

        {/* Line 2 — "One called it God." gold + bigger */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.55 }}
          className="font-display font-light italic text-xb-gold w-full mb-2"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}
        >
          One called it God.
        </motion.h2>

        {/* Line 3 — "One called it physics." faded + smaller */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-display font-light italic text-xb-white/40 w-full mb-6"
          style={{ fontSize: "clamp(1.4rem, 3.2vw, 3rem)" }}
        >
          One called it physics.
        </motion.h3>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.85 }}
          className="font-body text-xb-muted text-sm leading-relaxed max-w-sm mb-10"
        >
          Where the sacred and the empirical stop arguing and start listening to
          each other.
        </motion.p>

        {/* CTA Buttons — full width on mobile, side by side on desktop */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            to="/collections"
            className="font-mono text-xs text-xb-black bg-xb-gold px-12 py-4 tracking-[0.2em] uppercase hover:opacity-80 transition-opacity duration-300 text-center w-full sm:w-auto"
          >
            Explore
          </Link>
          <Link
            to="/story"
            className="font-mono text-xs text-xb-white border border-xb-white/30 px-9 py-4 tracking-[0.2em] uppercase hover:border-xb-gold hover:text-xb-gold transition-all duration-300 text-center w-full sm:w-auto"
          >
            Brand Story
          </Link>
        </motion.div>

        {/* Scroll line — below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <div className="w-px h-10 bg-xb-gold/30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
