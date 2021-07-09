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
  const sectionElement = createElement("section", "characterCard");

  const characterImage = createCharacterImage(character);
  const characterInfo = createCharacterInfos(character);

  sectionElement.append(characterImage);
  sectionElement.append(characterInfo);

  return sectionElement;
}

// helper function

function createCharacterImage(character) {
  const characterImage = createElement("img", "characterCard-image");
  characterImage.src = character.image;
  characterImage.alt = "rick-and-morty-character";
  return characterImage;
}

function createCharacterInfos(character) {
  const characterCardInfos = createElement("div", "characterCard-infos");

  const characterCardInfosName = createNameStatusSpecies(character);

  const lastKnownLocation = createSubInfo(
    "Last known location:",
    character.location.name
  );
  const firstSeenIn = createSubInfo("First seen in:", character.origin.name);

  characterCardInfos.append(characterCardInfosName);
  characterCardInfos.append(lastKnownLocation);
  characterCardInfos.append(firstSeenIn);

  return characterCardInfos;
}

function createNameStatusSpecies(character) {
  const characterCardInfosName = createElement(
    "div",
    "characterCard-infos--name"
  );

  const infoHeader2 = createElement("h2");
  infoHeader2.classList.add("info-header2");
  infoHeader2.innerText = character.name;

  const wrapperDiv = createElement("div");
  const statusLight = createElement("span", "characterCard-infos--statusLight");
  const statusClass = getClassForStatus(character);
  statusLight.classList.add(statusClass);

  const infoHeader3 = createElement("h3", "info-header3");
  infoHeader3.innerText = `${character.status} - ${character.species}`;

  wrapperDiv.append(statusLight);
  wrapperDiv.append(infoHeader3);

  characterCardInfosName.append(infoHeader2);
  characterCardInfosName.append(wrapperDiv);
  return characterCardInfosName;
}

function getClassForStatus(character) {
  switch (character.status) {
    case "Alive":
      return "alive";
    case "Dead":
      return "dead";
    case "Unknown":
      return "unknown";
    default:
      return "unkown";
  }
}

function createSubInfo(headerTitle, info) {
  const characterCardInfoWrapper = createElement(
    "div",
    "characterCard-infoWrapper"
  );

  const infoWrapperArea = createElement(
    "h3",
    "characterCard-infoWrapper--area"
  );
  infoWrapperArea.innerText = headerTitle;

  const paragraph = createElement("p");
  paragraph.innerText = info;

  characterCardInfoWrapper.append(infoWrapperArea);
  characterCardInfoWrapper.append(paragraph);

  return characterCardInfoWrapper;
}
