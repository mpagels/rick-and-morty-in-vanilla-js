import createCard from "./createCard";

const mainElement = document.querySelector("main");

const card = createCard();

mainElement.append(card);
