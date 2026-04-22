import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import shirt1 from "../../assets/shirt1.jpg";
import shirt2 from "../../assets/shirt2.jpg";
import shirt3 from "../../assets/shirt3.jpg";

const collections = [
  {
    id: 1,
    number: "Collection II",
    year: "2025",
    name: "Meridian",
    tagline: "Faith meets physics.",
    description:
      "Islamic geometric pattern — simultaneously an act of worship and a demonstration of advanced mathematics — made wearable.",
    religion:
      "Islamic geometric ornament · Gothic rose windows · Yoruba cosmological circles",
    science:
      "Geodesic mathematics · Spectral light analysis · Celestial navigation",
    status: "In Development",
    image: shirt1,
  },
  {
    id: 2,
    number: "Collection III",
    year: "2025",
    name: "Entropy",
    tagline: "Order becoming chaos becoming order.",
    description:
      "Thermodynamics as textile. The second law of physics translated into silhouette — structured garments that appear to be mid-dissolution.",
    religion: "Sufi whirling · The sacred spiral · Dissolution as devotion",
    science: "Thermodynamic entropy · Chaos theory · Fractal geometry",
    status: "Concept Stage",
    image: shirt3,
  },
  {
    id: 3,
    number: "Collection IV",
    year: "2026",
    name: "Threshold",
    tagline: "The body at the edge of knowing.",
    description:
      "Every threshold is both an ending and a beginning. Garments built for the moment of crossing — doorways, decisions, transformations.",
    religion:
      "Liminal sacred spaces · Rites of passage · The veil between worlds",
    science: "Quantum superposition · Phase transitions · Boundary conditions",
    status: "Early Concept",
    image: shirt2,
  },
];

const CollectionCard = ({ collection, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group flex flex-col gap-6"
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] bg-xb-surface border border-white/[0.06] overflow-hidden">
        {/* Actual image */}
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-xb-black/30 group-hover:bg-xb-black/10 transition-all duration-700" />

        {/* Corner marks */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-xb-gold/20 group-hover:border-xb-gold/60 transition-colors duration-500" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-xb-gold/20 group-hover:border-xb-gold/60 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-xb-gold/20 group-hover:border-xb-gold/60 transition-colors duration-500" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-xb-gold/20 group-hover:border-xb-gold/60 transition-colors duration-500" />

        {/* Collection number — top left */}
        <p className="absolute top-6 left-6 font-mono text-xb-white/50 text-xs tracking-widest">
          {collection.number}
        </p>

        {/* Year — top right */}
        <p className="absolute top-6 right-6 font-mono text-xb-white/50 text-xs tracking-widest">
          {collection.year}
        </p>
      </div>

      {/* Card Details */}
      <div className="flex flex-col gap-3 px-1">
        {/* Name + Tagline */}
        <div>
          <h3
            className="font-display font-light text-xb-white group-hover:text-xb-gold transition-colors duration-500"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            {collection.name}
          </h3>
          <p className="font-display font-light italic text-xb-gold/70 text-base md:text-lg">
            {collection.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-xb-muted/70 text-sm leading-relaxed">
          {collection.description}
        </p>

        {/* References */}
        <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
          <div className="flex items-start gap-3">
            <span className="font-mono text-xb-gold/50 text-xs tracking-widest uppercase min-w-fit">
              R
            </span>
            <span className="font-body text-xb-muted/40 text-xs leading-relaxed">
              {collection.religion}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono text-xb-gold/50 text-xs tracking-widest uppercase min-w-fit">
              S
            </span>
            <span className="font-body text-xb-muted/40 text-xs leading-relaxed">
              {collection.science}
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 pt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-xb-gold/60 animate-pulse" />
          <span className="font-mono text-xb-muted/40 text-xs tracking-widest uppercase">
            {collection.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CollectionPreview = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-xb-gold text-xs tracking-[0.3em] uppercase mb-4"
            >
              02 · Collections
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-display font-light text-xb-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ideas made <br />
              <em className="text-xb-gold italic">wearable.</em>
            </motion.h2>
          </div>

          {/* View all — desktop only */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <Link
              to="/collections"
              className="font-mono text-xs text-xb-gold border border-xb-gold/40 px-8 py-3 tracking-widest uppercase hover:bg-xb-gold hover:text-xb-black transition-all duration-300"
            >
              View All Collections
            </Link>
          </motion.div>
        </div>

        {/* Three Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>

        {/* View all — mobile only */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:hidden flex justify-center mt-12"
        >
          <Link
            to="/collections"
            className="font-mono text-xs text-xb-gold border border-xb-gold/40 px-8 py-3 tracking-widest uppercase hover:bg-xb-gold hover:text-xb-black transition-all duration-300"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionPreview;
