import React from "react";

import "./Team.css";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="team" id="team">
      <h2>Team</h2>
      <div className="team_card_container">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
