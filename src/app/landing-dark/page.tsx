import React from 'react'
import HeroFullScreen from './herod';
import TestimonialsCarousel from './testimonialsdark';
import FeatureSectionTicketSearch from './feature';
import Footer from './footer';
import FeatureSection from './feature';
import { StickyScrollRevealDemo } from '@/components/stickyContent';


const page = () => {
  return (
    <div className="min-h-[200vh]  bg-black ">
      <HeroFullScreen />
      <StickyScrollRevealDemo />
      <FeatureSection />

      <TestimonialsCarousel />
    </div>
  );
};

export default page