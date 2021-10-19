import {buttons} from "./buttons"

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
const main = document.querySelector("#content");
main.appendChild(buttonContainer);

buttons();