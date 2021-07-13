import createElement from "./service";

export default function createErrorElement(data) {
  const element = createElement("section", "errorCard");
  element.innerText = data;
  return element;
}
