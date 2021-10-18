import { menu } from "./menu";
import { homePage } from "./homePage";


const addButton = (text) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    return btn;
}

const buttonMenu = () => {

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.addEventListener("click",
        menu()
    );

    btn.appendChild(addButton("Menu"));

    return btn;
}

const buttonHome = () => {

    const btn = document.createElement("button");
    btn.classList.add("btn-home");
    btn.addEventListener("click",
        homePage()
    );

    btn.appendChild(addButton("Home Page"));

    return btn;
}

const placeButton = () => {
    const main = document.querySelector("#content");
    main.textContent = "";
    main.appendChild(buttonHome());
    main.appendChild(buttonMenu());
    
}
export {placeButton as buttons};