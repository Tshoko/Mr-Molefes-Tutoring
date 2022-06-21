import React from 'react'

import './Pricing.css'
import user1 from '../../../images/certificate1.png'

const Pricing = () => {
    return (
        <div className='pricing_container' id='pricing'>
                <h2 className='pricing_header'>Pricing</h2>
                <div className='pricing_card_container'>
                <span className='line'></span>
                <PricingCard/>
                <PricingCard/>
                <PricingCard/>

                </div>
                
                 
        </div>
    )
}
const PricingCard= (props) => {
    return (
        <div class="plan_card">
            <h3 class="plan-title">
            Unpgrading Students
            </h3>
            <img src={user1} className="pricing_card_image" alt='user1'/>
            <div class="plan-cost"><span class="plan-price">R200</span><span class="plan-type">/ Monthly per Subject</span></div>
            <ul class="plan-features">
            <li><i class="ion-checkmark"> </i>Admin Fee R800</li>
            <hr></hr>
            <li><i class="ion-checkmark"> </i>Offer Both Math Or Physisics</li>
            <hr></hr>
            <li><i class="ion-checkmark"> </i>Unlimited Email</li>
            <hr></hr>
            <li><i class="ion-checkmark"> </i>250Gb Monthly Transfer</li>
            <hr></hr>
            <li><i class="ion-checkmark"> </i>24/7 Tech Support</li>
            <hr></hr>
            <li><i class="ion-checkmark"> </i>Daily Backups</li>
            </ul>
            <div class="plan-select"><a href="">Select Plan</a></div>
        </div>
    )
  }


export default Pricing
