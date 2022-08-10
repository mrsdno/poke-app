import React, { useState, useEffect } from "react";
import { fetchPokeApi } from "../../utils/PokeApi";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_POKEMON } from "../../utils/mutations";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import { QUERY_ME, QUERY_TEAMS } from "../../utils/queries";




function PokemonList(props) {
  const [pokemonList, setPokemonList] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // query for searching
  const [queryName, setQueryName] = useState("");
  const [queryColor, setQueryColor] = useState("");
  const { loading, data: userData } = useQuery(QUERY_ME);
  const { loadingTeams, data: teams } = useQuery(QUERY_TEAMS, {
    variables: { username: userData?.me.username },
  });
  // mutation to add pokemon
  const [addPokemon, { error }] = useMutation(ADD_POKEMON, {
    update(cache, { data: { addPokemon } }) {
      // could not exist yet, so wrap in a try/catch
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });

        // update team array's cache
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, teams: [...me.teams, addPokemon] } },
        });
      } catch (e) {
        console.warn("First interation by user");
      }

      // update thought array's cache
      const { teams } = cache.readQuery({
        query: QUERY_TEAMS,
        variables: { username: userData?.me.username },
      });
      cache.writeQuery({
        query: QUERY_TEAMS,
        variables: { username: userData?.me.username },
        data: { teams: [ ...teams] },
      });
    },
  });

  const location = useLocation();
  const { teamIdArray } = location.state;

  const teamId = JSON.stringify(teamIdArray).replace(/['"]+/g, "");

  // do the pokemon api calls and then display them once loaded
  async function handleGetPokemon() {
    const pokemon = await fetchPokeApi();
    setPokemonList(pokemon);
    setIsLoaded(true);
  }

  useEffect(() => {
    handleGetPokemon();
  }, []);

  if (!isLoaded) {
    return (
      <div className="center">
        <div className="ball"></div>
      </div>
    );
  }

  async function handleAddPokemon(
    name,
    height,
    weight,
    description,
    type,
    image
  ) {
    try {
      const { data } = await addPokemon({
        variables: {
          teamId: teamId,
          name: name,
          height: height,
          weight: weight,
          description: description,
          image: image,
          type: type,
        },
      });
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <div className="pokemon-list">
      <div>
        <input
          placeholder="Search by name..."
          onChange={(event) => setQueryName(event.target.value)}
        />
        <select
          name="color"
          id="color"
          onChange={(event) => setQueryColor(event.target.value)}
        >
          <option value="">Select Color</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="gray">Gray</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className="wrapper">
        {pokemonList &&
          pokemonList
            .filter((pokemon) => {
              if (queryName === "") {
                return pokemon;
              } else if (
                pokemon.name.toUpperCase().includes(queryName.toUpperCase())
              ) {
                return pokemon;
              }
            })
            .filter((pokemon) => {
              if (queryColor === "") {
                return pokemon;
              } else if (
                pokemon.color.toUpperCase().includes(queryColor.toUpperCase())
              ) {
                return pokemon;
              }
            })
            .map((pokemon) => (
              <div className="pokemonCard" key={pokemon.id}>
                <h1 key={pokemon.name}>{pokemon.name}</h1>
                <div className="card-wrapper">
                  <img key={pokemon.img} src={pokemon.image} />
                  <div className="text-wrapper">
                    <p key={pokemon.height}>Height: {pokemon.height} inches</p>
                    <p key={pokemon.weight}>Weight: {pokemon.weight} lbs</p>
                    <p key={pokemon.color}>Color: {pokemon.color.charAt(0).toUpperCase() + pokemon.color.slice(1)}</p>
                    <p style={{display: "flex",justifyContent: "space-between"}}>
                      Types: 
                      {pokemon?.pokeTypes?.map((types) => (
                        <p key={types} style={{padding: "0px 2px"}}>{types.charAt(0).toUpperCase() + types.slice(1)}</p>
                      ))}
                    </ul>
                    <p className="description" key={pokemon.flavorText}>
                      {pokemon.flavorText}
                    </p>
                  </div>
                </div>
                  <Link
                    to="/pokemonteam"
                  >
                    <button
                      onClick={() => {
                        handleAddPokemon(
                          pokemon.name,
                          pokemon.height,
                          pokemon.weight,
                          pokemon.flavorText,
                          pokemon.pokeTypes,
                          pokemon.image
                        );
                      }}
                    >
                      Add {pokemon.name} to Team
                    </button>
                  </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PokemonList;
