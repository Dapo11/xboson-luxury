import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import scienceImg from "../../assets/science-bg.jpg";

const ScienceBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="sci-story-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#sci-story-glow)" opacity="0.25">
      <ellipse
        cx="50%"
        cy="50%"
        rx="280"
        ry="80"
        fill="none"
        stroke="#4A90D9"
        strokeWidth="0.8"
      />
      <ellipse
        cx="50%"
        cy="50%"
        rx="280"
        ry="80"
        fill="none"
        stroke="#4A90D9"
        strokeWidth="0.8"
        transform="rotate(60, 756, 400)"
      />
      <ellipse
        cx="50%"
        cy="50%"
        rx="280"
        ry="80"
        fill="none"
        stroke="#4A90D9"
        strokeWidth="0.8"
        transform="rotate(120, 756, 400)"
      />
    </g>
    <motion.circle
      r="5"
      fill="#4A90D9"
      opacity="0.7"
      filter="url(#sci-story-glow)"
      animate={{
        cx: [
          "calc(50% + 280px)",
          "calc(50% + 0px)",
          "calc(50% - 280px)",
          "calc(50% + 0px)",
          "calc(50% + 280px)",
        ],
        cy: ["50%", "calc(50% + 80px)", "50%", "calc(50% - 80px)", "50%"],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <circle
      cx="50%"
      cy="50%"
      r="10"
      fill="#4A90D9"
      opacity="0.4"
      filter="url(#sci-story-glow)"
    />
  </svg>
);

const discoveries = [
  {
    number: "01",
    title: "The Fibonacci Spiral",
    body: "Wasn't designed to be elegant — and yet it is, in sunflowers, in nautilus shells, in the curl of breaking waves.",
  },
  {
    number: "02",
    title: "The Double Helix",
    body: "The moment Crick and Watson saw the model, they knew it was right because it looked right.",
  },
  {
    number: "03",
    title: "The Human Skeleton",
    body: "206 bones arranged with extraordinary precision. Architecture before architecture existed.",
  },
  {
    number: "04",
    title: "Particle Physics",
    body: "Everything you have ever touched was mostly air. Every fabric — a beautiful approximation of solidity.",
  },
];

const ScienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.5], ["-120px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.5], ["80px", "0px"]);

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
          "linear-gradient(135deg, #0A0A0A 0%, #06080F 50%, #0A0A0A 100%)",
      }}
    >
      <ScienceBackground />

      {/* Faded image — slides in from left */}
      <motion.div
        className="absolute left-0 top-0 w-full md:w-1/2 h-full pointer-events-none"
        style={{ x: imageX, opacity: imageOpacity }}
      >
        <img
          src={scienceImg}
          alt="Scientific research"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, #0A0A0A 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.4) 100%)",
          }}
        />

        {/* Blue tint — matches science room */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,8,15,0.6) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Content — slides in from RIGHT */}
      <motion.div
        className="relative z-10 w-full md:w-3/5 md:ml-auto px-6 md:px-16 lg:px-24"
        style={{ x: textX }}
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase mb-8"
        >
          II · Science
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display font-light leading-tight mb-8"
          style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
        >
          <span className="text-xb-white">The Empirical</span>
          <br />
          <em className="text-xb-gold italic">Was Always</em>
          <br />
          <span className="text-xb-white">Beautiful.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-xb-muted text-sm md:text-base leading-relaxed max-w-lg mb-10"
        >
          Science keeps discovering beauty it didn't go looking for. The
          universe was not engineered to be elegant. And yet it insists on being
          so.
        </motion.p>

        {/* Discoveries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04]">
          {discoveries.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.12 }}
              className="bg-xb-black p-6 flex flex-col gap-3 group hover:bg-xb-surface transition-colors duration-500"
            >
              <span className="font-mono text-blue-400/50 text-xs tracking-widest">
                {item.number}
              </span>
              <h3 className="font-display font-light text-xb-white text-lg group-hover:text-xb-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-body text-xb-muted/60 text-xs leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Einstein quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col gap-3 mt-10"
        >
          <div className="w-8 h-px bg-xb-gold/40" />
          <p className="font-display font-light italic text-xb-gold text-lg md:text-xl">
            "The most beautiful thing we can experience is the mysterious."
          </p>
          <p className="font-mono text-xb-muted/40 text-xs tracking-widest uppercase">
            Albert Einstein
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ScienceSection;
