import React from "react";
import { Link } from "react-router-dom";

const TeamList = ({ teams }) => {
    
  if (!teams.length) {
    return <h3>No teams yet!</h3>;
  }
    let pokemonList = teams.pokemon || []

    console.log(teams);

    function handleChoosePokemon(team_id) {
        <Link to={{
            pathname: '/pokemonlist',
            state: team_id
        }}>
            </Link>
        {/* window.location.assign(`/pokemonlist/${team_id}`); */}
    }
  return (
    <div>
      {teams &&
        teams.map((team) => (
          // key prop to internally track which data needs to be re-rendered if something changes
          <div key={team.id} className="pokemon">
            <p className="card-header">{team.teamName}</p>

            {team.pokemon &&
              team.pokemon.map((pokemon) => (
                <div>
                  <p>{pokemon.name}</p>
                  <img
                    className="card-img-top team-image"
                    src={pokemon.image}
                    alt="Card1"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">
                      {pokemon.name}
                    </h5>
                    <p className="card-text">
                      Height: {pokemon.height} decimetres Weight:{" "}
                      {pokemon.weight} hectograms Type: {pokemon.type}
                    </p>
                  </div>
                  <button
                    className="btn-2-s delete-pokemon"
                    type="submit"
                    id="delete-pokemon"
                    data-id=""
                    onClick={() => console.log(team._id)}
                  >
                    Delete Pokemon
                  </button>
                </div>
              ))}

                <Link
                    to={"/pokemonlist"}
                state = { { teamIdArray: team._id } }
              
            >
              Choose Your Pokmon
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TeamList;
