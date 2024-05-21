/* This JavaScript code snippet is making use of promises to fetch data about Pokemon. Here's a
breakdown of what it's doing: */
fetchAllPokemon().then((pokemonData) => {
  const pokemonDataDiv = document.getElementById("pokemonCards");
  for (let index = 0; index < 25; index++) {
    console.log(pokemonData.results[index].url);
    fetchPokemon(pokemonData.results[index].url).then((pokemon) => {
      pokemonDataDiv.innerHTML += displayPokemonData(pokemon);
    });
  }
});
