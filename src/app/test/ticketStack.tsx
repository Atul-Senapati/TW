"use client";
import React from "react";

export default function TicketIllustration() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-200">
      {/* Illustration Container */}
      <div className="relative w-[420px] h-[300px]">
        {/* Base Illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 280"
          >
            <rect
              x="20"
              y="40"
              width="360"
              height="200"
              rx="20"
              className="fill-white stroke-pink-600"
              strokeWidth="3"
            />
            <text
              x="200"
              y="140"
              textAnchor="middle"
              className="fill-pink-600 font-bold"
              fontSize="28"
            >
              🎟 Ticket
            </text>
          </svg>
        </div>

        {/* Floating Ticket - Left */}
        <div className="absolute top-8 left-8 -rotate-12 opacity-70">
          <div className="w-32 h-20 rounded-xl bg-white shadow-lg border-2 border-pink-500 flex items-center justify-center text-pink-600 font-semibold">
            XL Pass
          </div>
        </div>

        {/* Floating Ticket - Right */}
        <div className="absolute top-12 right-8 rotate-6 opacity-70">
          <div className="w-32 h-20 rounded-xl bg-white shadow-lg border-2 border-yellow-500 flex items-center justify-center text-yellow-600 font-semibold">
            XXL Pass
          </div>
        </div>
      </div>
    </div>
  );
}
