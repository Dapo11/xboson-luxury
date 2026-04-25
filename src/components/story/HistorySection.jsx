import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import historyImg from "../../assets/history-bg.jpg";

const HistoryBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[...Array(10)].map((_, i) => (
      <motion.path
        key={`lat-${i}`}
        d={`M 0 ${i * 11}% Q 30% ${i * 11 - 4}% 60% ${i * 11 + 2}% T 100% ${i * 11}%`}
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.6"
        animate={{ opacity: [0.05, 0.2, 0.05] }}
        transition={{
          duration: 8 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.6,
        }}
      />
    ))}
    <motion.g
      style={{ transformOrigin: "50% 50%" }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x2 = 50 + 18 * Math.cos(angle);
        const y2 = 50 + 18 * Math.sin(angle);
        return (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={`${x2}%`}
            y2={`${y2}%`}
            stroke="#8B7355"
            strokeWidth="0.6"
            opacity="0.25"
          />
        );
      })}
      <circle
        cx="50%"
        cy="50%"
        r="60"
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.6"
        opacity="0.2"
      />
    </motion.g>
  </svg>
);

const HistorySection = () => {
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

  const empires = [
    {
      era: "Ancient Egypt",
      note: "Linen as divine material. White as sacred.",
    },
    {
      era: "The Ottoman Court",
      note: "Kaftan layers encoding rank and religion.",
    },
    { era: "Yoruba Kingdom", note: "Aso-oke as ceremony. Cloth as identity." },
    {
      era: "The French Revolution",
      note: "Sans-culottes as political statement.",
    },
    {
      era: "Colonial Africa",
      note: "Reclaiming traditional dress as resistance.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #080A06 50%, #0A0A0A 100%)",
      }}
    >
      <HistoryBackground />

      {/* Faded image — slides in from right */}
      <motion.div
        className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none"
        style={{ x: imageX, opacity: imageOpacity }}
      >
        <img
          src={historyImg}
          alt="Historical ceremonial wear"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.4) 100%)",
          }}
        />

        {/* Warm bronze tint — matches history room */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,10,6,0.6) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Content */}
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
          III · History
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display font-light leading-tight mb-8"
          style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
        >
          <span className="text-xb-white">Every empire</span>
          <br />
          <em className="text-xb-gold italic">had a dress code.</em>
          <br />
          <span
            className="text-xb-white/60"
            style={{ fontSize: "clamp(1.4rem, 3vw, 3rem)" }}
          >
            Every revolution changed it.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-xb-muted text-sm md:text-base leading-relaxed max-w-lg mb-10"
        >
          The clothes of the powerful and the dispossessed are both political,
          and both worth studying. Fashion has always been the language of power
          — and resistance.
        </motion.p>

        {/* Empires list */}
        <div className="flex flex-col gap-0">
          {empires.map((empire, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="grid grid-cols-2 gap-6 py-4 border-b border-white/[0.05] group"
            >
              <p
                className="font-display font-light text-xb-white/70 group-hover:text-xb-white transition-colors duration-300"
                style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)" }}
              >
                {empire.era}
              </p>
              <p className="font-body text-xb-muted/50 text-xs leading-relaxed self-center">
                {empire.note}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HistorySection;
