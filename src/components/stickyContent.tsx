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
      "Pick your ticket and we’ll send you to the verified marketplace to complete your purchase quickly and securely.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Lock in the best deal
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="px-10 py-4 ">
      <StickyScroll content={content} />
    </div>
  );
}
