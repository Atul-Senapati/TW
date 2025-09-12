"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Chromium, Mic, Search } from "lucide-react";
import InfiniteHorizontalBrand from "../landing/brands";
import MouseScroll from "@/components/ScrollIndicator";
import ChevronScroll from "@/components/CheveronScroll";

/* --- Variants --- */
const containerVariants: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  start: {
    y: 60,
    opacity: 0,
    filter: "blur(6px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* --- small logo --- */


export default function HeroFullScreen() {
  return (
    <div className="relative min-h-screen max-w-screen overflow-hidden text-gray-900 bg-white">
      {/* Animated gradient background */}

      <div className="absolute inset-0 z-0">
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
              "linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%) ",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
      <motion.div
        initial={{ background: "linear-gradient(to bottom, #ffffff, #ffffff)" }}
        animate={{
          background: ["linear-gradient(to bottom right, #ffffff, #ffffff)"],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 -z-10"
      />

      {/* Top nav */}
      <header className="absolute top-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className=" items-center justify-center">
              <img src="Asset2.png" className="w-40" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-[#000065] transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#000065] transition">
              About Us
            </a>
            <a href="#learn" className="hover:text-[#000065] transition">
              Learn
            </a>
            <span className=" px-3 py-2 text-md font-normal shadow-2xs hover:shadow-lg flex items-center gap-2 bg-amber-800/0 border-[1px] border-neutral-400/30 rounded-4xl">
              {/* <Chromium className="w-5 h-5" /> */}
              Get Chrome Extension
            </span>
          </nav>
        </div>
      </header>

      {/* Hero Center */}
      <main className="absolute w-screen min-h-screen flex items-center justify-center px-6 text-center">
        {/* Container with stagger */}
        <motion.div
          variants={containerVariants}
          initial="start"
          whileInView="end"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl w-full"
        >
          <motion.div variants={childVariants}>
            <p className="inline-flex items-center gap-3 text-sm text-black font-medium bg-neutral-500/10 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-neutral-800" />
              Introducing TicketWhiz
            </p>
          </motion.div>

          <motion.h1
            variants={childVariants}
            style={{ fontWeight: 900 }}
            className="mt-6 py-1 text-4xl md:text-8xl leading-tighter font-semibold tracking-tighter  "
          >
            <span className="bg-gradient-to-tr from-slate-600 via-[#000065] to-zinc-500 bg-clip-text text-transparent">
              One Smart Search.
            </span>{" "}
            <br />
            <div className=" pb-1.5 bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text">
              Every Ticket
            </div>{" "}
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-6 text-lg text-gray-700/80 max-w-2xl mx-auto"
          >
            Find tickets from trusted marketplaces - all in one place
          </motion.p>

          {/* Search bar */}
          <motion.form
            variants={childVariants}
            className="mt-8 flex items-center justify-center"
            onSubmit={(e) => e.preventDefault()}
            role="search"
            aria-label="Search site"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search
            </label>

            <div className="flex w-full max-w-4xl items-center gap-2">
              {/* Make this relative so absolute children are positioned against it */}
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  {/* <Search size={22} /> */}
                  <img
                    src={"auto_awesome.svg"}
                    sizes="22"
                    className="opacity-80"
                  />
                </span>

                {/* give large right padding so input text doesn't go under buttons */}
                <input
                  id="hero-search"
                  type="search"
                  placeholder="hey hello are you there can you find me a ticket about the Justin Bieber"
                  className="w-full z-10 rounded-full border border-gray-200 bg-neutral-50 py-4.5 pl-11 pr-36 text-gray-800 shadow-lg focus:border-[#000065] focus:ring-0.5 focus:ring-[#000065]/10 outline-none transition"
                />

                {/* place the mic and submit inside the same relative wrapper so absolute positioning works */}
                <button
                  type="button"
                  className="absolute right-32 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-neutral-400 hover:scale-105 transition"
                  aria-label="Voice search"
                >
                  <Mic size={22} />
                </button>

                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-slate-800 via-[#000065] to-zinc-800 px-6 py-3 text-base font-medium text-white shadow hover:scale-105 transition"
                >
                  Search
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.form>

          {/* <motion.div
            variants={childVariants}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="#get-started"
              className="inline-flex items-center gap-3 rounded-lg bg-[#000065] text-white px-5 py-3 text-sm font-medium shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#000065]/30 transition"
            >
              Get started
              <ArrowRight size={16} />
            </a>

            <a
              href="#watch"
              className="inline-flex items-center gap-3 rounded-lg border border-[#000065]/20 px-4 py-3 text-sm text-[#000065] hover:bg-[#000065]/5 transition"
            >
              Watch demo
            </a>
          </motion.div> */}

          <motion.div
            variants={childVariants}
            className="mt-8  max-w-6xl text-sm text-gray-600 "
          >
            <InfiniteHorizontalBrand />
          </motion.div>
        </motion.div>
      </main>

      <footer className="relative bottom-28 left-0 right-0 text-center text-xs text-gray-500">
        <div className="relative z-0 h-32 flex justify-end items-center">
          {/* <MouseScroll color="#00000080" bg="transparent" size={0.8} /> */}
          <ChevronScroll color="#2c3e5090" size={0.4} />
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
            className="absolute rounded-full bg-[#000065]/40 blur-[50px] w-full h-48"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "backInOut" }}
            className="absolute rounded-full bg-amber-500/30 blur-[200px] w-72 h-72"
          ></motion.div> */}
        </div>
      </footer>
    </div>
  );
}
