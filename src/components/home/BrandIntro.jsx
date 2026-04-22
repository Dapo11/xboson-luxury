import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BrandIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Column — Editorial Quote */}
        <div>
          {/* Section Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase mb-10"
          >
            01 · The Founding Observation
          </motion.p>

          {/* Main Quote */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display font-light text-xb-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}
          >
            They were never <br />
            actually arguing. <br />
            <em className="text-xb-gold italic">Both describing awe.</em>
          </motion.h2>
        </div>

        {/* Right Column — Body Text */}
        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-xb-muted text-sm md:text-base leading-relaxed"
          >
            There is a moment in every physics lecture — usually around
            thermodynamics — when the professor says something that sounds
            exactly like a sermon.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="font-body text-xb-muted text-sm md:text-base leading-relaxed"
          >
            And there is a moment in every cathedral — usually during vespers,
            when the light falls through coloured glass — when the architecture
            achieves something that sounds exactly like a proof.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-body text-xb-muted text-sm md:text-base leading-relaxed"
          >
            We noticed this a long time ago. <br />
            We built a fashion house from it.
          </motion.p>

          {/* Divider + Tag */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="w-8 h-px bg-xb-gold/40" />
            <span className="font-mono text-xb-gold/60 text-xs tracking-widest uppercase">
              Lagos · Est. 2022
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
