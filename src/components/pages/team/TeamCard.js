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
        <p className="card_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          molestie erat. Fusce et blandit urna, sagittis sollicitudin tortor.
          Donec facilisis blandit diam et vehicula. Nam pulvinar nulla libero,
          molestie blandit risus vulputate sed. Maecenas et sapien sed elit
          bibendum vulputate quis ut tellus. Vivamus cursus porttitor ipsum, nec
          fermentum quam aliquam in. Pellentesque semper porttitor tortor eu
          viverra. porttitor tortor eu viverra.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
