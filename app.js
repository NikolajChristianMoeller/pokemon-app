"use strict";

window.addEventListener("load", initApp);

console.log("Javascript kører");

async function initApp() {
  console.log("initApp: app.js is running");
  const pokemons = await getPokemon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  for (const pokemon of pokemons) {
    showPokemon(pokemon)
  }
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

function showPokemonDialog(pokemon) {

// I do not need these lines anymore, I keep them for future understanding

  // const myHTML = /*html*/ `
  // <li>Name: ${pokemon.name}</li>
  // <li>Description: ${pokemon.description}</li>
  // <li>Ability: ${pokemon.ability}</li>
  // <li>Image: ${pokemon.image}</li>
  // <li>Footprint: ${pokemon.footprint}</li>
  // <li>Dexindex: ${pokemon.dexindex}</li>
  // <li>Type: ${pokemon.type}</li>
  // <li>Subtype: ${pokemon.subtype}</li>
  // <li>Weaknesses: ${pokemon.weaknesses}</li>
  // <li>Gender: ${pokemon.gender}</li>
  // <li>Weight: ${pokemon.weight}</li>
  // <li>Height: ${pokemon.height}</li>
  // <li>Generation: ${pokemon.generation}</li>
  // <li>Spilversion: ${pokemon.spilversion}</li>
  // <li>CanEvolve: ${canEvolve}</li>
  // <li>StatsHP: ${pokemon.statsHP}</li>
  // <li>StatsAttack: ${pokemon.statsAttack}</li>
  // <li>StatsDefence: ${pokemon.statsDefence}</li>
  // <li>StatsSpecialAttack: ${pokemon.statsSpecialAttack}</li>
  // <li>StatsSpecialDefence: ${pokemon.statsSpecialDefence}</li>
  // <li>StatsSpeed: ${pokemon.statsSpeed}</li> `;
  // document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myHTML);

}

function showPokemon(pokemon) {
  console.log(pokemon);
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
      <article class="grid-item">
        <img src="${pokemon.image}">
        <h2>${pokemon.name}</h2>
        <p>Type ${pokemon.type}, ${pokemon.subtype}</p>
        <p>Pokedex Number: ${pokemon.dexindex}</p>

      </article>
    `
  );

  document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log(pokemon);
    showPokemonModal(pokemon);
  }
}

function showPokemonModal(pokemon) {

  let canEvolve = gatherData(pokemon);

  function gatherData(pokemon) {
    let canEvolve = "";
    if (pokemon.canEvolve === true) {
      canEvolve = "This pokemon can evolve";
    } else if (pokemon.canEvolve === false) {
      canEvolve = "Does not have any no evolutions";
    }
    return canEvolve;
  }

  console.log(pokemon);
  document.querySelector("#dialog-pokemon").showModal();
  document.querySelector("#dialog-pokemon-name").textContent = `Name: ${pokemon.name}`;
  document.querySelector("#dialog-pokemon-description").textContent = `Description: ${pokemon.description}`;
  document.querySelector("#dialog-pokemon-ability").textContent = `Ability: ${pokemon.ability}`;
  document.querySelector("#dialog-pokemon-image").src = pokemon.image;
  document.querySelector("#dialog-pokemon-footprint").src = pokemon.footprint;
  document.querySelector("#dialog-pokemon-dexindex").textContent = `Dexindex: ${pokemon.dexindex}`;
  document.querySelector("#dialog-pokemon-type").textContent = `Type: ${pokemon.type}`;

  if (pokemon.subtype != undefined || pokemon.subtype != null) {
     document.querySelector("#dialog-pokemon-subtype").textContent = `Subtype: ${pokemon.subtype}`;
   } else {
     document.querySelector("#dialog-pokemon-subtype").textContent = "";
  }
  
  document.querySelector("#dialog-pokemon-weaknesses").textContent = `Weaknesses: ${pokemon.weaknesses}`;
  document.querySelector("#dialog-pokemon-gender").textContent = `Gender: ${pokemon.gender}`;
  document.querySelector("#dialog-pokemon-weight").textContent = `Weight: ${pokemon.weight/1000} kg`;
  document.querySelector("#dialog-pokemon-height").textContent = `Height: ${pokemon.height} cm`;
  document.querySelector("#dialog-pokemon-generation").textContent = `Generation: ${pokemon.generation}`;
  document.querySelector("#dialog-pokemon-spilversion").textContent = `Spilversion: ${pokemon.spilversion}`;
  
  document.querySelector("#dialog-pokemon-canEvolve").textContent = canEvolve;
  document.querySelector("#dialog-pokemon-health-points").textContent = `HP: ${pokemon.statsHP}`;
  document.querySelector("#dialog-pokemon-attack").textContent = `Attack: ${pokemon.statsAttack}`;
  document.querySelector("#dialog-pokemon-defence").textContent = `Defence: ${pokemon.statsDefence}`;
  document.querySelector("#dialog-pokemon-special-attack").textContent = `Special Attack: ${pokemon.statsSpecialAttack}`;
  document.querySelector("#dialog-pokemon-special-defence").textContent = `Special Defence: ${pokemon.statsSpecialDefence}`;
  document.querySelector("#dialog-pokemon-speed").textContent = `Speed: ${pokemon.statsSpeed}`;
}

