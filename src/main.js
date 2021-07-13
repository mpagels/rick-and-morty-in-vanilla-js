import createCard from "./createCard";
import { hasInputValue } from "./service";

const mainElement = document.querySelector("main");
const selectElement = document.querySelector("select");
const loadButton = document.querySelector(".btn-load-characters");
const inputElement = document.querySelector("input");

loadButton.addEventListener("click", () => {
  const inputHasValue = hasInputValue(inputElement.value);

  const url = createUrlUsingSelectFilter2(inputHasValue);

  fetch(url)
    .then((response) => response.json())
    .then((data) =>
        data.results.forEach((character) => {
          const characterCard = createCard(character);
          mainElement.append(characterCard);
    })
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

// another solution (using modern JS features (ternary operator)) to create url from filter
function createUrlUsingSelectFilter2(inputHasValue) {
  const filter = selectElement.value;
  /*
  the following reads like this:
  if filter equals "all" then 
  return and save the string after the ? in the variable url, 
  if not save the string after the : in the variable url.
  */
  const url =
    filter === "all"
      ? "https://rickandmortyapi.com/api/character"
      : "https://rickandmortyapi.com/api/character/?status=" + filter;

  const finalUrl = getNameSearchUrl(url, filter, inputHasValue);
  return finalUrl;
}

function getNameSearchUrl(url, filter, inputHasValue) {
  if (filter === "all" && inputHasValue) {
    return url + `/?name=${inputElement.value}`;
  } else if (inputHasValue) {
    return url + `&name=${inputElement.value}`;
  } else return url;
}
