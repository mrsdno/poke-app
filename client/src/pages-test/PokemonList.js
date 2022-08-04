import React, { useState, useEffect } from "react";
import { fetchPokeApi, fetchPokemonData } from "../utils/PokeApi";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState("");

  async function handleGetPokemon() {
    const pokemon = await fetchPokeApi();
    setPokemonList(pokemon);

    console.log(pokemonList);
  }

useEffect(() => {
  handleGetPokemon();
}, []);

  return (
    <div>
      <div className="wrapper">
        {pokemonList &&
          pokemonList?.map((pokemon) => (
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
};

export default PokemonList;
