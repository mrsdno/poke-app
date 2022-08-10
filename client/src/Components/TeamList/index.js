import React, { useState } from "react";
import { Link } from "react-router-dom";

import './style.css'

const TeamList = ({ teams }) => {
    
  if (!teams.length) {
    return <p className="no-teams">No teams yet!</p>;
  }

  console.log(teams);

  return (
    <div>
      <h1>My Teams</h1>
      {/* map over the team array that was passed from PokemonTeam page */}
      {teams &&
        teams.map((team) => (
          <div key={team.id} className="pokemon">
            <h1 className="team-name">{team.teamName}</h1>
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
                    <div className="card-body">
                      <p className="card-text">
                        Height: {pokemon.height} decimetres
                        <br />
                        Weight: {pokemon.weight} hectograms
                        <br />
                                Type: {pokemon.type && pokemon.type.map((type) => <p>{type}</p>)}
                      </p>
                    </div>
                    {/* <button
                    className="btn-2-s delete-pokemon"
                    type="submit"
                    id="delete-pokemon"
                    data-id=""
                    onClick={() => console.log(team._id)}
                  >
                    Delete Pokemon
                  </button> */}
                  </div>
                ))}
            </div>
            <div className="choose-pokemon">
              {team.pokemon.length < 6 ? (
                <Link to={"/pokemonlist"} state={{ teamIdArray: team._id }}>
                  Choose Your Pokémon
                </Link>
              ) : (
                <p>❌ Six Pokemon Max Per Team</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TeamList;
