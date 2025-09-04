"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Brand = {
  id: string;
  name: string;
  logo?: string;
  color?: string;
};

type Props = {
  brands?: Brand[];
  interval?: number;
};

const defaultBrands: Brand[] = [
  {
    id: "s1",
    name: "Stripe",
    color: "",
    logo: "slider2.png",
  },
  {
    id: "s2",
    name: "Apple",
    color: "#111827",
    logo: "slider3.png",
  },
  {
    id: "s3",
    name: "Google",
    color: "#1a73e8",
    logo: "slider4.png",
  },
  {
    id: "s4",
    name: "Nike",
    color: "#111827",
    logo: "slider.png",
  },
  {
    id: "s5",
    name: "Airbnb",
    color: "#FF5A5F",
    logo: "slider1.png",
  },
  {
    id: "s6",
    name: "Spotify",
    color: "#1DB954",
    logo: "slider5.png",
  },
  {
    id: "s7",
    name: "Dropbox",
    color: "#0061FF",
    logo: "slider6.png",
  },
];

export default function BrandCarouselScanner({
  brands = defaultBrands,
  interval = 2500,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    const id = setInterval(() => {
      const next = (activeIndex + 1) % brands.length;
      setActiveIndex(next);
      const el = itemRefs.current[next];
      el?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, interval);
    return () => clearInterval(id);
  }, [activeIndex, brands.length, interval]);

  // Clone brands before and after to make seamless loop illusion
  const extendedBrands = [
    ...brands.slice(-2),
    ...brands,
    ...brands.slice(0, 2),
  ];

  return (
    <div className="relative max-w-2xl">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth py-4"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex items-center gap-3 px-6 pt-1 pb-6">
          {extendedBrands.map((b, idx) => {
            const realIndex = idx - 2;
            const isActive = realIndex === activeIndex;

            const initials = b.name
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

            return (
              <div
                key={`${b.id}-${idx}`}
                ref={(el: any) => (itemRefs.current[realIndex] = el)}
                className="snap-center flex-none max-w-36   px-1"
              >
                <motion.div
                  layout
                  animate={{
                    scale: isActive ? 1.1 : 0.8,
                    opacity: isActive ? 1 : 0.25,
                    filter: isActive
                      ? "blur(0px) grayscale(0%)"
                      : "blur(1px) grayscale(60%)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 28 }}
                  style={{
                    ...(isActive && {
                      background: "linear-gradient(145deg, #e8e8ec, #ffffff)",
                      boxShadow:
                        "18px 18px 36px #d7d7da, -18px -18px 36px #ffffff",

                      // glass blur
                      WebkitBackdropFilter: "blur(10px)", // Safari support
                    }),
                  }}
                  className="relative bg-[#F4F4F8] rounded-lg overflow-hidden  flex items-center justify-center h-20 px-4"
                  //   style={{ background: "white" }}
                  //|| b.color
                >
                  {b.logo ? (
                    <img
                      src={b.logo}
                      alt={b.name}
                      className={`${
                        b.id == "s7" ? "max-h-24 p-4" : "max-h-24"
                      } object-contain`}
                    />
                  ) : (
                    <span className="text-white text-2xl font-bold">
                      {initials}
                    </span>
                  )}
                  {/* <motion.span
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1.1 : 1,
        // boxShadow: isActive
        //   ? "0 0 12px #3b82f6, 0 0 24px #3b82f6"
        //   : "0 0 2px #3b82f6",
      }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 left-0 w-4 h-4 border-t-3 border-l-3 border-[#000065] rounded-tl-sm"
    />
    <motion.span
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1.1 : 1,
        // boxShadow: isActive
        //   ? "0 0 12px #3b82f6, 0 0 24px #3b82f6"
        //   : "0 0 2px #3b82f6",
      }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 right-0 w-4 h-4 border-t-3 border-r-3 border-[#000065] rounded-tr-sm"
    />
    <motion.span
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1.1 : 1,
        // boxShadow: isActive
        //   ? "0 0 12px #3b82f6, 0 0 24px #3b82f6"
        //   : "0 0 2px #3b82f6",
      }}
      transition={{ duration: 0.4 }}
      className="absolute bottom-0 left-0 w-4 h-4 border-b-3 border-l-3 border-[#000065] rounded-bl-sm"
    />
    <motion.span
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1.1 : 1,
        // boxShadow: isActive
        //   ? "0 0 12px #3b82f6, 0 0 24px #3b82f6"
        //   : "0 0 2px #3b82f6",
      }}
      transition={{ duration: 0.4 }}
      className="absolute bottom-0 right-0 w-4 h-4 border-b-3 border-r-3 border-[#000065] rounded-br-sm"
    /> */}

                  {isActive && (
                    <motion.div
                      aria-hidden
                      initial={{ x: "-160%" }}
                      animate={{ x: ["-160%", "160%"] }}
                      transition={{
                        ease: "linear",
                        duration: 1.6,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.06) 58%, rgba(255,255,255,0) 100%)",
                        mixBlendMode: "screen",
                      }}
                    />
                  )}
                </motion.div>
                {/* <div className="mt-3 text-center text-sm text-white/90 font-medium select-none">
                  {b.name}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*
Usage (Next.js):

import BrandCarouselScanner from "@/components/BrandCarouselScanner";

export default function Page(){
  return <BrandCarouselScanner />;
}

This version:
- Behaves like a horizontal carousel.
- Brands auto-slide into the middle one by one.
- The sequence loops seamlessly (first brand appears after last).
- Middle brand shows scan effect.
- Non-focused brands are blurred, grayish & more transparent.
*/
