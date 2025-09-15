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
      <StickyScroll content={content} />
    </div>
  );
}
