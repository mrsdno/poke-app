import React from "react";

import '../TeamList/style.css';

const AllTeams = ({ teams }) => {
    
    if(!teams.length) {
        return <p className="no-teams">Where did all the teams go?</p>;
    };

    console.log(teams);

    return(
        <div>
            <h1>Check out all the teams our users have made!</h1>
            { teams && teams.map((team) => (
                <div key={team.id} className="pokemon">
                    <h2 className="team-name">{team.teamName}</h2>
                    <div className="pokemon-wrapper">
                        {team.pokemon &&
                            team.pokemon.map((pokemon) => (
                                <div className="each-pokemon">
                                    <h2 className="pokemon-name">{pokemon.name}</h2>
                                    <img
                                        className="card-img-top team-image"
                                        src={pokemon.image}
                                        alt="Card1"
                                    ></img>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AllTeams;