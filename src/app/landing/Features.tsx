"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShoppingCart, TrendingUp, Zap } from "lucide-react";

/* Color tokens — keep primary for brand accents */
const PRIMARY = "#000065";

/* Container staggering: children will animate with a small stagger */
const containerVariants: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/* Child entrance: subtle pop-up using a spring-like config */
const childVariants: Variants = {
  start: { y: 18, opacity: 0, scale: 0.98 },
  end: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      // feel a little springy without overshoot
      type: "spring",
      stiffness: 160,
      damping: 20,
    },
  },
};

const ICON_VARIANTS: Variants = {
  start: { scale: 0.9, rotate: -6, opacity: 0.9 },
  end: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.45 } },
};

const FEATURES = [
  {
    Icon: ShoppingCart,
    title: "All Marketplaces",
    description:
      "Search across Amazon, eBay, Walmart, Target and 50+ other marketplaces simultaneously.",
  },
  {
    Icon: TrendingUp,
    title: "Best Prices",
    description:
      "Instantly compare prices and find the best deals. Save up to 40% on purchases.",
  },
  {
    Icon: Zap,
    title: "Lightning Fast",
    description:
      "Get results in under 2 seconds. Our advanced algorithms ensure speed & accuracy.",
  },
];

export default function FeatureSection(): JSX.Element {
  return (
    <section
      aria-labelledby="features-heading"
      id="features"
      className="px-6 py-16 bg-white relative"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="start"
          whileInView="end"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <motion.h2
            id="features-heading"
            variants={childVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tighter"
            style={{ color: PRIMARY }}
          >
            Why Choose Our <span className="text-amber-500">Platform?</span>
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg"
          >
            Experience the future of online shopping with our comprehensive
            marketplace comparison tool — faster results, better prices, and
            wider selection.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="start"
          whileInView="end"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 md:grid-cols-3"
          role="list"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <motion.article
                key={feature.title}
                variants={childVariants}
                role="listitem"
                tabIndex={0}
                className="group rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-neutral-100/60 transition transform will-change-transform hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg outline-none"
                style={{ borderColor: "rgba(0,0,101,0.06)" }}
                aria-label={feature.title}
              >
                {/* Icon block */}
                <motion.div
                  variants={ICON_VARIANTS}
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#000065]/80 via-[#000065]/70 to-[#000065]/80 text-white shadow-md transition-shadow group-hover:shadow-xl"
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </motion.div>

                <h3 className="text-lg text-neutral-900 font-semibold mb-2 text-center">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {feature.description}
                </p>

                {/* subtle CTA row — appears on hover/focus for micro interaction */}
                <div className="mt-5 flex justify-center">
                  <button
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-neutral-900 bg-gray-500/10 border border-gray-500/15 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 focus:opacity-100 focus-visible:ring-2 focus-visible:ring-gray-300 transition-all"
                    onClick={() => {
                      /* Example action - replace with real handler */
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Decorative background band (visual depth) */}
        <div
          className="absolute -z-10 bottom-0 w-full min-h-[20vh] bg-neutral-900"
          aria-hidden
        />
      </div>

      {/* Respect prefers-reduced-motion: if user prefers reduced motion, remove framer animations */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-safe { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
