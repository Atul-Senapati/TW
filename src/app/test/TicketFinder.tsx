"use client";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";
import Loader from "./Loader";
import FlightWidget from "./TicketWidzet";
import TextType from "./TextType";
import ThreeGround from "./GroundPlane";
import Loader1 from "./truck";

export default function TicketFinder() {
  return (
    <div className="relative  min-h-screen bg-amber-00 px-6 ">
      {/* Header */}
      <Loader/>

      <div className="h-screen flex flex-col items-center justify-between py-12">
        <div className="flex flex-col items-center">
          <h2 className=" mb-6 max-w-4xl text-left text-4xl font-bold tracking-tight text-zinc-700 md:text-7xl ">
            Finding Your Tickets...
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Face 2 Face: Billy Joel & Elton John Tribute
          </p>
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
            textColors={["#000000"]}
            className="text-4xl font-semibold text-black tracking-tight"
          />
        </div>

        <div className="ml-20 relative ">
          {/* <div className="absolute top-0 left-7 transform rotate-12 grayscale-75 opacity-45">
            <FlightWidget />
          </div> */}

         
          <div className="relative z-10">
            <FlightWidget />
          </div>

          {/* <div className="absolute top-0 right-7 transform -rotate-12 grayscale-75 opacity-45">
            <FlightWidget />
          </div> */}
        </div>

      <Loader1/>

        {/* Progress Bar */}
        {/* <div className="w-full max-w-xl h-3 rounded-full bg-indigo-100 mb-10 overflow-hidden">
    // <Loader/>
      </div> */}

        {/* Features */}
        {/* <div className="grid gap-6 sm:grid-cols-3 max-w-3xl w-full text-center">
        <div className="flex flex-col items-center">
          <Search className="w-8 h-8 text-indigo-700 mb-2" />
          <p className="text-sm text-gray-700">
            Searching trusted marketplaces in real time.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-8 h-8 text-indigo-700 mb-2" />
          <p className="text-sm text-gray-700">
            All-in prices shown upfront. No hidden fees.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BadgeDollarSign className="w-8 h-8 text-indigo-700 mb-2" />
          <p className="text-sm text-gray-700">
            Safe sellers. Verified tickets. Guaranteed.
          </p>
        </div>
      </div> */}
      </div>
    </div>
  );
}
