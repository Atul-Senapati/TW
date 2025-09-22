"use client"
import React, { useEffect, useState } from 'react'
import TestimonialsCarousel from './testimonials'
import InfiniteHorizontalBrand from './brands'
import HeroFullScreen from '../landing-dark/herod'

import FeatureSection from "../landing-dark/feature";

import MouseScroll from '@/components/ScrollIndicator'
import BlurText from '@/components/BlurText'
import Footer from './footer'
import Steps from './Steps'
import { StickyScrollRevealDemo } from '@/components/stickyContent'

// import ShaderBackground from '@/components/GradientShader'
import { div } from 'framer-motion/client'
// import ThemeToggle from '@/components/ThemeToggle'
import { Home, User, Settings, Star } from "lucide-react";
import GlassCard from '@/components/GlassCard'
import iphone14 from "@/asset/iPhone14pro2.svg";
import Image from "next/image";
import Smallhero from './smallhero1'
import FeatureSection1 from './Features'
import HeroFullScreen1 from '../hero/page'

const page = () => {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
     const savedTheme = localStorage.getItem("theme") || "light";
     setTheme(savedTheme);
   }, []);



  return (
    <div className={`${theme}`}>
      <div className={`min-h-[700vh] bg-white dark:bg-black   `}>
        {/* <ThemeToggle /> */}

       
  <HeroFullScreen1 />
        <HeroFullScreen />
          <FeatureSection1 />
          <FeatureSection/>
         <StickyScrollRevealDemo />

        {/* <div className="h-[30vh] w-[80vw] relative">
        {" "}
        <ShaderBackground />
      </div> */}

        {/* <div className='min-h-40 bg-green-800 dark:bg-amber-600'></div> */}
        <Smallhero/>
        <TestimonialsCarousel />
       
      </div>
    </div>
    //bg-gradient-to-r from-[#000065] via-[#000099] to-[#0000cc]
  );
}

export default page