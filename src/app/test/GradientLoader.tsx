"use client";

import React from "react";

export default function GradientLoader() {
  return (
    <div className=" relative flex flex-col items-center justify-center ">
      {/* Loader */}
      <div className="relative w-full max-w-2xl h-1.5 rounded-full overflow-hidden bg-black/20">
        <div className="absolute inset-0 animate-slide">
          <div className="w-50 md:w-2xl h-1.5 rounded-full bg-gradient-to-l from-[#000065] via-[#000065]/50 to-transparent" />
        </div>
      </div>

    

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }

        .animate-slide {
          animation: slide 1.5s infinite linear;
        }

        @keyframes dots {
          0% {
            content: "Loading";
          }
          33% {
            content: "Loading.";
          }
          66% {
            content: "Loading..";
          }
          100% {
            content: "Loading...";
          }
        }

        .loading-text::after {
          content: "Loading";
          animation: dots 1s infinite steps(3, end);
        }
      `}</style>
    </div>
  );
}
