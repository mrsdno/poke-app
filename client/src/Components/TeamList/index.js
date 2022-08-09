import React from "react";
import { Link } from "react-router-dom";

const ThoughtList = ({ teams }) => {
  if (!teams.length) {
    return <h3>No teams yet!</h3>;
  }

    console.log(teams);
  return (
    <div>
      <h3>Hey!</h3>
      {teams &&
        teams.map((team) => (
          // key prop to internally track which data needs to be re-rendered if something changes
          <div key={team.id} className="carb mb-3">
            <p className="card-header">
              {team.teamName} something is here!
            </p>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
