"use strict";

window.addEventListener("load", initApp);

console.log("Javascript kører");

async function initApp() {
  console.log("initApp: app.js is running");
  const gengar = await getPokemon("data/gengar.json");
  console.log(gengar);
  showPokemon(gengar);
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

function showPokemonDialog(pokemon) {
  const myHTML = /*html*/ `
  <li>Name: ${pokemon.name}</li>
  <li>Description: ${pokemon.description}</li>
  <li>Ability: ${pokemon.ability}</li>
  <li>Image: ${pokemon.image}</li>
  <li>Footprint: ${pokemon.footprint}</li>
  <li>Dexindex: ${pokemon.dexindex}</li>
  <li>Type: ${pokemon.type}</li>
  <li>Subtype: ${pokemon.subtype}</li>
  <li>Weaknesses: ${pokemon.weaknesses}</li>
  <li>Gender: ${pokemon.gender}</li>
  <li>Weight: ${pokemon.weight}</li>
  <li>Height: ${pokemon.height}</li>
  <li>Generation: ${pokemon.generation}</li>
  <li>Spilversion: ${pokemon.spilversion}</li>
  <li>CanEvole: ${pokemon.canEvolve}</li>
  <li>StatsHP: ${pokemon.statsHP}</li>
  <li>StatsAttack: ${pokemon.statsAttack}</li>
  <li>StatsDefence: ${pokemon.statsDefence}</li>
  <li>StatsSpecialAttack: ${pokemon.statsSpecialAttack}</li>
  <li>StatsSpecialDefence: ${pokemon.statsSpecialDefence}</li>
  <li>StatsSpeed: ${pokemon.statsSpeed}</li> `;
  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myHTML);

  showPokemon(gengar);
  showPokemon(gengar);
  showPokemon(gengar);
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
  console.log(pokemon);
  document.querySelector("#dialog").showModal();
  document.querySelector("#dialog-pokemon-name").textContent = pokemon.name;
  document.querySelector("#dialog-type").textContent = pokemon.type;
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-image").src = pokemon.image;
  
  let description = generateDescription(character);
  document.querySelector("dialog-pokemon-description").textContent = description;

  document.querySelector("dialog-gender").textContent = pokemon.gender;
  document.querySelector("dialog-birth-date").textContent = pokemon.dateOfBirth;
  document.querySelector("dialog-eye-color").textContent = pokemon.eyeColour;
  document.querySelector("dialog-hair-color").textContent = pokemon.hairColour;
  document.querySelector("dialog-ancestry").textContent = pokemon.ancestry;
  document.querySelector("dialog-species").textContent = pokemon.species;

  document.querySelector("dialog-name").textContent = pokemon.name;
  document.querySelector("dialog-actor-name").textContent = pokemon.actor;


  // show dialog
    document.querySelector("#dialog-pokemon").showModal();
  }

function generateDescription(pokemon) {
  let description = "";
  if (pokemon.hogwartsStaff && pokemon.alive) {
    description = `${character.name} is employed at Hogwarts.`;
  } else if (pokemon.hogwartsStaff && !pokemon.alive) {
    description = `${pokemon.name} was employed at Hogwarts but is no longer alive.`;
  } else if (pokemon.hogwartsStudent && pokemon.alive) {
    description = `${pokemon.name} is a student at Hogwarts.`;
  } else if (pokemon.hogwartsStudent && !pokemon.alive) {
    description = `${pokemon.name} was a student at Hogwarts but is no longer alive.`;
  }
  return description;
}





// function showCharacter(image, name, house, dateOfBirth, actor) {
//     //define elements
//     const articleElement = document.createElement("article");
//     const imageElement = document.createElement("img");
//     const nameElement = document.createElement("h2");
//     const houseElement = document.createElement("p");
//     const dateOfBirthElement = document.createElement("p");
//     const actorElement = document.createElement("p");

//     // set content
//     imageElement.src = image;
//     nameElement.textContent = name;
//     houseElement.textContent = house;
//     dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
//     actorElement.textContent = `Played by ${actor}`;

//     // append child elements to articleElement
//     articleElement.appendChild(imageElement);
//     articleElement.appendChild(nameElement);
//     articleElement.appendChild(houseElement);
//     articleElement.appendChild(dateOfBirthElement);
//     articleElement.appendChild(actorElement);

//     // append article to grid
//     document.querySelector("#characters").appendChild(articleElement);
// }
