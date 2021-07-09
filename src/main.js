import createCard from "./createCard";

const mainElement = document.querySelector("main");
const selectElement = document.querySelector("select");
const loadButton = document.querySelector(".btn-load-characters");

loadButton.addEventListener("click", () => {
  const url = createUrlUsingSelectFilter();
  mainElement.innerText = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((character) => {
        const characterCard = createCard(character);
        mainElement.append(characterCard);
      })
    )
    .catch((error) => console.log("Something went wrong." + error));
});

function createUrlUsingSelectFilter() {
  switch (selectElement.value) {
    case "dead":
      return "https://rickandmortyapi.com/api/character/?status=dead";
    case "alive":
      return "https://rickandmortyapi.com/api/character/?status=alive";
    case "unknown":
      return "https://rickandmortyapi.com/api/character/?status=unknown";
    default:
      return "https://rickandmortyapi.com/api/character";
  }
}
