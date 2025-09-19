"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import iphone14 from "@/asset/iPhone14pro2.svg"
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
  const theme = "light"


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index /3);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }, 
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000000",
    "#000000", // slate-90060
    "#000000", // black
    "#171717", // neutral-900
  ];
//    const backgroundColors = [
//      "#fff", // slate-90060
//      "#fff", // black
//      "#171717", // neutral-900
//    ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];
  let videos =[ "9_16.mp4","VIDEO2.mp4" ,"9_16.mp4"];

  const [backvedos,setbackvedos] =useState(videos[0])

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    setbackvedos(videos[activeCard % videos.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex justify-center mx-auto max-w-6xl   space-x-10 rounded-md p-10  "
      ref={ref}
    >
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-20 hidden h-[100vh]   overflow-hidden rounded-md  lg:block",
          contentClassName
        )}
      >
        {/* {content[activeCard].content ?? null} */}

        <div className="relative flex items-center justify-center">
          <Image
            src={iphone14}
            className=" w-[300px] z-0 grayscale-100 transform -scale-x-100"
            alt="mobile"
          />
          <img
            src={"Asset 1.svg"}
            className="absolute h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <img
            src={"Camera.svg"}
            className="absolute h-4.5 brightness-25 top-5 left-1/2 -translate-x-1/2  z-20"
          />
          {/* <img
            src={"Camera.svg"}
            className="absolute h-4.5 brightness-25 top-5 left-1/2 -translate-x-1/2  z-20"
          /> */}
          <img
            src={"IMG.png"}
            className="h-[598px] w-[290px] rounded-4xl bg-black absolute -z-10 text-black"
            style={{ background: backgroundGradient }}
          />
          {/* <video
            src={backvedos}
            autoPlay
            muted
            loop
            playsInline
            className="h-[598px] w-[290px] rounded-4xl bg-black absolute -z-10 text-black"
          /> */}

          <div
            className="h-[598px] w-[290px] rounded-4xl bg-black absolute -z-10 text-black"
            style={{ background: backgroundGradient }}
          >
            j
          </div>
          {/* <img src={"Asset7.png"} className="absolute -z-20 "/> */}
          {/* <div className="absolute min-h-[300px] min-w-[320px] opacity-90 rounded-full blur-2xl bg-gradient-to-tr  from-amber-400 via-orange-300 to-yellow-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
            {" "}
            rw frwfrew
          </div> */}
        </div>
      </div>
      <div className="div relative flex items-start px-4 ">
        <div className="max-w-xl ">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-54 h-[60vh]  ">
              {/* <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-orange-300 to-yellow-400 text-black flex items-center justify-center text-xl font-bold">
                0{index + 1}
              </div> */}
              {/* <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base  text-black py-1 px-4 bg-gradient-to-tr from-amber-200 via-amber-300 to-amber-400 w-fit opacity-40  rounded-4xl mb-2"
              >
                Up to Date
              </motion.div> */}
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-5xl flex gap-6 font-bold text-slate-100"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-600 text-black flex items-center justify-center text-4xl font-bold">
                  {index + 1}
                </div>{" "}
                <span className="mt-2">{item.title}</span>
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base mt-3 ml-[88px]  text-slate-500"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* <div className="h-20" /> */}
        </div>
      </div>
    </motion.div>
  );
};
