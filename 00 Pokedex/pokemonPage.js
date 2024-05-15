function initialice() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const pokemon = fetchPokemonData(name).then(pokemon => {
    console.log(pokemon)
    addPokedex(pokemon);
    // You can access specific attributes like pokemon.name, pokemon.types, etc.
  })
  .catch(error => console.error('Error:', error));
}

async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Pokemon not found!");
    }
    const pokemonData = await response.json();
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

function addPokedex(pokemon) {
    let area = document.getElementById('PokedexArea');
    console.log(pokemon)
    area.innerHTML += `<img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}" class="PokedexImage">`;
}

initialice();