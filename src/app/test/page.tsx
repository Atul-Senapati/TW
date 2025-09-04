"use client"
import React from 'react'
import Loader from './Loader'
import TicketFinder from './TicketFinder';
import TicketLoader from './ticketStack';
import GroundPlane from './GroundPlane';
import ThreeGround from './GroundPlane';
import Loader1 from './truck';
import Section1 from './Section1';
import TicketLoader1 from './Section3';
import BrandCarouselScanner from './Section3';
import TicketWhizLoader from './section4';
import GradientLoader from './GradientLoader';

const page = () => {
  return (
    <div className= ' bg-white'>
       
      {/* <Loader1/> */}
    {/* <ThreeGround src="13.png" /> */}

    {/* <TicketFinder/> */}
    <TicketWhizLoader/>
    {/* <BrandCarouselScanner/> */}

    {/* <GradientLoader/> */}
    


      
      </div>
  )
}

export default page;