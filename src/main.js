import createCard from "./createCard";

const mainElement = document.querySelector("main");

const loadButton = document.querySelector(".btn-load-characters");
loadButton.addEventListener("click", () => {
  mainElement.innerText = "";
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((character) => {
        const characterCard = createCard(character);
        mainElement.append(characterCard);
      })
    )
    .catch((error) => console.log("Something went wrong." + error));
});
