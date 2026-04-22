import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

const ComingSoon = ({ page }) => {
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative min-h-screen bg-xb-black flex flex-col items-center justify-center text-center px-6">
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        {/* Animated bracket */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-6 mb-12"
        >
          <motion.div
            animate={{ x: [-4, 0, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-t border-l border-xb-gold/40"
          />
          <span className="font-mono text-xb-gold/60 text-xs tracking-[0.4em] uppercase">
            {page}
          </span>
          <motion.div
            animate={{ x: [4, 0, 4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-t border-r border-xb-gold/40"
          />
        </motion.div>

        {/* Main text */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-display font-light text-xb-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          Something is
          <br />
          <em className="text-xb-gold italic">being made.</em>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-xb-muted text-sm leading-relaxed max-w-sm mb-12"
        >
          This page is currently in development. The full experience is on its
          way.
        </motion.p>

        {/* Animated progress line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-xs mb-12"
        >
          <div className="w-full h-px bg-white/[0.06] relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-xb-gold"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
              style={{ width: "40%" }}
            />
          </div>
        </motion.div>

        {/* Back home */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link
            to="/"
            className="font-mono text-xs text-xb-white border border-white/20 px-8 py-3 tracking-widest uppercase hover:border-xb-gold hover:text-xb-gold transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
