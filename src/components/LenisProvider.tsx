// components/LenisProvider.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis"; // or '@studio-freight/lenis' if using that package

export default function LenisProvider() {
  const lenisRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // create instance
    lenisRef.current = new Lenis({
      duration: 1.2, // smoothing duration
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
      smooth: true,
      // orientation: 'vertical' // other options
    });

    // RAF loop
    const raf = (time: number) => {
      lenisRef.current.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // optional: listen to scroll events
    // lenisRef.current.on("scroll", (e) => { /* e.target, e.limit, e.scroll */ });

    return () => {
      // cleanup
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null; // Provider doesn't render UI
}
