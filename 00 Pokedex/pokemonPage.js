function initialice() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const pokemon = fetchPokemonData(name)
    .then((pokemon) => {
      addPokedex(pokemon);
      // You can access specific attributes like pokemon.name, pokemon.types, etc.
    })
    .catch((error) => console.error("Error:", error));
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
  let area = document.getElementById("PokedexArea");
  area.innerHTML += `<img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}" class="PokedexImage">`;

  const detailsDiv = document.getElementById("detailsArea");

  /* The code block is creating a section in the HTML document to display the types of a Pokemon. */
  let types = '<section id="TypesArea">';

  for (let i = 0; i < pokemon.types.length; i++) {
    let element = getElementStyle(pokemon.types[i].type.name);
    types += `<div class='typeButton' style="background-color: ${element.cardColor}">`;
    types += `<img src="${element.logoColor}" alt="${pokemon.name} type" class="TypeLogoPokedex">`;
    types += `<p> ${capitalizeFirstLetter(pokemon.types[i].type.name)} </p>`;
    types += `</div>`;
  }
  types += "</section>";

  let abilities = "";
  for (let i = 0; i < pokemon.abilities.length; i++) {
    abilities += `<div class="abilityButton">${capitalizeFirstLetter(
      pokemon.abilities[i].ability.name
    )}</div>`;
  }

  /* The code block is creating a section in the HTML document to display general statistics
about a Pokemon.*/
  let = generalStats = '<section id="GeneralStatsArea">';
  generalStats += `<div class="statZone">`;
  generalStats += `<h3 class="zoneTitle">Weight</h3>`;
  generalStats += `<img src="images/weight.svg" class="zoneLogo"/>`;
  generalStats += `<p class="zoneValue">${pokemon.weight / 10} kg</p>`;
  generalStats += "</div>";

  generalStats += `<div class="statZone">`;
  generalStats += `<h3 class="zoneTitle">Height</h3>`;
  generalStats += `<img src="images/size.svg" class="zoneLogo"/>`;
  generalStats += `<p class="zoneValue">${pokemon.height / 10} m</p>`;
  generalStats += "</div>";

  generalStats += `<div class="statZone">`;
  generalStats += `<h3 class="zoneTitle">Abilities</h3>`;
  generalStats += abilities;
  generalStats += "</div>";
  generalStats += "</section>";

  
  let mainSection = '<div id="Evolutions"></div>';


  detailsDiv.innerHTML += `
    <h1>${pokemon.name.toUpperCase()}</h1>
    ${(types)}
    ${generalStats}
    ${mainSection}
  `;



  fetchPokemonEvolutionPath(pokemon.name)
  .then(evolutionPath => {
    evolutionPath.forEach(newPokemon => {


      const newPokemonfiles = fetchPokemonData(newPokemon)
    .then((newPokemon) => {
      console.log(newPokemon);
      //----------------------------------------------------------------
      //----------------------------------------------------------------
      //----------------------------------------------------------------
      document.getElementById('Evolutions').innerHTML+=displayPokemonData(newPokemon);

      // You can access specific attributes like pokemon.name, pokemon.types, etc.
    })
    .catch((error) => console.error("Error:", error));
    });
  })
  .catch(error => console.error('Error:', error));
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



function viewPokemon(name) {
  console.log('pressed');
  window.location.href = `pokemon.html?name=${name}`;
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
initialice();



// Function to fetch evolution chain data for a Pokémon and extract evolution path
async function fetchPokemonEvolutionPath(pokemonName) {
  try {
    // Fetch Pokémon species data to get the evolution chain URL
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`);
    if (!speciesResponse.ok) {
      throw new Error('Pokemon species not found!');
    }
    const speciesData = await speciesResponse.json();

    // Get the evolution chain URL from the species data
    const evolutionChainUrl = speciesData.evolution_chain.url;

    // Fetch evolution chain data
    const evolutionChainResponse = await fetch(evolutionChainUrl);
    if (!evolutionChainResponse.ok) {
      throw new Error('Evolution chain not found!');
    }
    const evolutionChainData = await evolutionChainResponse.json();

    // Function to recursively traverse the evolution chain and collect Pokémon names
    const getEvolutionChain = (chain) => {
      const evolutions = [];
      let currentStage = chain;

      while (currentStage) {
        evolutions.push(currentStage.species.name);
        currentStage = currentStage.evolves_to.length ? currentStage.evolves_to[0] : null;
      }

      return evolutions;
    };

    // Extract the evolution path
    const evolutionPath = getEvolutionChain(evolutionChainData.chain);
    return evolutionPath;
  } catch (error) {
    console.error('Error fetching evolution path:', error);
  }
}


function displayPokemonData(pokemon) {
  const element = getElementStyle(pokemon.types[0].type.name);

  let types = '';
  
    for (let i = 0; i < pokemon.types.length; i++) {
        elementType = getElementStyle(pokemon.types[i].type.name);
        types+=`<img src="${elementType.logoColor}" alt="${pokemon.name} type" class="TypeLogo">`
        types+=`<p> ${capitalizeFirstLetter(pokemon.types[i].type.name)} </p>`
        
    }


  let PokemonCard = `
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

    return PokemonCard;
}