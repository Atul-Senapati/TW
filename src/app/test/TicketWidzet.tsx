"use client";

import { useEffect, useState } from "react";
import { Armchair, Clapperboard, Clock1 } from "lucide-react";

const getTime = () => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return now.toLocaleString("en-GB", options);
};

export default function FlightWidget() {
  const [formattedTime, setFormattedTime] = useState(getTime());

  useEffect(() => {
    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();
    const timeout = setTimeout(() => {
      setFormattedTime(getTime());
    }, secondsUntilNextMinute * 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex h-60 w-52 overflow-hidden rounded-3xl text-black">
      <div className="relative w-16 items-center justify-evenly overflow-hidden bg-gray-50">
        <div className=" px-8 full absolute bottom-0 left-full flex h-16 w-60 origin-bottom-left -rotate-90 items-center justify-center gap-3 bg-gradient-to-r from-[#000065] to-[#333399]">
          {/* <div className="text-lg font-semibold tracking-widest text-white">AIR CANADA</div>
          <Clapperboard className="size-6 text-white" fill="black" /> */}
          <img src={"Asset 1.svg"}/>
        </div>
      </div>
      <div className="relative h-full w-36    bg-gradient-to-b from-[#FFC000] to-[#D87702] p-4 text-sm">
        {/* The background should match the container's background */}
        <div className="absolute -left-3 -top-3 z-10 h-6 w-6 rounded-full bg-white " />
        <div className="flex justify-around pb-2">
          <div className="flex flex-col text-2xl font-bold">
            <p>TOR</p>
            <p>NYC</p>
          </div>
          <div>
            <div className="mt-1.5 rounded-2xl bg-[#000065] px-2 font-mono font-bold text-[#FFC000]/90">
              A50
            </div>
          </div>
        </div>
        <div className="mt-2 font-bold tracking-tight text-[#000065]/40">Gameroa</div>
        <div className="flex items-center justify-between font-bold">
          <p>AC951</p>
          <p className="flex pr-2">
            <Armchair fill="black" /> 1A
          </p>
        </div>
        <div className="mt-2 font-bold tracking-tight text-[#000065]/40">Date </div>
        <div className="flex font-bold">
          <p>Fri 24 sept 2025</p>
        </div>

          <div className="mt-2 font-bold tracking-tight text-[#000065]/40">Time</div>
        <div className="flex font-bold">
          <p>04:20 pm</p>
        </div>
        
        
      
       
        {/* The background should match the container's background */}
        <div className="absolute -bottom-3 -left-3 z-10 h-6 w-6 rounded-full bg-white " />
      </div>
    </div>
  );
}
