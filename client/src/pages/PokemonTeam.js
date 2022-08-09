import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TEAM } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

import "./pages.css";

function PokemonTeam() {
  const [teamName, setText] = useState("");
  const [addTeam, { error }] = useMutation(ADD_TEAM);
  const { data: userData } = useQuery(QUERY_ME);
  const [pokemons, setPokemons] = useState([1, 2, 3, 4, 5, 6]);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
    }
  };

  const handleAddTeam = async (event) => {
    event.preventDefault();
    console.log(userData);

    try {
      const { data } = await addTeam({
        variables: { teamName, userData },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="PokemonTeam">
      <div className="container-v teambox">
        <form id="add-team" className="form-addteam" onSubmit={handleAddTeam}>
          <input
            id="team-name"
            className="team-name"
            value={teamName}
            placeholder="team name"
            onChange={handleChange}
          ></input>
          <button className="btn-1" type="submit" id="add-team">
            Add Team
          </button>
        </form>
        <div className="container-h ">
          {pokemons.map((pokemon, index) => {
            if (index < 3) {
              return (
                <div className="pokemon card">
                 
                  <img
                    className="card-img-top team-image"
                    src=""
                    alt={`Card ${index + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">
                      name {index + 1}
                    </h5>
                    <div className="card-text">
                      <p>
                        <b>Height:</b> decimetres
                      </p>
                      <p>
                        <b>Weight:</b> hectograms
                      </p>
                      <p>
                        <b>Type:</b> Dark{" "}
                      </p>
                    </div>
                  </div>
                  <div className="pokemon-card-buttonContainer button">
                    <button
                      className="btn-2-s delete-pokemon"
                      type="submit"
                      id="delete-pokemon"
                      data-id=""
                    >
                      Delete Pokemon
                    </button>

                    <button
                      className="btn-1-s  add-pokemon"
                      type="submit"
                      id="add-pokemon"
                      onClick={() => {
                        window.location.assign("/pokemonlist");
                      }}
                    >
                      Choose your pokemon
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="container-h ">
          {pokemons.map((pokemon, index) => {
            if (index > 2) {
              return (
                <div className="pokemon card">
                  
                  <img
                    className="card-img-top team-image"
                    src=""
                    alt={`Card ${index + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">
                      name {index + 1}
                    </h5>
                    <div className="card-text">
                      <p>
                        <b>Height:</b> decimetres
                      </p>
                      <p>
                        <b>Weight:</b> hectograms
                      </p>
                      <p>
                        <b>Type:</b> Dark{" "}
                      </p>
                    </div>
                  </div>
                  <div className="pokemon-card-buttonContainer button">
                    <button
                      className="btn-2-s delete-pokemon"
                      type="submit"
                      id="delete-pokemon"
                      data-id=""
                    >
                      Delete Pokemon
                    </button>

                    <button
                      className="btn-1-s  add-pokemon"
                      type="submit"
                      id="add-pokemon"
                      onClick={() => {
                        window.location.assign("/pokemonlist");
                      }}
                    >
                      Choose your pokemon
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonTeam;
