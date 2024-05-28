function loadCanvas() {
    const img = document.getElementById('pokemonAnswer');
    const canvas = document.getElementById('canvasPokemon');
    const ctx = canvas.getContext('2d');

    img.onload = function() {
        img.crossOrigin = "anonymous";
        // Ensure the image has loaded
        
        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Get the image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Iterate over each pixel
        for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];

            // If pixel is not fully transparent
            if (alpha !== 0) {
                // Set the pixel to black (R, G, B to 0, keeping the alpha unchanged)
                data[i] = 0;   // Red
                data[i + 1] = 0; // Green
                data[i + 2] = 0; // Blue
            }
        }
        
        // Put the modified image data back to the canvas
        ctx.putImageData(imageData, 0, 0);


    };
    // If the image is already cached by the browser, `onload` may not fire
};

function initialice() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search-bar");
    if (search == null) {
      /* This JavaScript code snippet is making use of promises to fetch data about Pokemon. Here's a
  breakdown of what it's doing: */
        let options = [];
      fetchAllPokemon().then(async (pokemonData) => {
        const pokemonDataDiv = document.getElementById("pokemonCards");
        for (let index = 0; index < 3; index++) {
            let random = Math.floor(Math.random()*150);
            let newPokemon = await fetchPokemon(pokemonData.results[random].url);
            options.push(newPokemon);
        }
        selectedPokemon = Math.floor(Math.random()*3);
        document.getElementById("TVArea").innerHTML += `
        <img id="pokemonAnswer" src="${options[selectedPokemon].sprites.other.home.front_default}" alt="Pokemon answer" class="invisible stacked" >
        <canvas id="canvasPokemon" class="stacked"></canvas>`

        loadCanvas();


        
        let optionsArea = document.getElementById("optionsArea");
        options.forEach(option => {
            optionsArea.innerHTML += `<p class="optionButton">${capitalizeFirstLetter(option.name)}</p>`
        });
      });
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
  
  initialice();
  
  
  