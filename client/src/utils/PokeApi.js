export const fetchPokeApi = (query) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
}