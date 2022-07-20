import React from "react";
import user1 from "../../../images/Akanyang.jpg";
import "./TeamCard.css";
const TeamCard = (props) => {
  return (
    <div className="team_card">
      <div className="team_image_container">
        <img src={user1} class="card_image" />
      </div>
      <div className="card_body">
        <h3 className="card_title">{"Mr Molefe"}</h3>
        <p className="card_description">7 years of turoing experience</p>
      </div>
    </div>
  );
};

export default TeamCard;
