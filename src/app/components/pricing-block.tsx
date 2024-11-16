import React from 'react'
import "@/scss/landing/pricing-block.scss";
import bg_border from "@/assets/images/prcing-bg.png";

export default function PricingBlock() {
  return (
        <div className="pricing-block">
            <div className="wrap-pricing-block">
                <h2 className="main-heading">Choose <span className="bold">the Plan That</span> Fits Your <span className="bold">Business</span></h2>
                <div className="main-text">
                    Flexible pricing options for businesses of all sizes.
                    Get started with the plan that works for you.
                </div>
                <div className="pricing-boxes">
                <div className="pricing-box">
                    <img
                        className="purple-radius"
                        src={bg_border.src}
                        alt=""
                        /> 
                        <div className="box">
                            <h3 className="heading">Basic Tier</h3>
                            <div className="text">Simplicity and accessibility for small businesses.</div>
                            <div className="price">
                                <div className="price-month"><span className="bold">$399/</span>month</div>
                                <div className="price-year">$4,309/year (10% discount)</div>
                            </div>
                            <ul className='items'>
                                <li className='item'>5,000 matches per month</li>
                                <li className='item'>$0.07 per match over 5,000</li>
                            </ul>
                            <div className="button">
                                Get Started
                            </div>
                        </div>
                           
                    </div>
                    <div className="pricing-box large">
                    <img
                        className="purple-radius"
                        src={bg_border.src}
                        alt=""
                        /> 
                        <div className="box">
                            <h3 className="heading">Pro Tier</h3>
                            <div className="text">Designed for growing businesses to scale.</div>
                            <div className="price">
                                <div className="price-month"><span className="bold">$699/</span>month</div>
                                <div className="price-year">$7,549/year (10% discount)</div>
                            </div>
                            <ul className='items'>
                                <li className='item'>1,500 matches per month</li>
                                <li className='item'>$0.08 per match over 1,500</li>
                            </ul>
                            <div className="button">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className="pricing-box">
                    <img
                        className="purple-radius"
                        src={bg_border.src}
                        alt=""
                        /> 
                        <div className="box">
                            <h3 className="heading">Enterprise Tier</h3>
                            <div className="text">Advanced capabilities for large enterprises.</div>
                            <div className="price">
                                <div className="price-month"><span className="bold">$1,199/</span>month</div>
                                <div className="price-year">$12,949/year (10% discount)</div>
                            </div>
                            <ul className='items'>
                                <li className='item'>5,000 matches per month</li>
                                <li className='item'>$0.07 per match over 5,000</li>
                            </ul>
                            <div className="button">
                                Get Started
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
