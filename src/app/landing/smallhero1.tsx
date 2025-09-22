"use client"
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { TicketRow } from '../landing-dark/extenstion';
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
        staggerChildren: 0.2, // 👈 delay between children
      },
    },
  };

  return (
    <div className="h-[700px] relative rounded-[46px] mx-8 mt-24 bg-neutral-100/50 border-[1px] border-neutral-200/20  dark:bg-neutral-800/40    overflow-hidden ">
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        repeating-radial-gradient(
          circle at 0 0,
          rgba(0,0,0,0.04) 0 0.7px,
          transparent 0.7px 6px
        ),
        repeating-radial-gradient(
          circle at 100% 100%,
          rgba(0,0,0,0.02) 0 0.6px,
          transparent 0.6px 5px
        )
      `,
          mixBlendMode: "multiply",
        }}
      /> */}
      <div className="dark:hidden absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
        repeating-linear-gradient(
          0deg,
         rgba(0,0,0,0.04) 0px,rgba(0,0,0,0.04) 1px,
          transparent 1px,
          transparent 46px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0,0,0,0.04) 0px,rgba(0,0,0,0.04) 1px,
          transparent 1px,
          transparent 46px
        ),
        radial-gradient(circle at 50% 10%, #ffffff1a, #00006501)
        
      `,
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(255,255,255,1) 85%, rgba(255,255,255,0) 100%) ",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
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
          className="text-left text-4xl md:text-5xl font-bold dark:text-slate-200 text-[#000065] max-w-xl ml-auto leading-tight"
        >
          <span>From Tab Chaos → </span>
          <span
            className="bg-gradient-to-tr 
  from-amber-400 dark:from-amber-200 
  via-amber-500 dark:via-amber-400 
  to-amber-700 dark:to-amber-600
 text-transparent bg-clip-text"
          >
            To One-Click Ease
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={textVariants}
          className="mt-6 text-left text-base md:text-lg dark:text-slate-100 text-slate-600 max-w-xl ml-auto"
        >
          Download our free extension to discover ticket listings while you
          search. No need to open multiple tabs – we do the hard work.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={textVariants} className="mt-10 space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#000065]  dark:bg-gradient-to-tr from-slate-400 via-white to-zinc-500 dark:text-black text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Add to Chrome
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-tr from-neutral-200 via-white to-zinc-200 dark:bg-gradient-to-tr  dark:from-neutral-800 dark:via-black dark:to-zinc-900 dark:text-white/70 text-black/70 border-[1px] border-white/8 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition"
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
              <h2 className="text-5xl font-semibold text-neutral-800/90 dark:text-white/70">
                {stat.number}
              </h2>
              <p className="mt-2 dark:text-gray-400 text-gray-800">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Microcopy */}
        <motion.div
          variants={textVariants}
          className="mt-2 ml-4 text-sm dark:text-[#94a3b8] text-neutral-700  max-w-lg"
        >
          No tracking. No permissions. Rated <strong>4.8 ★</strong> on Chrome
          Web Store.
        </motion.div>
      </motion.div>
      <div className="absolute rounded-4xl w-2xl  z-10 right-0 left-0 top-0 min-h-[0.5px] bg-[#000065]/60 dark:bg-amber-100/30 text-white transform translate-x-[350px] "></div>
      <motion.div
        // initial={{ scale: 0.1, opacity: 0.6 }}
        // whileInView={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.7, delay: 0.1, ease: "backInOut" }}
        className="absolute top-0 -left-1/4 z-10 bg-[#000065] dark:bg-amber-400 rounded-full w-[600px] h-[700px] blur-3xl transform translate-y-44 translate-x-[366px]"
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
        className="absolute top-80 left-16 z-50 rounded-2xl overflow-hidden shadow-2xl border bg-white/90 border-gray-200
          dark:bg-[#050505]/60 dark:border-[#222]"
        style={{
          width: 580,
          height: 400,
          transform: `translateY(${offset}px)`,
          transition: "transform 0.15s linear",
        }}
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-neutral-100 border-b border-gray-200 dark:bg-[#0c0c0c] dark:border-b dark:border-[#111]">
          <div className="w-3 h-3 rounded-full bg-[#c0392b]" />
          <div className="w-3 h-3 rounded-full bg-[#f39c12]" />
          <div className="w-3 h-3 rounded-full bg-[#2ecc71]" />
          <div className="flex-1 mx-4 rounded-md h-8 flex items-center px-3 text-sm text-gray-600 bg-gray-100 dark:text-[#9ca3af] dark:bg-[#0a0a0a]">
            https://ticketwhiz.com/search?q=concert
          </div>
          <div className="flex items-center gap-2">
            <img src={"Asset7.png"} className="w-4 dark:block hidden" />
            <img src={"Asset 8.png"} className="w-4 dark:hidden" />
          </div>
        </div>

        {/* Content area: more ticket matches */}
        <div className="p-6 h-fit overflow-y-hidden bg-white/70 dark:bg-black/80">
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