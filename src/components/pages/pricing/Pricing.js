import React from "react";

import "./Pricing.css";
import PricingCard from "./PricingCard";
const data = {
  card1: {
    title: "Upgrading Students",
    price_plan: "300",
    plan_type: "Monthly, per Subject",
    text_array: [
      "Admin Fee: 800",
      "Three 2 hour classes per week",
      "Grades: 8 to 12",
      "Subject: Mathematics",
      "Subject: Physical Science"
    ]
  },
  card2: {
    title: "Extra Classes",
    price_plan: "300",
    plan_type: "Monthly per Subject",
    text_array: [
      "Admin Fee: 200",
      "Three 2 hour classes per week",
      "Grades: 8 to 12",
      "Subject: Mathematics",
      "Subject: Physical Science"
    ]
  },
  card3: {
    title: "Private Lessons",
    price_plan: "100",
    plan_type: "Per Hour ",
    text_array: [
      "External Tutoring: R150 Per Hour",
      "Grades: 8 to 12",
      "Subject: Mathematics",
      "Subject: Physical Science"
    ]
  }
};
const Pricing = () => {
  return (
    <div className="pricing_container" id="pricing">
      <h2 className="pricing_header">Pricing</h2>
      <div className="pricing_card_container">
        <span className="line"></span>

        <PricingCard
          title={data.card1.title}
          price_plan={data.card1.price_plan}
          plan_type={data.card1.plan_type}
          text_array={data.card1.text_array}
        />
        <PricingCard
          title={data.card2.title}
          price_plan={data.card2.price_plan}
          plan_type={data.card2.plan_type}
          text_array={data.card2.text_array}
        />
        <PricingCard
          title={data.card3.title}
          price_plan={data.card3.price_plan}
          plan_type={data.card3.plan_type}
          text_array={data.card3.text_array}
        />
      </div>
    </div>
  );
};

export default Pricing;
