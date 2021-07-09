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

  const characterImage = createCharacterImage(character);
  const characterInfo = createCharacterInfos(character);

  sectionElement.append(characterImage);
  sectionElement.append(characterInfo);

  return sectionElement;
}

// helper function

function createCharacterImage(character) {
  const characterImage = createElement("img");
  characterImage.classList.add("characterCard-image");
  characterImage.src = character.image;
  characterImage.alt = "rick-and-morty-character";
  return characterImage;
}

function createCharacterInfos(character) {
  const characterCardInfos = createElement("div");
  characterCardInfos.classList.add("characterCard-infos");

  const characterCardInfosName = createNameStatusSpecies(character);
  characterCardInfos.append(characterCardInfosName);

  const lastKnownLocation = createSubInfo(
    "Last known location:",
    character.location.name
  );
  const firstSeenIn = createSubInfo("First seen in:", character.origin.name);

  characterCardInfos.append(lastKnownLocation);
  characterCardInfos.append(firstSeenIn);

  return characterCardInfos;
}

function createNameStatusSpecies(character) {
  const characterCardInfosName = createElement("div");
  characterCardInfosName.classList.add("characterCard-infos--name");

  const infoHeader2 = createElement("h2");
  infoHeader2.classList.add("info-header2");
  infoHeader2.innerText = character.name;

  const wrapperDiv = createElement("div");
  const statusLight = createElement("span");
  statusLight.classList.add("characterCard-infos--statusLight");
  const statusClass = getClassForStatus(character);
  statusLight.classList.add(statusClass);

  const infoHeader3 = createElement("h3");
  infoHeader3.classList.add("info-header3");
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
  const characterCardInfoWrapper = createElement("div");
  characterCardInfoWrapper.classList.add("characterCard-infoWrapper");

  const infoWrapperArea = createElement("h3");
  infoWrapperArea.classList.add("characterCard-infoWrapper--area");
  infoWrapperArea.innerText = headerTitle;

  const paragraph = createElement("p");
  paragraph.innerText = info;

  characterCardInfoWrapper.append(infoWrapperArea);
  characterCardInfoWrapper.append(paragraph);

  return characterCardInfoWrapper;
}
