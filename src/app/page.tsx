"use client";

import Header from "./header";
import HeroBanner from "./components/hero-banner";
import Icons from "./components/IconSlider";
import bg_grid from "@/assets/images/wrapper-bg-grid.png";
import ImageBlurb from "./components/image-blurb";
import PricingBlock from "./components/pricing-block";
import WhyUs from "./components/why-us";
import ActionData from "./components/action-data";
import CtaBlock from "./components/cta-block";
import Footer from "./footer";
import bgMobileGrid from '@/assets/images/mobile-bg-grid.png';
import { useEffect, useState } from "react";

export default function Home() {

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