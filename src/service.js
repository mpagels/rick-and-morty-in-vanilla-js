export default function createElement(element, classList = "") {
  const el = document.createElement(element);
  if (classList) {
    el.classList.add(classList);
  }
  return el;
}

export function hasInputValue(inputElementValue) {
  const stringWithoutWhiteSpace = inputElementValue.trim().length > 0;
  const inputHasValue = stringWithoutWhiteSpace.length > 0;
  return inputHasValue;
}
