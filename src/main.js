import createCard from "./createCard";

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data.results))
  .catch((error) => console.log("Something went wrong." + error));

const mainElement = document.querySelector("main");

const card = createCard();

mainElement.append(card);
