export function openWindow(applicationName, location, clickType) {
  const applicationClassName = `.${location}--${applicationName}`;
  const windowClassName = `.window--${applicationName}`;
  const application = document.querySelector(applicationClassName);
  const window = document.querySelector(windowClassName);
  application.addEventListener(clickType, (event) => {
    window.classList.remove("window--hidden");
  });
}

export function closeWindow(applicationName) {
  const windowClassName = `.window--${applicationName}`;
  const closeBtnClassName = `${windowClassName} .window__title-bar .window__title-bar__button--close`;
  const window = document.querySelector(windowClassName);
  const closeBtn = document.querySelector(closeBtnClassName);
  closeBtn.addEventListener("click", (event) => {
    window.classList.add("window--hidden");
  });
}

import { createTextNode } from "./DOM-ultilities.js";
import { createImageNode } from "./DOM-ultilities.js";

export function displayList(list, window_name) {
  let windowItems = document.querySelector(
    `.window--${window_name} .window__items`
  );

  list.forEach((listItem) => {
    //Create item element, add specific and general class
    let item = document.createElement("div");
    const itemClassName = listItem.label.replace(/\s+/g, "-").toLowerCase();

    item.setAttribute("class", `window__item ${itemClassName}`);

    //create image element
    createImageNode(listItem.iconPath, "window__item__img", item);

    //Create label element
    createTextNode("p", listItem.label, item, "window__item__label");

    //Add new item element to DOM
    windowItems.appendChild(item);
  });
}
