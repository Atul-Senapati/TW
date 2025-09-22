"use client";
import React from "react";
import  {StickyScroll}  from "./StickyScroll";

const content = [
  {
    title: "Search any event",
    description:
      "Just type what you need, like “2 Drake tickets in NYC this weekend under $150 each” and we’ll find it.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Search any event
      </div>
    ),
  },
  {
    title: "We scan every major site",
    description:
      "TicketWhiz checks all top marketplaces to show real-time all-in prices with no hidden fees.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))]">
        We scan every major site
      </div>
    ),
  },
  {
    title: "Lock in the best deal",
    description:
      "Pick your ticket and we'll send you to the verified marketplace to complete your purchase quickly and securely.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Lock in the best deal
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="flex flex-col ">
      <div className="text-center mb-12 mt-24">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#000065] dark:text-white">
          Simple Smart and{" "}
          <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">
            {" "}
            Stress-Free
          </span>
        </h2>
        <p className="mt-4 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg text-slate-600">
          No more endless searching or jumping between tabs. With TicketWhiz,
          you can simply search, discover, and book your perfect seat all in
          just a few clicks. Find your next event today and let us help you save
          on every ticket.
        </p>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
