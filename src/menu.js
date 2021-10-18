const addPara = (text) => {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

const menu = () => {
    const home = document.createElement("div");
    home.classList.add("menu");

    home.appendChild(addPara("Appetiser"));
    home.appendChild(addPara("Main"));
    home.appendChild(addPara("Pudding"));
    home.appendChild(addPara("Drinks"));

    return home;
}

const placeMenu = () => {
    const main = document.querySelector("#content");
    main.textContent = "";
    main.appendChild(menu());
    
}
export {placeMenu as menu};