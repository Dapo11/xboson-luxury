import { motion } from "framer-motion";

const words = ["Cloth", "is", "the", "territory", "neither", "fully", "owns."];

const StoryOpening = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Giant watermark — static, no animation */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ opacity: 0.018 }}
      >
        <p
          className="font-display font-light text-white select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(8rem, 20vw, 22rem)",
            letterSpacing: "0.1em",
          }}
        >
          XBOSON
        </p>
      </div>

      {/* Ambient gold glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Vertical line top */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent to-xb-gold/20"
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xb-gold/60 text-xs tracking-[0.4em] uppercase mb-12"
        >
          Xboson · The Brand Story
        </motion.p>

        {/* Word by word reveal */}
        <h1
          className="font-display font-light leading-tight mb-8 flex flex-wrap justify-center gap-x-5 gap-y-1"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`block ${index === words.length - 1 ? "text-xb-gold italic" : "text-xb-white"}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="w-16 h-px bg-xb-gold/30 mb-8 origin-center"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="font-body text-xb-muted text-sm md:text-base leading-relaxed max-w-md mb-12"
        >
          Where the sacred and the empirical stop arguing and start listening to
          each other. Where fashion becomes philosophy made wearable.
        </motion.p>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex items-center gap-6 md:gap-10"
        >
          {["Religion", "Fashion", "Science"].map((pillar, index) => (
            <div key={pillar} className="flex items-center gap-6 md:gap-10">
              <span className="font-mono text-xb-muted/40 text-xs tracking-widest uppercase">
                {pillar}
              </span>
              {index < 2 && <div className="w-px h-4 bg-xb-gold/20" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vertical line bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-transparent to-xb-gold/20"
        initial={{ height: 0 }}
        animate={{ height: "80px" }}
        transition={{ duration: 1.2, delay: 2.0 }}
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-xb-muted/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px bg-xb-gold/30"
          animate={{ height: ["20px", "40px", "20px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default StoryOpening;
