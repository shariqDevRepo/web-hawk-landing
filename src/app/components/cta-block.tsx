import React from 'react'
import bg_image from "@/assets/images/cta-bg.png";
import "@/scss/landing/text-with-button.scss";

export default function CtaBlock() {
  return (
    <div className="text-with-button-block">
        <div className="wrap-text-with-button" style={{ backgroundImage: `url(${bg_image.src})`}}>
            <div className="content-block">
                <h2 className="heading">Start with Webhawk.ai today!</h2>
                <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                <div className="button">Get Started</div>
            </div>
        </div>
    </div>
  )
}
