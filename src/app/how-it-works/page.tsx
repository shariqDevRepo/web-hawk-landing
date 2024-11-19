"use client";

import React from 'react'
import Header from '../header'
import Poster from '../components/poster';
import "@/scss/main.scss";
import ImageBlurb from '../components/image-blurb';
import Footer from '../footer';
import CtaBlock from '../components/cta-block';

export default function page() {
  return (
    <div className="how-it-work-wrapper">
    <Header/>
     <div className="heading-wrapper"><h2 className="main-heading">How it <span className="bold">Works</span></h2></div>
    <Poster/>
    {/* <ImageBlurb/> */}
    <ImageBlurb/>
    <CtaBlock/>
    <Footer/>
    </div>
    
  )
}
