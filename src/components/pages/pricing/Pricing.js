import React from "react";

import "./Pricing.css";
import user1 from "../../../images/certificate1.png";
import PricingCard from "./PricingCard";
const data = {
  card1: {
    title: "Upgrading Students",
    price_plan: "R300",
    plan_type: "/ Monthly per Subject",
    fee: "Admin Fee: R800",
    subjects: "Mathematics And Science"
  },
  card2: {
    title: "Extra Classes",
    price_plan: "R300",
    plan_type: "/ Monthly per Subject",
    fee: "Admin Fee:300",
    subjects: "Mathematics And Science"
  },
  card3: {
    title: "Private Lessons",
    price_plan: "R100",
    plan_type: "/ Hour",
    fee: "External Tutoring: R150 Per Hour",
    subjects: "Mathematics And Science"
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
          fee={data.card1.fee}
          subjects={data.card1.subjects}
        />
        <PricingCard
          title={data.card2.title}
          price_plan={data.card2.price_plan}
          plan_type={data.card2.plan_type}
          fee={data.card2.fee}
          subjects={data.card2.subjects}
        />
        <PricingCard
          title={data.card3.title}
          price_plan={data.card3.price_plan}
          plan_type={data.card3.plan_type}
          fee={data.card3.fee}
          subjects={data.card3.subjects}
        />
      </div>
    </div>
  );
};

export default Pricing;
