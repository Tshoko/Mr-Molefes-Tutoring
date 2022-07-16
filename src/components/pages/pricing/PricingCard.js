import React from "react";

import "./Pricing.css";
import user1 from "../../../images/certificate1.png";

const PricingCard = (props) => {
  return (
    <div class="plan_card">
      <img src={user1} className="pricing_card_image" alt="user1" />
      <h3 class="plan-title">{props.title}</h3>
      <div class="plan-cost">
        <span class="plan-price">{props.price_plan}</span>
        <span class="plan-type">{props.plan_type}</span>
      </div>

      <p className="card_text">{props.fee}</p>
      <p className="card_text">{props.subjects}</p>
    </div>
  );
};
export default PricingCard;
