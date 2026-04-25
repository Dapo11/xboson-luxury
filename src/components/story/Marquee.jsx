import { motion } from "framer-motion";

const items = [
  "Art",
  "History",
  "Religion",
  "Science",
  "Music",
  "Cloth",
  "Culture",
  "Conviction",
  "Lagos",
  "Est. 2022",
  "Art",
  "History",
  "Religion",
  "Science",
  "Music",
  "Cloth",
  "Culture",
  "Conviction",
  "Lagos",
  "Est. 2022",
];

const Marquee = () => {
  return (
    <div className="w-full py-5 border-t border-b border-white/[0.06] overflow-hidden bg-xb-surface/30">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="font-mono text-xb-muted/40 text-xs tracking-[0.3em] uppercase">
              {item}
            </span>
            <span className="text-xb-gold/30 text-xs">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
