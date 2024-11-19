"use client";

import ActionData from '@/app/components/action-data';
import CtaBlock from '@/app/components/cta-block';
import HeroBanner from '@/app/components/hero-banner';
import Icons from '@/app/components/IconSlider';
import ImageBlurb from '@/app/components/image-blurb';
import PricingBlock from '@/app/components/pricing-block';
import WhyUs from '@/app/components/why-us';
import Footer from '@/app/footer';
import Header from '@/app/header';
import bg_grid from "@/assets/images/wrapper-bg-grid.png";
import bgMobileGrid from '@/assets/images/mobile-bg-grid.png';
import { useEffect, useState } from "react";

export default function page() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
  
    <div className="main-wrapper">
      <Header/>
      <HeroBanner/>
      
      <div className="wrapper-block" style={{ backgroundImage: `url(${isMobile ? bgMobileGrid.src : bg_grid.src})`}}>
        <Icons/>
        <ImageBlurb/>
        <PricingBlock/>
        <WhyUs/>
        <ActionData/>
        <CtaBlock/>
        <Footer/>
      </div>
      
    </div>
  );
}