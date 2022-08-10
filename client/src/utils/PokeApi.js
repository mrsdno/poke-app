const pokemonData = [];

// first API call to get list of pokemon names and url
export async function fetchPokeApi() {
  const firstApiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151`
  );
  const firstApiData = await firstApiResponse.json();

  for (let i = 0; i < firstApiData.results.length; i++) {
    pokemonData.push({ name: firstApiData.results[i]?.name });

    // make second api call to the url provided in first and set desired data in our object
    const secondApiUrl = firstApiData.results[i]?.url;
    const secondApiResponse = await fetch(secondApiUrl);
    const secondApiData = await secondApiResponse.json();

    pokemonData[i].id = secondApiData.id;
    pokemonData[i].image = secondApiData.sprites.front_default;
    pokemonData[i].height = secondApiData.height;
    pokemonData[i].weight = secondApiData.weight;
    const typesArray = secondApiData.types;
    let typesObject = [];

    for (let y = 0; y < typesArray.length; y++) {
      if (typesArray[y].type) {
        typesObject.push(typesArray[y].type.name);
      }
    }

    pokemonData[i].pokeTypes = typesObject;
    
    // make third api call to the url provided in second and set desired data in the object
    const thirdApiUrl = secondApiData.species.url;
    const thirdApiResponse = await fetch(thirdApiUrl);
    const thirdApiData = await thirdApiResponse.json();


    pokemonData[i].flavorText = thirdApiData.flavor_text_entries[0].flavor_text;
    pokemonData[i].color = thirdApiData.color.name;
    
    }
  console.log(pokemonData);
  return pokemonData;
}
