import React, { useState, useEffect } from 'react';
import { fetchPokeApi } from '../utils/PokeApi';


const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState('');

    const handleGetPokemon = async query => {
        try {
            const response = await fetchPokeApi(query);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const fetchedPokemonList = await response.json();

            setPokemonList(fetchedPokemonList);

            console.log(pokemonList);
        } catch (err) {
            console.log(err);
        }
        
    }

    return (
      <div>
        <button type="button" onClick={handleGetPokemon}>
          SUBMIT
        </button>
      </div>
    );
    }

export default PokemonList;