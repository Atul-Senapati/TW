"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ShieldCheck, CheckCircle2, Landmark, DollarSign, CircleDollarSign } from "lucide-react";
import BrandCarouselScanner from "./Section3";
import GradientLoader from "./GradientLoader";

export default function TicketWhizLoader() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center  p-6">
      {/* Header */}
   <div className="absolute inset-0 z-0">
  {/* Grid + gradient background */}
  <div
    className="absolute inset-0"
    style={{
      background: `
        repeating-linear-gradient(
          0deg,
         rgba(0,0,0,0.03) 0px,
rgba(0,0,0,0.03) 1px,

          transparent 1px,
          transparent 46px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0,0,0,0.03) 0px,
rgba(0,0,0,0.03) 1px,

          transparent 1px,
          transparent 46px
        ),
        radial-gradient(circle at 50% 10%, #ffffff1a, #00006510)
      `,
      maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)",
      WebkitMaskImage:
        "linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%) ",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskSize: "100% 100%",
      WebkitMaskSize: "100% 100%",
    }}
  />
</div>

      <header className="text-center mb-8 relative max-w-2xl">
        <div className="inline-flex items-center gap-3 justify-center">
          <img src={"Asset2.png"} className="max-w-40"/>
        </div>

        <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-black">Finding Your Tickets</h2>
        <p className="mt-2 text-sm text-black/70">New York Jets vs. Pittsburgh Steelers</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center text-sm text-black/70">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Sun, Sep 7, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>01:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>MetLife Stadium</span>
          </div>
        </div>
      </header>

      {/* Marketplaces pill */}
      {/* <div className="w-full max-w-2xl">
        <div className="rounded-xl bg-white/30 backdrop-blur-md border border-white/40 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <LogoPill label="SeatGeek" accent />
            <LogoPill label="TicketNetwork" />
            <LogoPill label="VividSeats" important />
          </div>
          <div className="hidden sm:block text-sm text-black/60">Searching 3 marketplaces...</div>
        </div>
      </div> */}

      <BrandCarouselScanner/>

      {/* Progress */}
       <div className="w-full max-w-2xl  relative">
      {/* <div className="relative h-3 rounded-full bg-gray-300 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          className="absolute top-0 left-0 h-full w-1/2"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)",
          }}
        />
      </div> */}

      <GradientLoader/>
      <p className="mt-3 text-center text-sm text-gray-600">
        Syncing inventory across sources...
      </p>
    </div>

      {/* Features full-width glass sections */}
      <div className="w-full grid  grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-2xl  opacity-80 px-8">
        <FeatureGlass icon={<CircleDollarSign className="w-7 h-7 text-[#000065]/90" />} title="Final price shown" subtitle="including fees" />
        <FeatureGlass icon={<CheckCircle2 className="w-7 h-7 text-[#000065]/90" />} title="Verified tickets" subtitle="from trusted sellers" />
        <FeatureGlass icon={<ShieldCheck className="w-7 h-7 text-[#000065]/90" />} title="100% guarantee" subtitle="buyer protection" />
      </div>

      <p className="mt-10 text-sm relative text-black/60 leading-relaxed text-center max-w-2xl">
        TicketWhiz is a metasearch engine. Purchases are made through third-party marketplaces. Prices and
        availability may change. We may earn a commission if you click through and buy.
      </p>
    </div>
  );
}

function LogoPill({ label, accent = false, important = false }: { label: string; accent?: boolean; important?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm ${
        important ? "bg-white/90 scale-105 shadow-md" : accent ? "bg-white/80" : "bg-white/70"
      }`}
      style={{ minWidth: 88 }}
      aria-hidden
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#0ea5e9" strokeWidth="1.6" fill="white" />
        <path d="M7 12h10" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <div className="text-sm font-medium text-black/85 truncate">{label}</div>
    </div>
  );
}

function FeatureGlass({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="h-fit flex flex-shrink-0 flex-col items-center justify-center py-4 px-3 shadow-inner rounded-2xl bg-white/40 backdrop-blur-md border border-black/10">
      {icon}
      <div className="mt-2 text-xs text-black/60">{title}</div>
      <div className="mt-0.5 text-xs text-black/60">{subtitle}</div>
    </div>
  );
}
