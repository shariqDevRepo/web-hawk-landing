import React from 'react'
import "@/scss/landing/why-us.scss";
import image from "@/assets/images/why-us.png";

export default function WhyUs() {
  return (
    <div className="why-choose-block">
        <div className="wrap-why-us">
            <div className="content-block">
                <div className="content">
                    <span className="sub-heading">Why Webhawk.ai?</span>
                    <h2 className="heading">Transform your <span className="bold">website traffic into</span> actionable leads</h2>
                    <div className="text">
                        Discover the key benefits of Webhawk.ai and how it can boost your conversions.
                    </div>
                </div>
                <div className="image">
                    <img src={image.src} alt="" /> 
                </div>
            </div>
        </div>
    </div>
    
  )
}
