import { menu } from "./menu";
import { homePage } from "./homePage";
import { contact } from "./contact";

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

const buttonContact = () => {
    const btn = addButton("Contact us");
    btn.addEventListener("click", () => {
        contact()
    });
    return btn;
};

const placeButton = () => {
    const main = document.querySelector("#content");
    main.appendChild(buttonHome());
    main.appendChild(buttonMenu());
    main.appendChild(buttonContact());
    const page = document.createElement("div");
    main.appendChild(page);
    page.classList.add("current-page");
    
}
export {placeButton as buttons};