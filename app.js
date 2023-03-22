"use strict";

window.addEventListener("load", initApp);

console.log("Javascript kører");

function initApp() {
  const gengar = {
    name: "Gengar",
    description: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity",
    ability: "Shadow Ball",
    image: "https://cdn.pixabay.com/photo/2020/07/24/03/12/gengar-5432819_960_720.png",
    footprint: "https://archives.bulbagarden.net/media/upload/c/c1/F0094.png",
    dexindex: "94",
    type: "Ghost, Poison",
    subtype: "Spirit",
    weaknesses: "Ground(2), Ghost(2), Psychic(2), Dark(2)",
    gender: "50% female, 50% male",
    weight: "40500 gram",
    height: "150 cm",
    generation: 1,
    spilversion: 1,
    canEvolve: false,
    statsHP: "60",
    statsAttack: "65",
    statsDefence: "60",
    statsSpecialAttack: "130",
    statsSpecialDefence: "75",
    statsSpeed: "110",
  };
  console.log(gengar);
  showPokémon(gengar);

  document.querySelector("#dialog");

}

// function showPokémon(pokemon) {
//   const myHTML = /*html*/ `
//   <li>Name: ${pokemon.name}</li>
//   <li>Description: ${pokemon.description}</li>
//   <li>Ability: ${pokemon.ability}</li>
//   <li>Image: ${pokemon.image}</li>
//   <li>Footprint: ${pokemon.footprint}</li>
//   <li>Dexindex: ${pokemon.dexindex}</li>
//   <li>Type: ${pokemon.type}</li>
//   <li>Subtype: ${pokemon.subtype}</li>
//   <li>Weaknesses: ${pokemon.weaknesses}</li>
//   <li>Gender: ${pokemon.gender}</li>
//   <li>Weight: ${pokemon.weight}</li>
//   <li>Height: ${pokemon.height}</li>
//   <li>Generation: ${pokemon.generation}</li>
//   <li>Spilversion: ${pokemon.spilversion}</li>
//   <li>CanEvole: ${pokemon.canEvolve}</li>
//   <li>StatsHP: ${pokemon.statsHP}</li>
//   <li>StatsAttack: ${pokemon.statsAttack}</li>
//   <li>StatsDefence: ${pokemon.statsDefence}</li>
//   <li>StatsSpecialAttack: ${pokemon.statsSpecialAttack}</li>
//   <li>StatsSpecialDefence: ${pokemon.statsSpecialDefence}</li>
//   <li>StatsSpeed: ${pokemon.statsSpeed}</li> `
//   document.querySelector("#pokémon").insertAdjacentHTML("beforeend", myHTML);
// }

function showPokemon(pokemon) {
  console.log(pokemon);
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
      <article class="grid-item">
        <img src="${pokemon.image}">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.type}</p>
        <p>Pokedex Number: ${pokemon.dexindex}</p>
      </article>
    `
  );
  document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log(pokemon);
    document.querySelector("#dialog").showModal();
    document.querySelector("#dialog-pokemon-name").textContent = pokemon.name;
    document.querySelector("#dialog-type").textContent = pokemon.type;
    document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
    document.querySelector("#dialog-image").src = pokemon.image;

    // show dialog
    document.querySelector("#dialog-pokemon").showModal();
  }
}

function fetchJSON() {}

function showList() {}

function calcStats() {}

function showGeneration() {}

function getDescription () {}

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












<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="#" type="image/x-icon">
    <link rel="shortcut icon" href="https://cederdorff.github.io/img/favicon.webp" type="image/x-icon">
    <link rel="stylesheet" href="app.css">
    <title>Pokémon App</title>
</head>
<body>
    <header>
        <h1>Pokémon Characters</h1>
    </header>
    <dialog id="dialog">
        <h2 id="dialog-pokemon-name">Firstname</h2>
		<h3 id="dialog-type">This is my type!</h3>
		<p id="dialog-dexindex">This is my dexindex...</p>
		<img id="dialog-image" src="https://cederdorff.github.io/img/favicon.webp">
        <form method="dialog">
		<button id="btn-cancel">Close</button>
        </form>
        <div id="pokemon">
        </div>
    </dialog>
    <main>
        <section id="pokemons" class="grid-container"></section>
    </main>
    <footer>
        <p>Pokémon App by Nikolaj</p>
    </footer>

    <script src="app.js"></script>
</body>
</html>