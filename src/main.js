import createCard from "./createCard";
const mainElement = document.querySelector("main");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) =>
    data.results.forEach((character) => {
      const characterCard = createCard(character);
      mainElement.append(characterCard);
    })
  )
  .catch((error) => console.log("Something went wrong." + error));
