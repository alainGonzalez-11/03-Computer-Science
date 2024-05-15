async function fetchAllPokemon() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=2000"; // Adjust the limit if necessary

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }

    const data = await response.json();
    for (let index = 0; index < 100; index++) {
      fetchPokemon(data.results[index].url);
    }
  } catch (error) {
    console.log(error.message);
  }
}

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

function displayPokemonData(pokemon) {
  console.log(pokemon);
  const element = getElementStyle(pokemon.types[0].type.name);
  const pokemonDataDiv = document.getElementById("pokemonCards");

  pokemonDataDiv.innerHTML += `
        <article class='pokemonCard'  style="background-color: ${
          element.cardColor
        }">
            <div class='cardImage' style="background-color: ${
              element.imageColor
            }">
                <img src="${element.logoColor}" alt="${
    pokemon.name
  } element" class="ElementCardImage">
                <img src="${pokemon.sprites.other.home.front_default}" alt="${
    pokemon.name
  }" class="PokemonCardImage">
            </div>
            <h2>${pokemon.name}</h2>
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Type: ${pokemon.types
              .map((typeInfo) => typeInfo.type.name)
              .join(", ")}</p>
        </article>
    `;
}

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
