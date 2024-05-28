/**
 * The `initialize` function retrieves a Pokemon's name from the URL parameters, fetches the
 * corresponding Pokemon data, and adds it to the Pokedex.
 */
function initialice() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search-bar");
  if (search == null) {
    /* This JavaScript code snippet is making use of promises to fetch data about Pokemon. Here's a
breakdown of what it's doing: */
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    fetchPokemonByName(name)
      .then((pokemon) => {
        addPokedex(pokemon);
        // You can access specific attributes like pokemon.name, pokemon.types, etc.
      })
      .catch((error) => console.error("Error:", error));
  } else if (search !== null) {
    let content = document.getElementById("descriptionArea");
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

/* The `addPokedex` function is responsible for adding Pokemon data to the Pokedex display on the
webpage. Here's a breakdown of what the function does: */
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

  let mainSection = `<section id='StatsChart'><canvas id="pokemonStatsChart"></canvas></section>
                      <div id="Evolutions"></div>`;

  detailsDiv.innerHTML += `
    <h1>${pokemon.name.toUpperCase()}</h1>
    ${types}
    ${generalStats}
    ${mainSection}
  `;

  addPokemonStats(pokemon);
  addEvolutionsCards(pokemon);
}

/**
 * The function `addPokemonStats` creates a bar chart displaying the stats of a Pokémon by utilizing
 * Chart.js library.
 * @param pokemon - The `addPokemonStats` function you provided is used to create a bar chart
 * displaying the stats of a Pokémon. The function takes a `pokemon` object as a parameter, which
 * should have a `stats` property containing an array of objects with `stat` and `base_stat`
 * properties.
 */

function addPokemonStats(pokemon) {
  const ctx = document.getElementById("pokemonStatsChart").getContext("2d");
  let label = [];
  let value = [];
  pokemon.stats.forEach((stat) => {
    label.push(capitalizeFirstLetter(stat.stat.name));
    value.push(stat.base_stat);
  });

  const data = {
    labels: label,
    datasets: [
      {
        label: "Pokémon Stats",
        data: value, // Replace these values with the actual stats
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
}

/**
 * The function `addEvolutionsCards` fetches the evolution path of a given Pokémon and displays the
 * data of each evolution in the HTML element with the id "Evolutions".
 * @param pokemon - The `addEvolutionsCards` function takes a `pokemon` object as a parameter. This
 * `pokemon` object likely contains information about a specific Pokémon, such as its name, type,
 * abilities, etc. The function uses this information to fetch the evolution path of the Pokémon and
 * then fetches
 */
function addEvolutionsCards(pokemon) {
  fetchPokemonEvolutionPath(pokemon.name)
    .then((evolutionPath) => {
      evolutions = [];
      for (let i = 0; i < evolutionPath.length; i++) {
        evolutions.push(fetchPokemonByName(evolutionPath[i]));
      }
      Promise.all(evolutions)
        .then((resultado) => {
          resultado.forEach((newPokemon) => {
            document.getElementById("Evolutions").innerHTML +=
              displayPokemonData(newPokemon, (small = true));
          });
        })
        .catch((error) => console.log(`Error en las promesas ${error}`));
    })
    .catch((error) => console.error("Error:", error));
}

initialice();
