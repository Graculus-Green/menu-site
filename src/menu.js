const addPara = (text) => {
    const para = document.createElement("p");
    para.classList.add("element");
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
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(menu());
    
}
export {placeMenu as menu};