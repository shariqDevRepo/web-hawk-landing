import React from 'react'
import "@/scss/how-it-works/how-image-blurb.scss";
import Lottie from "lottie-react";
import bg_border from "@/assets/images/gradiant-purple.png";
import script_gif from "@/assets/lotties/script.json";
import timeline_gif from "@/assets/lotties/timeline.json";
import popup_gif from "@/assets/lotties/popup.json";

export default function ImageBlurb() {
  return (
        <div className="how-image-blurb-block">
            <div className="wrap-image-blurb">
            
                
                <div className="content-wrapper">
                <div className="image-block">
                            <div className="blur-filter">
                                <img
                                        className="purple-radius"
                                        src={bg_border.src}
                                    
                                        alt=""
                                    /> 
                                        <Lottie
                                    width="100%"
                                    height="100%"
                                    className="lottie-animation"
                                    animationData={script_gif}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="content">
                                <div className="wrap-top">
                                    <h2 className="heading">Put <span className="bold">Our Script to</span> Work</h2>
                                    <div className="description">
                                            We provide you with a simple script to embed on your website. This script acts like a digital ‘hawk,’ scanning your site’s visitors in real-time. The moment someone lands on your page, Webhawk.ai gathers key insights about who they are and what they’re interested in.
                                    </div>
                                </div>
                               
                                <div className="button">Get Started</div>
                            </div>
                        </div>
                       
                </div>
                <div className="content-wrapper">
                <div className="image-block">
                            <div className="blur-filter">
                                <img
                                        className="purple-radius"
                                        src={bg_border.src}
                                    
                                        alt=""
                                    /> 
                                        <Lottie
                                    width="100%"
                                    height="100%"
                                    className="lottie-animation"
                                    animationData={timeline_gif}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="content">
                                <div className="wrap-top">
                                    <h2 className="heading">Get <span className="bold">the Full Picture</span></h2>
                                    <div className="description">
                                        As visitors browse your site, Webhawk.ai captures valuable information, including names and contact details, building a comprehensive profile of your hottest prospects.
                                    </div>
                                </div>
                                <div className="button">Get Started</div>
                            </div>
                        </div>
                     
                </div>

                <div className="content-wrapper">
                <div className="image-block">
                            <div className="blur-filter">
                                <img
                                        className="purple-radius"
                                        src={bg_border.src}
                                    
                                        alt=""
                                    /> 
                                        <Lottie
                                    width="100%"
                                    height="100%"
                                    className="lottie-animation"
                                    animationData={popup_gif}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="content">
                                <div className="wrap-top">
                                    <h2 className="heading">Turn <span className="bold">Insights Into</span> Action</h2>
                                    <div className="description">
                                        With detailed visitor profiles at your fingertips, it’s time to take action. Use these insights for targeted marketing campaigns, personalized outreach, or direct engagement. Webhawk.ai empowers you to connect with the right leads, at the right time.
                                    </div>
                                </div>
                               
                                <div className="button">Get Started</div>
                            </div>
                        </div>
                       
                </div>

            </div>
        </div>
  )
}
