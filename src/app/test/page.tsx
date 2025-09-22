"use client"
import React from 'react'


import TicketWhizLoader from './section4';
import GlassCard from '@/components/GlassCard';
import { Home, User, Settings, Star } from "lucide-react";


const page = () => {
  return (
    <div className=" bg-gradient-to-tr from-black to-amber-900">
      {/* <Loader1/> */}
      {/* <ThreeGround src="13.png" /> */}

      {/* <TicketFinder/> */}
      {/* <TicketWhizLoader /> */}
      {/* <BrandCarouselScanner/> */}

      {/* <GradientLoader/> */}
      <GlassCard title="Home" subtitle="Dashboard" Icon={Home} size="sm" />
      <GlassCard title="Profile" subtitle="View" Icon={User} size="sm" />
    </div>
  );
}

export default page;