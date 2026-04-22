import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lenses = [
  {
    number: "01",
    title: "Art",
    subtitle: "The first human act",
    quote:
      "The first human act was not survival — it was expression. We treat fashion as a visual art form with a responsibility to beauty that goes beyond the commercial.",
    accent: false,
    bgColor: "#0A0A0A",
  },
  {
    number: "02",
    title: "History",
    subtitle: "Every empire had a dress code",
    quote:
      "Every empire had a dress code. Every revolution changed it. The clothes of the powerful and the dispossessed are both political, and both worth studying.",
    accent: false,
    bgColor: "#080A06",
  },
  {
    number: "03",
    title: "Religion",
    subtitle: "The founding lens",
    quote:
      "Faith communities have always understood the power of dressed ritual. Cloth can alter consciousness. A garment, chosen with enough intention, can be a form of prayer.",
    accent: true,
    bgColor: "#09080D",
  },
  {
    number: "04",
    title: "Science",
    subtitle: "The empirical was always beautiful",
    quote:
      "The double helix is beautiful. The Fibonacci spiral is elegant. We cut along the lines that nature already decided. Our patterns obey mathematics that precede us.",
    accent: true,
    bgColor: "#06080F",
  },
  {
    number: "05",
    title: "Music",
    subtitle: "Sound becomes style",
    quote:
      "Music is the only art that exists entirely in time. We study how sound becomes style — how Fela, Grace Jones, and Sun Ra made performance into fashion argument.",
    accent: false,
    bgColor: "#080608",
  },
];

// Art — glowing brushstrokes with visible soft light
const ArtBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="art-glow">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <motion.g
      filter="url(#art-glow)"
      animate={{ x: [0, 10, -6, 0], y: [0, -8, 10, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      {[...Array(7)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${-80 + i * 220} 0 Q ${180 + i * 60} ${250 + i * 50} ${80 + i * 180} 1000`}
          fill="none"
          stroke="#F5F5F0"
          strokeWidth={i % 2 === 0 ? "2" : "1"}
          opacity="0.18"
          animate={{ pathLength: [0.5, 1, 0.5] }}
          transition={{
            duration: 7 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.g>
    {/* Soft ambient glow blobs */}
    <motion.ellipse
      cx="30%"
      cy="40%"
      rx="200"
      ry="300"
      fill="rgba(245,245,240,0.03)"
      animate={{
        cx: ["30%", "35%", "28%", "30%"],
        cy: ["40%", "45%", "38%", "40%"],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.ellipse
      cx="70%"
      cy="60%"
      rx="180"
      ry="250"
      fill="rgba(245,245,240,0.025)"
      animate={{ cx: ["70%", "65%", "72%", "70%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

// History — ancient map with ink spread, deep green-black
const HistoryBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="hist-glow">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Latitude lines — each fades independently */}
    {[...Array(10)].map((_, i) => (
      <motion.path
        key={`lat-${i}`}
        d={`M 0 ${i * 11}% Q 30% ${i * 11 - 4}% 60% ${i * 11 + 2}% T 100% ${i * 11}%`}
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.7"
        animate={{
          opacity: [0.08, 0.35, 0.12, 0.28, 0.08],
          pathLength: [0.3, 1, 0.6, 1, 0.3],
        }}
        transition={{
          duration: 8 + i * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.6,
        }}
      />
    ))}

    {/* Longitude lines — draw themselves slowly */}
    {[...Array(9)].map((_, i) => (
      <motion.path
        key={`lon-${i}`}
        d={`M ${i * 12 + 6}% 0 Q ${i * 12 + 3}% 40% ${i * 12 + 8}% 70% T ${i * 12 + 6}% 100%`}
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.6"
        animate={{
          opacity: [0.05, 0.28, 0.1, 0.22, 0.05],
          pathLength: [0, 1, 0.5, 1, 0],
        }}
        transition={{
          duration: 10 + i * 0.9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.8,
        }}
      />
    ))}

    {/* Compass rose — slowly rotates on its own */}
    <motion.g
      style={{ transformOrigin: "50% 50%" }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      filter="url(#hist-glow)"
    >
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const x2 = 50 + 20 * Math.cos(angle);
        const y2 = 50 + 20 * Math.sin(angle);
        const isMajor = i % 4 === 0;
        return (
          <motion.line
            key={`compass-${i}`}
            x1="50%"
            y1="50%"
            x2={`${x2}%`}
            y2={`${y2}%`}
            stroke="#8B7355"
            strokeWidth={isMajor ? "1" : "0.5"}
            animate={{ opacity: isMajor ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2] }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      {/* Compass rings */}
      <circle
        cx="50%"
        cy="50%"
        r="60"
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <circle
        cx="50%"
        cy="50%"
        r="100"
        fill="none"
        stroke="#8B7355"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </motion.g>

    {/* Outer rings pulsing independently */}
    <motion.circle
      cx="50%"
      cy="50%"
      r="160"
      fill="none"
      stroke="#8B7355"
      strokeWidth="0.5"
      animate={{ opacity: [0.1, 0.3, 0.1], r: [155, 165, 155] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle
      cx="50%"
      cy="50%"
      r="240"
      fill="none"
      stroke="#8B7355"
      strokeWidth="0.3"
      animate={{ opacity: [0.05, 0.2, 0.05], r: [235, 248, 235] }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />

    {/* Territory markers — appear and disappear like discoveries */}
    {[
      { x: "15%", y: "25%" },
      { x: "72%", y: "18%" },
      { x: "38%", y: "68%" },
      { x: "82%", y: "55%" },
      { x: "22%", y: "78%" },
      { x: "60%", y: "82%" },
      { x: "88%", y: "30%" },
      { x: "45%", y: "32%" },
      { x: "10%", y: "50%" },
      { x: "91%", y: "72%" },
    ].map((pos, i) => (
      <motion.g key={`mark-${i}`} filter="url(#hist-glow)">
        <motion.circle
          cx={pos.x}
          cy={pos.y}
          r="3"
          fill="#8B7355"
          animate={{ opacity: [0, 0.6, 0.3, 0.7, 0], r: [2, 4, 3, 4, 2] }}
          transition={{
            duration: 6 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.1,
          }}
        />
        <motion.circle
          cx={pos.x}
          cy={pos.y}
          r="8"
          fill="none"
          stroke="#8B7355"
          strokeWidth="0.5"
          animate={{ opacity: [0, 0.3, 0], r: [6, 14, 20] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1.1 + 0.5,
          }}
        />
      </motion.g>
    ))}

    {/* Ink trail — a single line that draws itself across the map */}
    <motion.path
      d="M 5% 30% L 20% 25% L 35% 40% L 55% 35% L 70% 50% L 85% 45% L 95% 60%"
      fill="none"
      stroke="#8B7355"
      strokeWidth="1.2"
      filter="url(#hist-glow)"
      animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.5, 0.5, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.4, 0.7, 1],
      }}
    />
  </svg>
);

// Religion — MORE VISIBLE orbiting circles, gold and bright
const ReligionBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="rel-glow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Outer slow rotation */}
    <motion.g
      style={{ transformOrigin: "50% 50%" }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      filter="url(#rel-glow)"
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
              r="90"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.8"
              opacity="0.35"
            />
            <circle
              cx={`${cx}%`}
              cy={`${cy}%`}
              r="45"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
              opacity="0.25"
            />
          </g>
        );
      })}
    </motion.g>
    {/* Inner counter-rotation */}
    <motion.g
      style={{ transformOrigin: "50% 50%" }}
      animate={{ rotate: [360, 0] }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      filter="url(#rel-glow)"
    >
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const cx = 50 + 18 * Math.cos(angle);
        const cy = 50 + 18 * Math.sin(angle);
        return (
          <circle
            key={i}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r="55"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.6"
            opacity="0.3"
          />
        );
      })}
    </motion.g>
    {/* Static center rings — always visible */}
    <circle
      cx="50%"
      cy="50%"
      r="60"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.2"
      opacity="0.4"
    />
    <circle
      cx="50%"
      cy="50%"
      r="140"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="0.8"
      opacity="0.3"
    />
    <circle
      cx="50%"
      cy="50%"
      r="220"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="0.5"
      opacity="0.2"
    />
    <circle
      cx="50%"
      cy="50%"
      r="320"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="0.3"
      opacity="0.15"
    />
  </svg>
);

// Science — dark space blue, particle atoms orbiting nucleus
const ScienceBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="sci-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Electron orbit rings */}
    <g filter="url(#sci-glow)" opacity="0.4">
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
    {/* Orbiting electrons */}
    <motion.circle
      cx="0"
      cy="0"
      r="5"
      fill="#4A90D9"
      opacity="0.8"
      filter="url(#sci-glow)"
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
    <motion.circle
      cx="0"
      cy="0"
      r="4"
      fill="#7AB8F5"
      opacity="0.7"
      filter="url(#sci-glow)"
      animate={{
        cx: [
          "calc(50% - 280px)",
          "calc(50% + 0px)",
          "calc(50% + 280px)",
          "calc(50% + 0px)",
          "calc(50% - 280px)",
        ],
        cy: ["50%", "calc(50% - 80px)", "50%", "calc(50% + 80px)", "50%"],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      cx="0"
      cy="0"
      r="3"
      fill="#B8D8F8"
      opacity="0.6"
      filter="url(#sci-glow)"
      animate={{
        cx: [
          "calc(50% + 0px)",
          "calc(50% + 280px)",
          "calc(50% + 0px)",
          "calc(50% - 280px)",
          "calc(50% + 0px)",
        ],
        cy: [
          "calc(50% - 80px)",
          "50%",
          "calc(50% + 80px)",
          "50%",
          "calc(50% - 80px)",
        ],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    {/* Nucleus */}
    <circle
      cx="50%"
      cy="50%"
      r="12"
      fill="#4A90D9"
      opacity="0.6"
      filter="url(#sci-glow)"
    />
    <circle
      cx="50%"
      cy="50%"
      r="6"
      fill="#B8D8F8"
      opacity="0.9"
      filter="url(#sci-glow)"
    />
    {/* DNA helix lines */}
    {[...Array(20)].map((_, i) => (
      <motion.circle
        key={`dna-${i}`}
        cx={`${5 + i * 4.5}%`}
        cy="0"
        r="2.5"
        fill="#4A90D9"
        opacity="0.35"
        animate={{
          cy: [
            `${45 + 15 * Math.sin(i * 0.8)}%`,
            `${45 + 15 * Math.sin(i * 0.8 + Math.PI)}%`,
            `${45 + 15 * Math.sin(i * 0.8)}%`,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.1,
        }}
      />
    ))}
    {[...Array(20)].map((_, i) => (
      <motion.circle
        key={`dna2-${i}`}
        cx={`${5 + i * 4.5}%`}
        cy="0"
        r="2"
        fill="#7AB8F5"
        opacity="0.25"
        animate={{
          cy: [
            `${45 + 15 * Math.sin(i * 0.8 + Math.PI)}%`,
            `${45 + 15 * Math.sin(i * 0.8)}%`,
            `${45 + 15 * Math.sin(i * 0.8 + Math.PI)}%`,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.1,
        }}
      />
    ))}
  </svg>
);

// Music — warm purple-black, equalizer bars + vinyl ripples
const MusicBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="mus-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Vinyl record ripples */}
    <motion.g
      style={{ transformOrigin: "50% 50%" }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      {[60, 100, 140, 180, 220, 260].map((r, i) => (
        <circle
          key={i}
          cx="50%"
          cy="50%"
          r={r}
          fill="none"
          stroke="#9B6B9B"
          strokeWidth="0.8"
          opacity={0.35 - i * 0.04}
        />
      ))}
    </motion.g>
    {/* Equalizer bars bottom */}
    {[...Array(28)].map((_, i) => (
      <motion.rect
        key={`bar-${i}`}
        x={`${3 + i * 3.3}%`}
        width="2%"
        fill="#9B6B9B"
        opacity="0.4"
        filter="url(#mus-glow)"
        animate={{
          height: [
            `${8 + Math.random() * 20}%`,
            `${15 + Math.random() * 35}%`,
            `${5 + Math.random() * 15}%`,
            `${12 + Math.random() * 28}%`,
          ],
          y: [
            `${72 - Math.random() * 20}%`,
            `${65 - Math.random() * 35}%`,
            `${80 - Math.random() * 15}%`,
            `${68 - Math.random() * 28}%`,
          ],
        }}
        transition={{
          duration: 1.2 + Math.random() * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.08,
        }}
      />
    ))}
    {/* Sound waves emanating */}
    {[...Array(6)].map((_, i) => (
      <motion.path
        key={`wave-${i}`}
        d={`M 0 ${40 + i * 4}% Q 25% ${36 + i * 4}% 50% ${40 + i * 4}% T 100% ${40 + i * 4}%`}
        fill="none"
        stroke="#9B6B9B"
        strokeWidth="0.8"
        opacity="0.2"
        animate={{
          d: [
            `M 0 ${40 + i * 4}% Q 25% ${32 + i * 4}% 50% ${40 + i * 4}% T 100% ${40 + i * 4}%`,
            `M 0 ${40 + i * 4}% Q 25% ${48 + i * 4}% 50% ${40 + i * 4}% T 100% ${40 + i * 4}%`,
            `M 0 ${40 + i * 4}% Q 25% ${32 + i * 4}% 50% ${40 + i * 4}% T 100% ${40 + i * 4}%`,
          ],
        }}
        transition={{
          duration: 2.5 + i * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}
  </svg>
);

const backgrounds = [
  ArtBackground,
  HistoryBackground,
  ReligionBackground,
  ScienceBackground,
  MusicBackground,
];

// --- Single Lens Room ---

const LensRoom = ({ lens, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const Background = backgrounds[index];

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-16 overflow-hidden"
      style={{
        background: lens.accent
          ? "linear-gradient(135deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)"
          : "#0A0A0A",
      }}
    >
      {/* Animated Background */}
      <Background />

      {/* Gold glow for Religion + Science */}
      {lens.accent && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Room Number */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: lens.accent ? "#C9A84C" : "rgba(245,245,240,0.3)" }}
        >
          {lens.number}
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display font-light leading-none mb-8"
          style={{
            fontSize: "clamp(4rem, 12vw, 10rem)",
            color: lens.accent ? "#C9A84C" : "#F5F5F0",
          }}
        >
          {lens.title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: lens.accent ? "#C9A84C" : "rgba(245,245,240,0.2)",
          }}
        />

        {/* Quote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-body text-xb-muted text-sm md:text-base leading-relaxed max-w-md"
        >
          {lens.quote}
        </motion.p>
      </div>

      {/* Corner label — bottom left */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-10 left-6 md:left-16 font-mono text-xs tracking-widest uppercase"
        style={{ color: "rgba(245,245,240,0.2)" }}
      >
        {lens.subtitle}
      </motion.p>

      {/* Room number — bottom right */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-10 right-6 md:right-16 font-mono text-xs tracking-widest"
        style={{ color: "rgba(245,245,240,0.1)" }}
      >
        {lens.number} / 05
      </motion.p>
    </section>
  );
};

// --- Main Component ---

const FiveLenses = () => {
  return (
    <div>
      {lenses.map((lens, index) => (
        <LensRoom key={lens.number} lens={lens} index={index} />
      ))}
    </div>
  );
};

export default FiveLenses;
