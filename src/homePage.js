const addPara = (text) => {
    const para = document.createElement("p");
    para.classList.add("element");

    para.textContent = text;
    return para;
}

const homePage = () => {

    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(addPara("First Line."));
    home.appendChild(addPara("Second Line."));
    home.appendChild(addPara("Third Line."));
    home.appendChild(addPara("Fourth Line."));

    return home;
}

const placeHome = () => {
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(homePage());
    
}
export {placeHome as homePage};