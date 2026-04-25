import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { text: "They were never", gold: false },
  { text: "actually arguing.", gold: false },
  { text: "Both describing awe.", gold: true },
];

const MeetingPointBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Pulsing gold glow center */}
    <motion.div
      className="absolute"
      style={{
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Rotating outer ring */}
    <motion.div
      className="absolute"
      style={{
        width: "600px",
        height: "600px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 600 600">
        <circle
          cx="300"
          cy="300"
          r="290"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
          opacity="0.08"
          strokeDasharray="8 16"
        />
      </svg>
    </motion.div>

    {/* Counter rotating inner ring */}
    <motion.div
      className="absolute"
      style={{
        width: "400px",
        height: "400px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{ rotate: [360, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 400 400">
        <circle
          cx="200"
          cy="200"
          r="195"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.4"
          opacity="0.06"
          strokeDasharray="4 12"
        />
      </svg>
    </motion.div>

    {/* Four corner accent lines */}
    {[
      { top: "10%", left: "5%", rotate: "0deg" },
      { top: "10%", right: "5%", rotate: "90deg" },
      { bottom: "10%", left: "5%", rotate: "-90deg" },
      { bottom: "10%", right: "5%", rotate: "180deg" },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ ...pos }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.1, 0.2] }}
        transition={{
          duration: 4,
          delay: i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="60"
          height="60"
          style={{ transform: `rotate(${pos.rotate})` }}
        >
          <path
            d="M 0 0 L 40 0 M 0 0 L 0 40"
            stroke="#C9A84C"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </motion.div>
    ))}

    {/* Floating particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`p-${i}`}
        className="absolute rounded-full bg-xb-gold"
        style={{
          width: "2px",
          height: "2px",
          left: `${15 + i * 10}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 4 + i * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
      />
    ))}
  </div>
);

const MeetingPoint = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 border-t border-white/[0.06] overflow-hidden"
    >
      <MeetingPointBackground />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xb-gold/60 text-xs tracking-[0.4em] uppercase mb-4"
        >
          The Meeting Point
        </motion.p>

        {/* Line by line reveal — alternating sides */}
        <h2
          className="font-display font-light leading-tight"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          {lines.map((line, index) => (
            <motion.span
              key={index}
              className={`block ${line.gold ? "text-xb-gold italic" : "text-xb-white"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.3 + index * 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {line.text}
            </motion.span>
          ))}
        </h2>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="w-24 h-px bg-xb-gold/30 origin-center"
        />

        {/* Body paragraphs */}
        {[
          "Religion and science are not opposites. They are the two oldest human languages for the same experience — standing before something larger than yourself and trying to find words.",
          "One language is metaphor, story, and ritual. The other is equation, experiment, and model. Both are attempts at the same thing: to hold the immensity of existence in a form small enough to pass between people.",
          "A garment can do this too. Reverently empirical. Scientifically sacred. Utterly unwilling to pick a side.",
        ].map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2 + index * 0.2 }}
            className="font-body text-xb-muted text-sm md:text-base leading-relaxed max-w-xl"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default MeetingPoint;
