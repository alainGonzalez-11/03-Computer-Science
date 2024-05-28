/**
 * The function fetches data for all Pokémon from the PokeAPI up to a specified limit and then fetches
 * details for the first 151 Pokémon.
 */
async function fetchAllPokemon() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=2000"; // Adjust the limit if necessary
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  

  
/**
 * The `fetchPokemon` function asynchronously fetches data from a Pokémon API and displays the data,
 * handling errors by showing a message if the Pokémon is not found.
 * @param pokemonAPI - The `pokemonAPI` parameter in the `fetchPokemon` function is the URL of the API
 * endpoint that provides information about a specific Pokémon. This URL is used to fetch data about
 * the Pokémon from the API.
 */
async function fetchPokemon(pokemonAPI) {
    try {
      const response = await fetch(pokemonAPI);
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
  
      const pokemon = await response.json();
      return pokemon;
    } catch (error) {
      
    }
  }


/**
 * The function `viewPokemon` logs a message to the console and redirects the user to a new page with
 * the specified Pokemon name in the URL.
 * @param name - The `viewPokemon` function takes a `name` parameter, which is used to construct a URL
 * that redirects the user to a specific `pokemon.html` page with the `name` parameter in the query
 * string.
 */
  function viewPokemon(name) {
    window.location.href = `pokemon.html?name=${name}`;
  }


  function searchPokemon() {
    let searchText = document.getElementById("search-bar").value;
    window.location.href = `search.html?name=${searchText}`;
  }


  
// Function to fetch evolution chain data for a Pokémon and extract evolution path
async function fetchPokemonEvolutionPath(pokemonName) {
    try {
      // Fetch Pokémon species data to get the evolution chain URL
      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`
      );
      if (!speciesResponse.ok) {
        throw new Error("Pokemon species not found!");
      }
      const speciesData = await speciesResponse.json();
  
      // Get the evolution chain URL from the species data
      const evolutionChainUrl = speciesData.evolution_chain.url;
  
      // Fetch evolution chain data
      const evolutionChainResponse = await fetch(evolutionChainUrl);
      if (!evolutionChainResponse.ok) {
        throw new Error("Evolution chain not found!");
      }
      const evolutionChainData = await evolutionChainResponse.json();
  
      // Function to recursively traverse the evolution chain and collect Pokémon names
      const getEvolutionChain = (chain) => {
        const evolutions = [];
        let currentStage = chain;
  
        while (currentStage) {
          evolutions.push(currentStage.species.name);
          currentStage = currentStage.evolves_to.length
            ? currentStage.evolves_to[0]
            : null;
        }
  
        return evolutions;
      };
  
      // Extract the evolution path
      const evolutionPath = getEvolutionChain(evolutionChainData.chain);
      return evolutionPath;
    } catch (error) {
      console.error("Error fetching evolution path:", error);
    }
  }
  

/**
 * The function `fetchPokemonByName` asynchronously fetches Pokemon data from the PokeAPI based on the
 * provided Pokemon name.
 * @param pokemonName - The `fetchPokemonByName` function is an asynchronous function that takes a
 * `pokemonName` parameter. This function fetches data about a Pokémon from the PokeAPI by making a GET
 * request to the URL `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`. If the
 * @returns The `fetchPokemonByName` function returns a Promise that resolves to the data of a Pokémon
 * with the specified name fetched from the PokeAPI. If the Pokémon is not found or if there is an
 * error during the fetching process, an error message is logged to the console.
 */
  async function fetchPokemonByName(pokemonName) {
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