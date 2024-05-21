/**
 * The function `displayPokemonData` generates HTML code to display Pokemon data, including name,
 * image, type, and ID, with optional small card styling.
 * @param pokemon - The `displayPokemonData` function takes in a `pokemon` object and an optional
 * `small` boolean parameter. The `pokemon` object contains information about a specific Pokemon, such
 * as its name, types, id, and sprites.
 * @param [small=false] - The `small` parameter in the `displayPokemonData` function is a boolean
 * parameter that determines whether to display a small version of the Pokemon card. If `small` is set
 * to `true`, the function will add the "Small" class to the cardType, making the card smaller in size
 * @returns The `displayPokemonData` function returns an HTML card element representing a Pokemon with
 * its name, image, number, and types. The card's style and content are based on the data provided in
 * the `pokemon` object. If the `small` parameter is set to `true`, a smaller version of the card is
 * generated.
 */
function displayPokemonData(pokemon, small = false) {
  const element = getElementStyle(pokemon.types[0].type.name);

  let types = "";
  let cardType = "pokemonCard";
  if (small) {
    cardType += "Small";
  }

  for (let i = 0; i < pokemon.types.length; i++) {
    elementType = getElementStyle(pokemon.types[i].type.name);
    types += `<img src="${elementType.logoColor}" alt="${pokemon.name} type" class="TypeLogo">`;
    types += `<p> ${capitalizeFirstLetter(pokemon.types[i].type.name)} </p>`;
  }

  let PokemonCard = `
          <article class='${cardType}'  style="background-color: ${
    element.cardColor
  }" id="card_${pokemon.name}" onClick='viewPokemon("${pokemon.name}")'>
              <div class='cardImage' style="background-color: ${
                element.imageColor
              }" >
                  <img src="${element.logoColor}" alt="${
    pokemon.name
  } element" class="ElementCardImage">
                  <img src="${pokemon.sprites.other.home.front_default}" alt="${
    pokemon.name
  }" class="PokemonCardImage">
                  <p class='PokemonNumber'> # ${String(pokemon.id).padStart(
                    3,
                    "0"
                  )} </p>
              </div>
              <h2 >${pokemon.name.toUpperCase()}</h2>
              <div class = 'typeSection'> 
                  ${types}
              </div>
          </article>
      `;

  return PokemonCard;
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
