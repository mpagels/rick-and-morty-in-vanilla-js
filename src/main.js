const mainElement = document.querySelector("main");

const sectionElement = createElement("section");
sectionElement.classList.add("characterCard");

const characterImage = createElement("img");
characterImage.classList.add("characterCard-image");
characterImage.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
characterImage.alt = "rick-and-morty-character";

sectionElement.append(characterImage);

const characterCardInfos = createElement("div");
characterCardInfos.classList.add("characterCard-infos");

const characterCardInfosName = createElement("div");
characterCardInfosName.classList.add("characterCard-infos--name");

const infoHeader2 = createElement("h2");
infoHeader2.classList.add("info-header2");
infoHeader2.innerText = "Little Dipper";

const wrapperDiv = createElement("div");
const statusLight = createElement("span");
statusLight.classList.add("characterCard-infos--statusLight");
statusLight.classList.add("alive");

const infoHeader3 = createElement("h3");
infoHeader3.classList.add("info-header3");
infoHeader3.innerText = "Alive - Humaniod";

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
paragraph.innerText = "Earth (Replacement Dimension)";

characterCardInfoWrapper.append(infoWrapperArea);
characterCardInfoWrapper.append(paragraph);

characterCardInfos.append(characterCardInfoWrapper);
sectionElement.append(characterCardInfos);
mainElement.append(sectionElement);

// helper function

function createElement(element) {
  return document.createElement(element);
}
