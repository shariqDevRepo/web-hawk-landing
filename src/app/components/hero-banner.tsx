import React from 'react'
import "@/scss/landing/hero-banner.scss";
import bg_image from "@/assets/images/hero-bg.png";
import DASHBOARD_FULL_IMAGE_BORDER from "@/assets/images/DASHBOARD_FULL_IMAGE_BORDER.png";

export default function HeroBanner() {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${bg_image.src})`}}>
        <div className="wrap-hero-banner">
            <div className="wrapper-block">
                <div className="content-block">
                    <div className="content">
                        <div className="heading">
                            Turn Your <span className="bold">Website Traffic</span> into Leads
                        </div>
                        <div className="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </div>
                        <div className="button-wrapper">
                            <button className="button-white">
                                Get Started
                            </button>
                            <button className="trans-button">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="image-block">
                <img
                    className="Landing-Hero-dashboard-bg"
                    src={DASHBOARD_FULL_IMAGE_BORDER.src}
                    
                    alt=""
                />
                </div>
            </div>
        </div>
    </div>
  )
}
