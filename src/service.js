export default function createElement(element, classList = "") {
  const el = document.createElement(element);
  if (classList) {
    el.classList.add(classList);
  }
  return el;
}
