import React from "react";
import { Link } from "react-scroll";
import "./PricingCard.css";
const PricingCard = (props) => {
  return (
    <div class="pricing_card">
      <div class="pricingTable-header">
        <h3 class="heading">{props.title}</h3>
        <span class="price-value">
          <div className="pricing_amount">
            <span class="currency">R</span>
            <span className="amount">{props.price_plan}</span>
          </div>

          <span class="month">{props.plan_type}</span>
        </span>
      </div>

      <div class="pricing-content">
        <div class="pricing-content1"></div>
        <ul>
          {props.text_array.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <Link
          className="read"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact Us
        </Link>
        {props.title != "Private Lessons" ? (
          <Link
            className="read"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Schedules
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default PricingCard;
