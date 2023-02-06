/////////////////////////////
/*Open and close start-menu*/
/////////////////////////////

let startBtnOpen = false;
const startBtn = document.querySelector(".toolbar__start-btn");
const startMenu = document.querySelector(".start-menu");
const desktop = document.querySelector(".desktop");

//Toggle menu open and close if start button selected
startBtn.addEventListener("click", (event) => {
  startBtnOpen
    ? startMenu.classList.add("start-menu--hidden")
    : startMenu.classList.remove("start-menu--hidden");
  startBtnOpen = !startBtnOpen;
});

//Close menu when desktop selected if window is open
desktop.addEventListener("click", (event) => {
  if (startBtnOpen) {
    startMenu.classList.add("start-menu--hidden");
    startBtnOpen = !startBtnOpen;
  }
});

//////////////////////////
/*Open and Close Windows*/
//////////////////////////

import { openWindow, closeWindow } from "./windowFunctionality.js";

/*Add open and close functionality to all application in list from desktop and start menu*/
const applicationList = ["my-documents", "my-pictures", "notepad"];

applicationList.forEach((applicationName) => {
  openWindow(applicationName, "desktop__application", "dblclick");
  openWindow(applicationName, "start-menu", "click");
  closeWindow(applicationName);
});

///////////////////////////
/*Display picture gallary*/
///////////////////////////
import { displayList } from "./windowFunctionality.js";

/*Display pictues from list*/
const pictures = [
  { label: "Elmo1", iconPath: "./images/picture-gallery/cat1.jpg" },
  { label: "Elmo2", iconPath: "./images/picture-gallery/cat2.jpg" },
  { label: "Elmo3", iconPath: "./images/picture-gallery/cat3.jpg" },
  { label: "Fluff", iconPath: "./images/picture-gallery/cat4.jpg" },
];

displayList(pictures, "my-pictures");

////////////////////////////
/*Display folder structure*/
////////////////////////////

let currentFolder;
const folders = [
  {
    label: "Cat Notes",
    iconPath: "./images/folder.png",
    isFolder: true,
    folders: [
      {
        label: "Fluff Notes",
        iconPath: "./images/text-icon.svg",
        isFolder: false,
      },
      {
        label: "Elmo Notes",
        iconPath: "./images/text-icon.svg",
        isFolder: false,
      },
    ],
  },
  {
    label: "Stuff",
    iconPath: "./images/folder.png",
    isFolder: true,
    folders: {
      label: "Stuff",
      iconPath: "./images/folder.png",
      isFolder: true,
      folders: [
        {
          label: "Things",
          iconPath: "./images/folder.png",
          isFolder: true,
          folders: [],
        },
      ],
    },
  },
];

displayList(folders, "my-documents");

//Apply event listner to every folder
folders.forEach((folder) => {
  //Get folder div from DOM
  const itemClassName = folder.label.replace(/\s+/g, "-").toLowerCase();

  const windowItem = document.querySelector(`.${itemClassName}`);
  const windowItems = document.querySelector(
    `.window--my-documents .window__items`
  );

  //Apply event listner
  windowItem.addEventListener("dblclick", (event) => {
    //remove all current items from window
    windowItems.innerHTML = "";

    //display new folder set if not empty
    if (folder.folders.length !== 0) {
      displayList(folder.folders, "my-documents");
    }
  });
});

////////////////////////
/*Display current time*/
////////////////////////
import { createTextNode } from "./DOM-ultilities.js";

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();

let nowString = `${hour}:${minutes}`;
let parent = document.querySelector(".toolbar__clock");
createTextNode("p", nowString, parent, "toolbar__clock__time");
