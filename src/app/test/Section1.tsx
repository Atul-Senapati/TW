import React from "react";
import FlightWidget from "./TicketWidzet";
import Marquee from "./Marquee";
import TextType from "./TextType";
import Loader2 from "./Loader2";
import { Clapperboard } from "lucide-react";

const Section1 = () => {
  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden bg-white">
      {/* Background grid layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
          backgroundSize: "46px 46px",
          WebkitMaskImage:
            "linear-gradient(135deg, transparent 0%, white 70%, white 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(135deg, transparent 0%, white 70%, white 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />

      <div className="max-h-screen z-10 relative flex items-center justify-between">
        <div className="text-black min-w-3xl ">
          {" "}
          <div className="flex flex-col items-start pl-10 ">
            <h2 className=" mb-4 max-w-5xl text-left text-5xl font-bold tracking-tight text-[#000065]/90 md:text-8xl ">
              Finding Your Tickets<span className="text-[#D87702] ">...</span>
            </h2>
            <p className=" flex gap-2 text-xl ml-1 font-semibold text-[#000065]/70 mb-6 text-center tracking-wider">
             <Clapperboard className="" /> <span>Face 2 Face: Billy Joel & Elton John Tribute</span> 
            </p>

             <Loader2/>
            <TextType
              text={[
                " Printing your golden ticket",
                " Scanning the seat map",
                " Grabbing popcorn for you",
                " Tuning the event vibes",
                " Almost showtime!",
              ]}
              typingSpeed={40}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
              textColors={["#262626"]}
              className="text-4xl font-semibold text-neutral-800/40 tracking-tight mt-4 "
            />
           
          </div>
        </div>
        <div className="max-h-screen flex items-center justify-center  gap-6  rotate-12">
          <Marquee
            speed={3}
            vertical
            className="[--duration:20s] grayscale-75 opacity-75"
          >
            <FlightWidget />
            <FlightWidget />
          </Marquee>
          <Marquee speed={2} reverse vertical className="[--duration:20s] ">
            <FlightWidget />
            <FlightWidget />
          </Marquee>
          <Marquee speed={2} vertical className="[--duration:20s] grayscale-75 opacity-75">
            <FlightWidget />
            <FlightWidget />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Section1;
