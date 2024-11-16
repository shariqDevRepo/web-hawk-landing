import React from 'react'
import "@/scss/landing/action-data.scss";
import DASHBOARD_FULL_IMAGE_BORDER from "@/assets/images/action-image.png";
import bg_image from "@/assets/images/action-bg.png";

export default function ActionData() {
  return (
    <div className="action-visitor-data">
        <div className="wrap-action-data">
            <div className="container-block" style={{ backgroundImage: `url(${bg_image.src})`}}>
                <div className="image-block">
                    <img src={DASHBOARD_FULL_IMAGE_BORDER.src} alt="" /> 
                </div>
                <div className="content-block">
                    <span className="sub-heading">See Webhawk.ai in Action</span>
                    <h2 className="heading">A live feed of <span className="bold">visitor data helps you understand</span> the potential.</h2>
                    <div className="text">
                        Here's an example of what you could be seeing in real-time!
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
