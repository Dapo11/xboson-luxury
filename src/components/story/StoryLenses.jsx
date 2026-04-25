import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// SVG texture for each lens
const ArtTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g
      animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${-60 + i * 400} 0 Q ${200 + i * 80} 40 ${100 + i * 300} 120`}
          fill="none"
          stroke="#F5F5F0"
          strokeWidth="1"
          animate={{ opacity: [0.04, 0.1, 0.04], pathLength: [0.4, 1, 0.4] }}
          transition={{
            duration: 7 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.g>
  </svg>
);

const HistoryTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[...Array(5)].map((_, i) => (
      <motion.path
        key={i}
        d={`M 0 ${20 + i * 20}% Q 25% ${15 + i * 20}% 50% ${20 + i * 20}% T 100% ${20 + i * 20}%`}
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.5"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{
          duration: 6 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}
    {[...Array(4)].map((_, i) => {
      const angle = (i / 4) * Math.PI * 2;
      const x2 = 92 + 6 * Math.cos(angle);
      const y2 = 50 + 6 * Math.sin(angle);
      return (
        <motion.line
          key={`c-${i}`}
          x1="92%"
          y1="50%"
          x2={`${x2}%`}
          y2={`${y2}%`}
          stroke="#8B7355"
          strokeWidth="0.5"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    })}
  </svg>
);

const ReligionTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g
      style={{ transformOrigin: "85% 50%" }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {[60, 100, 140].map((r, i) => (
        <circle
          key={i}
          cx="85%"
          cy="50%"
          r={r}
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
          opacity={0.12 - i * 0.03}
        />
      ))}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const cx = 85 + 8 * Math.cos(angle);
        const cy = 50 + 8 * Math.sin(angle);
        return (
          <circle
            key={`o-${i}`}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r="40"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.4"
            opacity="0.1"
          />
        );
      })}
    </motion.g>
  </svg>
);

const ScienceTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="85%"
      cy="50%"
      rx="180"
      ry="45"
      fill="none"
      stroke="#4A90D9"
      strokeWidth="0.5"
      opacity="0.12"
    />
    <ellipse
      cx="85%"
      cy="50%"
      rx="180"
      ry="45"
      fill="none"
      stroke="#4A90D9"
      strokeWidth="0.5"
      opacity="0.1"
      transform="rotate(60, 1296, 200)"
    />
    <motion.circle
      r="4"
      fill="#4A90D9"
      opacity="0.4"
      animate={{
        cx: [
          "calc(85% + 180px)",
          "calc(85%)",
          "calc(85% - 180px)",
          "calc(85%)",
          "calc(85% + 180px)",
        ],
        cy: ["50%", "calc(50% + 45px)", "50%", "calc(50% - 45px)", "50%"],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    <circle cx="85%" cy="50%" r="8" fill="#4A90D9" opacity="0.2" />
  </svg>
);

const MusicTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[...Array(4)].map((_, i) => (
      <motion.path
        key={i}
        d={`M 60% ${30 + i * 12}% Q 75% ${24 + i * 12}% 90% ${30 + i * 12}% T 100% ${30 + i * 12}%`}
        fill="none"
        stroke="#9B6B9B"
        strokeWidth="0.7"
        opacity="0.15"
        animate={{
          d: [
            `M 60% ${30 + i * 12}% Q 75% ${22 + i * 12}% 90% ${30 + i * 12}% T 100% ${30 + i * 12}%`,
            `M 60% ${30 + i * 12}% Q 75% ${38 + i * 12}% 90% ${30 + i * 12}% T 100% ${30 + i * 12}%`,
            `M 60% ${30 + i * 12}% Q 75% ${22 + i * 12}% 90% ${30 + i * 12}% T 100% ${30 + i * 12}%`,
          ],
        }}
        transition={{
          duration: 2.5 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}
  </svg>
);

const textures = [
  ArtTexture,
  HistoryTexture,
  ReligionTexture,
  ScienceTexture,
  MusicTexture,
];

const lenses = [
  {
    number: "01",
    title: "Art",
    body: "Expression before survival. Fashion as visual art with a responsibility to beauty.",
    fromLeft: true,
    accent: false,
    bg: "transparent",
  },
  {
    number: "02",
    title: "History",
    body: "Every empire had a dress code. Every revolution changed it.",
    fromLeft: false,
    accent: false,
    bg: "rgba(139,115,85,0.03)",
  },
  {
    number: "03",
    title: "Religion",
    body: "Cloth can alter consciousness. A garment can be a form of prayer.",
    fromLeft: true,
    accent: true,
    bg: "rgba(201,168,76,0.04)",
  },
  {
    number: "04",
    title: "Science",
    body: "The double helix is beautiful. We cut along lines nature decided.",
    fromLeft: false,
    accent: true,
    bg: "rgba(74,144,217,0.04)",
  },
  {
    number: "05",
    title: "Music",
    body: "How Fela, Grace Jones, and Sun Ra made performance into fashion argument.",
    fromLeft: true,
    accent: false,
    bg: "rgba(155,107,155,0.03)",
  },
];

const StoryLenses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full border-t border-white/[0.06]">
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-16 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase mb-4"
        >
          The Full Philosophy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display font-light text-xb-white leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          Five Ways <em className="text-xb-gold italic">of Seeing.</em>
        </motion.h2>
      </div>

      {/* Lens rows — each full width */}
      <div className="flex flex-col">
        {lenses.map((lens, index) => {
          const Texture = textures[index];
          return (
            <motion.div
              key={lens.number}
              initial={{ opacity: 0, x: lens.fromLeft ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative w-full border-b border-white/[0.05] group overflow-hidden"
              style={{ backgroundColor: lens.bg }}
            >
              {/* SVG texture */}
              <Texture />

              {/* Row content */}
              <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                {/* Number */}
                <span className="font-mono text-xb-gold/30 text-xs tracking-widest min-w-fit">
                  {lens.number}
                </span>

                {/* Title */}
                <h3
                  className={`font-display font-light leading-none min-w-[200px] transition-colors duration-500 ${lens.accent ? "text-xb-gold" : "text-xb-white group-hover:text-xb-gold"}`}
                  style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
                >
                  {lens.title}
                </h3>

                {/* Divider line — desktop only */}
                <div className="hidden md:block w-px h-12 bg-white/[0.06]" />

                {/* Body */}
                <p className="font-body text-xb-muted/60 text-sm leading-relaxed max-w-md">
                  {lens.body}
                </p>

                {/* Arrow — animated */}
                <motion.span
                  className="hidden md:block font-mono text-xb-gold/20 text-sm ml-auto"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StoryLenses;
