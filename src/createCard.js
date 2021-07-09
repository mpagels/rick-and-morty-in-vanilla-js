import createElement from "./service";

/* {
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
} */

export default function createCard(character) {
  const sectionElement = createElement("section");
  sectionElement.classList.add("characterCard");

  const characterImage = createElement("img");
  characterImage.classList.add("characterCard-image");
  characterImage.src = character.image;
  characterImage.alt = "rick-and-morty-character";

  sectionElement.append(characterImage);

  const characterCardInfos = createElement("div");
  characterCardInfos.classList.add("characterCard-infos");

  const characterCardInfosName = createElement("div");
  characterCardInfosName.classList.add("characterCard-infos--name");

  const infoHeader2 = createElement("h2");
  infoHeader2.classList.add("info-header2");
  infoHeader2.innerText = character.name;

  const wrapperDiv = createElement("div");
  const statusLight = createElement("span");
  statusLight.classList.add("characterCard-infos--statusLight");
  statusLight.classList.add("alive");

  const infoHeader3 = createElement("h3");
  infoHeader3.classList.add("info-header3");
  infoHeader3.innerText = `${character.status} - ${character.species}`;

  wrapperDiv.append(statusLight);
  wrapperDiv.append(infoHeader3);

  characterCardInfosName.append(infoHeader2);
  characterCardInfosName.append(wrapperDiv);
  characterCardInfos.append(characterCardInfosName);

  const characterCardInfoWrapper = createElement("div");
  characterCardInfoWrapper.classList.add("characterCard-infoWrapper");

  const infoWrapperArea = createElement("h3");
  infoWrapperArea.classList.add("characterCard-infoWrapper--area");
  infoWrapperArea.innerText = "Last known location";

  const paragraph = createElement("p");
  paragraph.innerText = character.location.name;

  characterCardInfoWrapper.append(infoWrapperArea);
  characterCardInfoWrapper.append(paragraph);

  characterCardInfos.append(characterCardInfoWrapper);
  sectionElement.append(characterCardInfos);

  return sectionElement;
}
