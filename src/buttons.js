import { menu } from "./menu";
import { homePage } from "./homePage";

const addButton = (text) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = text;
    return btn;
};

const buttonHome = () => {
    const btn = addButton("Home");
    btn.addEventListener("click", () => {
        homePage()
    });
    return btn;
};

const buttonMenu = () => {
    const btn = addButton("Menu");
    btn.addEventListener("click", () => {
        menu()
    });
    return btn;
};

const placeButton = () => {
    const main = document.querySelector("#content");
    main.appendChild(buttonHome());
    main.appendChild(buttonMenu());
    const page = document.createElement("div");
    main.appendChild(page);
    page.classList.add("current-page");
    
}
export {placeButton as buttons};