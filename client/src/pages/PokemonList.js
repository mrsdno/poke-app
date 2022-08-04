import React, { useState, useEffect } from "react";
import { fetchPokeApi } from "../utils/PokeApi";


function PokemonList() {

  const [pokemonList, setPokemonList] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // query for searching
  const [query, setQuery] = useState("")

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
  
  return (
    <div>
      <div>
        <input placeholder="Enter Post Title"
          onChange={event => setQuery(event.target.value)} />
      </div>
      <div className="wrapper">
        {pokemonList && pokemonList.filter(pokemon => {
          if (query === "") {
            return pokemon;
          } else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) {
            return pokemon;
          }
        }).map((pokemon) => (
            <div className="pokemonCard" key={pokemon.id}>
              <h1>{pokemon.name}</h1>
              <img src={pokemon.image} />
              <p>height: {pokemon.height}</p>
              <p>weight: {pokemon.weight}</p>
              <ul>
                {" "}
                Types:
                {pokemon?.types?.map((types) => (
                  <li key={types.slot}>{types.type.name}</li>
                ))}
              </ul>
              <p>{pokemon.flavorText}</p>
              <p>color: {pokemon.color}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PokemonList;
