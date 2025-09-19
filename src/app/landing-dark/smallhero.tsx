"use client"
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { TicketRow } from './extenstion';
import { Chromium } from 'lucide-react';

const Smallhero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * -0.04); // 0.04 makes it laggy (adjust speed here)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const stats = [
      { number: "15m", label: "avg time saved / user / day" },
      { number: "20k+", label: "monthly users" },
      // { number: "50m+", label: "Total Customers of Clients" },
    ];


const textVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // 👈 delay between children
    },
  },
};


  return (
    <div className="h-[700px] relative rounded-t-[46px] mx-8 mt-24  bg-neutral-800/40 gradient-to-br from-[#db7702]  to-[#ffc000] overflow-hidden ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container   ml-auto max-w-2xl px-6 lg:pr-6 lg:pl-20 text-left pt-24"
      >
        {/* Title */}
        <motion.h1
          variants={textVariants}
          className="text-left text-4xl md:text-5xl font-bold text-slate-200 max-w-xl ml-auto leading-tight"
        >
          <span>From Tab Chaos → </span>
          <span className="bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">
            To One-Click Ease
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={textVariants}
          className="mt-6 text-left text-base md:text-lg text-slate-100 max-w-xl ml-auto"
        >
          Download our free extension to discover ticket listings while you
          search. No need to open multiple tabs – we do the hard work.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={textVariants} className="mt-10 space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-tr from-slate-400 via-white to-zinc-500 text-black px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Add to Chrome
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-tr from-neutral-800 via-black to-zinc-900 text-white/70 border-[1px] border-white/8 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={textVariants}
          className="max-w-lg mt-16 grid grid-cols-1 md:grid-cols-2 text-left"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="py-6 pl-4">
              <h2 className="text-5xl font-semibold">{stat.number}</h2>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Microcopy */}
        <motion.div
          variants={textVariants}
          className="mt-2 ml-4 text-sm text-[#94a3b8] max-w-lg"
        >
          No tracking. No permissions. Rated <strong>4.8 ★</strong> on Chrome
          Web Store.
        </motion.div>
      </motion.div>
      <div className="absolute rounded-4xl w-2xl  z-10 right-0 left-0 top-0 min-h-[0.5px] bg-amber-100/30 text-white transform translate-x-[350px] "></div>
      <motion.div
        // initial={{ scale: 0.1, opacity: 0.6 }}
        // whileInView={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.7, delay: 0.1, ease: "backInOut" }}
        className="absolute top-0 -left-1/4 z-10 bg-amber-400 rounded-full w-[600px] h-[700px] blur-3xl transform translate-y-44 translate-x-[366px]"
      >
        hj
      </motion.div>
      <img
        src={"Asset 1.svg"}
        className="max-w-lg absolute top-0 -left-1/3 z-20 transform translate-y-52 translate-x-[366px] grayscale-75 brightness-50 opacity-20 blur-[1px]"
      />
      <img
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.10s linear",
        }}
        src={"Browser.svg"}
        className="max-w-4xl absolute top-[440px] -left-1/4 z-40 transform translate-y-5 translate-x-[142px] invert "
      />
      <img
        src={"Starlight.svg"}
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.10s linear",
        }}
        className="max-w-6xl absolute top-[440px] -left-1/4 grayscale-75 brightness-75 z-30 "
      />
      <div
        className="absolute top-80 left-16 z-50 rounded-2xl overflow-hidden shadow-2xl border border-[#222] bg-[#050505]/60"
      
  // initial={{ opacity: 0, y: 160,  }}
  // whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  // transition={{ duration: 0.2, ease: "easeOut" }}
  // viewport={{ once: true, amount: 0.3 }}
        style={{
          width: 580,
          height: 400,
          transform: `translateY(${offset}px)`,
          transition: "transform 0.15s linear",
        }}
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-[#0c0c0c] border-b border-[#111]">
          <div className="w-3 h-3 rounded-full bg-[#c0392b]" />
          <div className="w-3 h-3 rounded-full bg-[#f39c12]" />
          <div className="w-3 h-3 rounded-full bg-[#2ecc71]" />
          <div className="flex-1 mx-4 rounded-md bg-[#0a0a0a] h-8 flex items-center px-3 text-[#9ca3af] text-sm">
            https://ticketwhiz.com/search?q=concert
          </div>
          <div className="flex items-center gap-2">
            <img src={"Asset7.png"} className="w-4 " />
          </div>
        </div>

        {/* Content area: more ticket matches */}
        <div className="p-6 h-fit overflow-y-hidden bg-black/80">
          <div className="flex flex-col gap-3">
            <TicketRow
              title="Coldplay - 2x Floor"
              price="$220"
              vendor="SeatMart"
            />

            <TicketRow
              title="Imagine Dragons - 3x GA"
              price="$95"
              vendor="StubSpot"
            />
            <TicketRow
              title="The Weeknd - 2x VIP"
              price="$350"
              vendor="LiveNation"
            />
            <TicketRow
              title="Taylor Swift - 2x Lower"
              price="$400"
              vendor="MegaTix"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smallhero