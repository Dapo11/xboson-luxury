import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import founderImg from "../../assets/founder-portrait.jpg";

const paragraphs = [
  "I grew up in a place where both of these things were taken seriously — where Sunday morning was non-negotiable and where the stars were studied by people who also prayed to them. I was never asked to choose.",
  "What I noticed, growing up, was that the most interesting people I knew lived in that space between the religious and the empirical. Scientists who kept rosaries in their lab coats. Pastors who quoted Einstein in their sermons.",
  "That is what I want Xboson to be. Not a brand that picks a side. A brand that understands that the most interesting questions live in the tension between sides.",
  "Because a garment is both a physical object and a symbolic one. Both at once. Always.",
];

const FromTheFounder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative w-full border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left — portrait with parallax */}
        <div className="relative h-[50vh] md:h-auto md:min-h-[600px] overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <img
              src={founderImg}
              alt="Founder of Xboson Luxury"
              className="w-full h-full object-cover object-top"
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 50%, rgba(10,10,10,0.6) 100%)",
              }}
            />

            {/* Right side fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 50%, #0A0A0A 100%)",
              }}
            />

            {/* Corner marks */}
            <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-xb-gold/30" />
            <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-xb-gold/30" />
            <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-xb-gold/30" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-xb-gold/30" />
          </motion.div>
        </div>

        {/* Right — founder text */}
        <div className="flex flex-col justify-center gap-8 px-6 md:px-12 lg:px-16 py-20">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase"
          >
            From The Founder
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-display font-light text-xb-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
          >
            Why I built this brand
            <br />
            in the space between
            <br />
            <em className="text-xb-gold italic">faith and physics.</em>
          </motion.h2>

          <div className="flex flex-col gap-5">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="font-body text-xb-muted text-sm md:text-base leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-4 pt-2"
          >
            <div className="w-8 h-px bg-xb-gold/40" />
            <span className="font-mono text-xb-gold/60 text-xs tracking-widest uppercase">
              Founder, Xboson Luxury
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FromTheFounder;
