"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Chromium, Mic, Search } from "lucide-react";
import InfiniteHorizontalBrand from "../landing/brands";
import InfiniteHorizontalBrandDark from "./brandsdark";

/* --- Variants --- */
const containerVariants: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  start: {
    y: 30,
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
const logo = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="6" fill="#000065" />
  </svg>
);



export default function HeroFullScreen() {
  return (
    <div className="relative min-h-screen max-h-screen overflow-hidden text-gray-100 bg-black ">
      {/* Animated gradient background */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
        className="absolute inset-0   z-0 h-[450px] "
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #fbbf2440, transparent 70%), #000000",
        }}
      ></motion.div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
          backgroundSize: "109px",
          backgroundRepeat: "repeat",
          backgroundImage:
            "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
          opacity: 0.06,
          borderRadius: 0,
        }}
      ></div>

      {/* Top nav */}
      <header className="absolute top-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className=" items-center justify-center">
              <img src="Asset 1.svg" className="w-40" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#features" className="hover:text-[#fff] transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#fff] transition">
              About us
            </a>
            <a href="#learn" className="hover:text-[#fff] transition">
              Learn
            </a>
            <span className=" px-3 py-2 text-md font-normal shadow-md hover:shadow-lg flex items-center gap-2 bg-amber-800/10 border-[1px] border-amber-500/10 rounded-4xl">
              Get Chrome Extension
              {/* <Chromium className="w-3.5 h-3.5" /> */}
            </span>
          </nav>
        </div>
      </header>

      {/* Hero Center */}
      <main className=" absolute min-h-screen w-screen flex items-center justify-center px-6 text-center z-20">
        {/* Container with stagger */}
        <motion.div
          variants={containerVariants}
          initial="start"
          whileInView="end"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl w-full"
        >
          <motion.div variants={childVariants}>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#1c1528] rounded-full px-4 py-2 flex items-center gap-2  w-fit mx-4">
                <span className="text-xs flex items-center gap-2">
                  <span className="bg-black p-1 rounded-full">🥳</span>
                  Introducing TicketWhiz
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={childVariants}
            style={{ fontWeight: 900 }}
            className="mt-6 py-1 text-4xl md:text-8xl leading-tighter font-semibold tracking-tighter  "
          >
            <span className="bg-gradient-to-t from-slate-500 via-white to-zinc-400 bg-clip-text text-transparent">
              One Smart Search.
            </span>{" "}
            <br />
            <div className=" pb-1.5 bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">
              Every Ticket
            </div>{" "}
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
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
                  <img
                    src={"auto_awesome.svg"}
                    sizes="22"
                    className="invert opacity-70"
                  />
                </span>

                {/* give large right padding so input text doesn't go under buttons */}
                <input
                  id="hero-search"
                  type="search"
                  placeholder="hey hello are you there can you find me a ticket about the Justin Bieber"
                  className="w-full z-10 rounded-full border border-gray-700 bg-black/70 py-4.5 pl-11 pr-36 text-gray-100 shadow-xs shadow-amber-50 focus:border-gray-400 focus:ring-0.5 focus:ring-gray-100 outline-none transition"
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
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-slate-400 via-white to-zinc-500 px-6 py-3 text-base font-medium text-black shadow hover:scale-105 transition"
                >
                  Search
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.form>

          <motion.div
            variants={childVariants}
            className="mt-8  text-sm text-gray-600 max-w-6xl"
          >
            <InfiniteHorizontalBrandDark />
          </motion.div>
        </motion.div>
      </main>

      <footer className="absolute bottom-5  left-0 right-0 text-center text-xs text-gray-500">
        <div className="relative z-0 h-12  flex justify-center items-center rounded-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
            className="absolute rounded-full bg-[#000065]/40 blur-[50px] w-[80vw] h-28"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "backInOut" }}
            className="absolute rounded-full bg-amber-100/30 blur-[200px] w-72 h-72"
          ></motion.div>
        </div>
      </footer>
    </div>
  );
}
