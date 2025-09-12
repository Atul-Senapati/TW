import React from 'react'
import HeroFullScreen from './herod';
import TestimonialsCarousel from './testimonialsdark';
import FeatureSectionTicketSearch from './feature';
import Footer from './footer';
import FeatureSection from './feature';

const page = () => {
  return (
    <div className="max-h-[300vh] h-fit bg-black ">
      <HeroFullScreen />
      <FeatureSection />
      <TestimonialsCarousel />
    </div>
  );
};

export default page