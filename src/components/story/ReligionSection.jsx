import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import popeImg from "../../assets/pope.jpg";

const ReligionBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="rel-story-glow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <motion.g
      style={{ transformOrigin: "50% 50%" }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      filter="url(#rel-story-glow)"
    >
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const cx = 50 + 32 * Math.cos(angle);
        const cy = 50 + 32 * Math.sin(angle);
        return (
          <g key={i}>
            <circle
              cx={`${cx}%`}
              cy={`${cy}%`}
              r="100"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.6"
              opacity="0.2"
            />
          </g>
        );
      })}
    </motion.g>
    <circle
      cx="50%"
      cy="50%"
      r="80"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1"
      opacity="0.15"
    />
    <circle
      cx="50%"
      cy="50%"
      r="160"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="0.6"
      opacity="0.1"
    />
    <circle
      cx="50%"
      cy="50%"
      r="260"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="0.4"
      opacity="0.07"
    />
  </svg>
);

const garments = [
  "The bishop's cope.",
  "The Buddhist monk's saffron robe.",
  "The Yoruba priest's white agbada at ceremony.",
  "The hijab worn as declaration, not concealment.",
  "The Jewish prayer shawl's knotted fringes encoding commandments in thread.",
];

const ReligionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.5], ["120px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.5], ["-80px", "0px"]);

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #09080D 50%, #0A0A0A 100%)",
      }}
    >
      <ReligionBackground />

      {/* Faded image — slides in from right */}
      <motion.div
        className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none"
        style={{ x: imageX, opacity: imageOpacity }}
      >
        {/* Real image */}
        <img
          src={popeImg}
          alt="Religious ceremonial wear"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay — keeps brand aesthetic */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.4) 100%)",
          }}
        />

        {/* Subtle purple tint — matches religion room color */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(9,8,13,0.6) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Content — slides in from left */}
      <motion.div
        className="relative z-10 w-full md:w-3/5 px-6 md:px-16 lg:px-24"
        style={{ x: textX }}
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase mb-8"
        >
          I · Religion
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display font-light leading-tight mb-8"
          style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
        >
          <span className="text-xb-white">The Sacred</span>
          <br />
          <em className="text-xb-gold italic">Already Knew</em>
          <br />
          <span className="text-xb-white">How to Dress.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-xb-muted text-sm md:text-base leading-relaxed max-w-lg mb-10"
        >
          Religion did not wait for fashion to catch up. Every major faith
          tradition understood that the body dressed in intention was a
          theological act. Cloth can alter consciousness. A garment, chosen with
          enough intention, can be a form of prayer.
        </motion.p>

        {/* Garment list */}
        <div className="flex flex-col gap-0">
          {garments.map((garment, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-5 py-4 border-b border-white/[0.05] group"
            >
              <span className="font-mono text-xb-gold/30 text-xs min-w-fit">
                0{index + 1}
              </span>
              <p
                className="font-display font-light text-xb-white/60 group-hover:text-xb-white transition-colors duration-500"
                style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
              >
                {garment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col gap-3 mt-10"
        >
          <div className="w-8 h-px bg-xb-gold/40" />
          <p className="font-display font-light italic text-xb-gold text-lg md:text-xl">
            "The body is a temple."
          </p>
          <p className="font-mono text-xb-muted/40 text-xs tracking-widest uppercase">
            Every religion, independently, arriving at the same conclusion
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReligionSection;
