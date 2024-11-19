"use client";

import React from 'react'
import Header from '../header'
import Footer from '../footer';
import "@/scss/main.scss";
import CtaBlock from '../components/cta-block';
import PricingBlock from '../components/pricing-block';

export default function page() {
  return (
    <div className="pricing-wrapper">
    <Header/>
    <PricingBlock/>
    <CtaBlock/>
    <Footer/>
    </div>
    
  )
}
