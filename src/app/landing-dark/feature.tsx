"use client"
import React from "react";
import { Search, Tag, Store } from "lucide-react";
import { motion } from "framer-motion";

// FeatureSection.jsx
// Uses Tailwind, lucide-react icons, and Framer Motion for a staggered entrance animation.

export default function FeatureSection() {
  const features = [
    {
      key: "search",
      title: "Smarter Ticket Search",
      desc: "Discover prices across verified marketplaces in seconds so you always get the best deal.",
      Icon: Search,
    },
    {
      key: "pricing",
      title: "Transparent Pricing",
      desc: "No hidden fees. No surprises. Just clear, upfront pricing every time.",
      Icon: Tag,
    },
    {
      key: "marketplaces",
      title: "Verified Marketplaces",
      desc: "Every ticket comes from a trusted source — fully vetted for safety and reliability.",
      Icon: Store,
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.48, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">
              {" "}
              TicketWhiz
            </span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            At TicketWhiz we make it easy to discover great ticket options for
            live events. Whether you're into sports, concerts, or theater, we
            simplify the search — no extra steps.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {features.map((f, idx) => (
            <motion.article
              key={f.key}
              variants={card}
              whileHover={{
                translateY: -6,
                boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                scale: 1.01,
              }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-800/40 backdrop-blur-sm border border-transparent hover:border-amber-500/40 transition-all duration-300 shadow-2xs shadow-amber-600/60"
            >
              <div
                className="p-4 rounded-xl mb-6 bg-gradient-to-br from-amber-500 to-amber-400 shadow-md"
                style={{
                  width: 72,
                  height: 72,
                  display: "grid",
                  placeItems: "center",
                }}
                aria-hidden
              >
                <f.Icon className="w-6 h-6 text-black" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* <div className="mt-12 text-center">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-amber-600 hover:bg-amber-500 text-black shadow-lg"
          >
            Explore Tickets
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}
