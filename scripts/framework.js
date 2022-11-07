export function createElement(tagName, content) {
  let element = document.createElement(tagName);
  element.innerHTML = content;
  return element;
}
