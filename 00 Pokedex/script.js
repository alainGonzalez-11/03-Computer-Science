function initialice() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search-bar");
  if (search == null) {
    /* This JavaScript code snippet is making use of promises to fetch data about Pokemon. Here's a
breakdown of what it's doing: */
    fetchAllPokemon().then(async (pokemonData) => {
      const pokemonDataDiv = document.getElementById("pokemonCards");
      for (let index = 0; index < 25; index++) {
        await fetchPokemon(pokemonData.results[index].url).then((pokemon) => {
          pokemonDataDiv.innerHTML += displayPokemonData(pokemon);
        });
      }
    });
  } else if (search !== null) {
    let content = document.getElementById("content");
    content.setAttribute("id", "searchContent");
    content.innerHTML = `<aside id="filters"></aside><aside id="searchResults"> </aside>`;

    fetchAllPokemon().then(async (pokemonData) => {
      const pokemonDataDiv = document.getElementById("searchResults");
      const POKEMON_NUMBER = pokemonData.results.length;
      let searchIndex = 0;
      let resultsIndex = 0;

      while (resultsIndex < 25 && searchIndex < POKEMON_NUMBER) {
        await fetchPokemon(pokemonData.results[searchIndex].url).then(
          (pokemon) => {
            if (pokemon.name.includes(search)) {
              pokemonDataDiv.innerHTML += displayPokemonData(pokemon);
              resultsIndex++;
            }
          }
        );
        searchIndex++;
      }
    });
  }
}

initialice();


