"use client"
import React from 'react'
import TestimonialsCarousel from './testimonials'
import InfiniteHorizontalBrand from './brands'
import HeroFullScreen from '../hero/page'
import FeatureSection from './Features'

import MouseScroll from '@/components/ScrollIndicator'
import BlurText from '@/components/BlurText'
import Footer from './footer'
import Steps from './Steps'

const page = () => {


  return (
    <div className="min-h-[300vh] bg-black">
      <HeroFullScreen />

      <FeatureSection />
      {/* <Steps/> */}
      <TestimonialsCarousel />
      <Footer/>
      
    </div>
    //bg-gradient-to-r from-[#000065] via-[#000099] to-[#0000cc]
  );
}

export default page