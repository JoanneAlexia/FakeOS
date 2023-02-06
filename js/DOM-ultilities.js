export function createTextNode(tag, text, parent, className) {
  let element = document.createElement(tag);
  let textElement = document.createTextNode(text);
  element.appendChild(textElement);
  element.setAttribute("class", className);
  parent.appendChild(element);
}

export function createImageNode(src, className, parent) {
  let image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("class", className);
  parent.appendChild(image);
}
