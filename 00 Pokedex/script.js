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
    for (let index = 0; index < 5; index++) {
      fetchPokemon(data.results[index].url);
    }
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
    displayPokemonData(pokemon);
  } catch (error) {
    document.getElementById(
      "pokemonData"
    ).innerHTML = `<p>${error.message}</p>`;
  }
}

/**
 * The function `displayPokemonData` takes a Pokemon object as input and dynamically creates a card
 * displaying the Pokemon's name, image, ID, and types.
 * @param pokemon - The `displayPokemonData` function takes a `pokemon` object as a parameter. This
 * object should have the following structure:
 */
function displayPokemonData(pokemon) {
  const element = getElementStyle(pokemon.types[0].type.name);
  const pokemonDataDiv = document.getElementById("pokemonCards");

  let types = '';
  
    for (let i = 0; i < pokemon.types.length; i++) {
        elementType = getElementStyle(pokemon.types[i].type.name);
        types+=`<img src="${elementType.logoColor}" alt="${pokemon.name} type" class="TypeLogo">`
        types+=`<p> ${capitalizeFirstLetter(pokemon.types[i].type.name)} </p>`
        
    }


  pokemonDataDiv.innerHTML += `
        <article class='pokemonCard'  style="background-color: ${element.cardColor}" id="card_${pokemon.name}" onClick='viewPokemon("${pokemon.name}")'>
            <div class='cardImage' style="background-color: ${element.imageColor}" >
                <img src="${element.logoColor}" alt="${pokemon.name} element" class="ElementCardImage">
                <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}" class="PokemonCardImage">
                <p class='PokemonNumber'> # ${String(pokemon.id).padStart(3, '0')} </p>
            </div>
            <h2 >${pokemon.name.toUpperCase()}</h2>
            <div class = 'typeSection'> 
                ${types}
            </div>
        </article>
    `;
}

function viewPokemon(name) {
    console.log('pressed');
    window.location.href = `pokemon.html?name=${name}`;
}

/**
 * The function `capitalizeFirstLetter` takes a string as input and returns the same string with the
 * first letter capitalized.
 * @param string - The `capitalizeFirstLetter` function takes a string as input and capitalizes the
 * first letter of that string.
 * @returns The `capitalizeFirstLetter` function takes a string as input and returns the same string
 * with the first letter capitalized.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * The function `getElementStyle` takes an element name as input and returns an object containing style
 * properties such as color, logoColor, cardColor, and imageColor based on the element type.
 * @param element - The `getElementStyle` function takes an element as a parameter and returns an
 * object containing style properties based on the element provided. The element can be a type of
 * Pokemon, such as "water", "fire", "grass", etc.
 * @returns The function `getElementStyle` returns an object containing the following properties:
 * - `color`: A color code based on the element provided (e.g., "#5090D6" for "water").
 * - `logoColor`: A string representing the path to an image file based on the element provided (e.g.,
 * "images//color_water.svg").
 * - `cardColor`: A color code with added
 */
function getElementStyle(element) {
  let style = {};
  switch (element.toLowerCase()) {
    case "water":
      style.color = "#5090D6";
      break;
    case "dragon":
      style.color = "#0B6DC3";
      break;
    case "electric":
      style.color = "#F4D23C";
      break;
    case "fairy":
      style.color = "#EC8FE6";
      break;
    case "ghost":
      style.color = "#5269AD";
      break;
    case "fire":
      style.color = "#FF9D55";
      break;
    case "ice":
      style.color = "#73CEC0";
      break;
    case "grass":
      style.color = "#63BC5A";
      break;
    case "bug":
      style.color = "#91C12F";
      break;
    case "fighting":
      style.color = "#CE416B";
      break;
    case "normal":
      style.color = "#919AA2";
      break;
    case "dark":
      style.color = "#5A5465";
      break;
    case "steel":
      style.color = "#5A8EA2";
      break;
    case "rock":
      style.color = "#C5B78C";
      break;
    case "psychic":
      style.color = "#FA7179";
      break;
    case "ground":
      style.color = "#D97845";
      break;
    case "poison":
      style.color = "#B567CE";
      break;
    case "flying":
      style.color = "#89AAE3";
      break;
    default:
      element = "normal";
      style.color = "#919AA2";
      break;
  }
  style.logoColor = `images//color_${element.toLowerCase()}.svg`;
  style.cardColor = style.color + "50";
  style.imageColor = style.color + "CC";
  return style;
}

fetchAllPokemon();
