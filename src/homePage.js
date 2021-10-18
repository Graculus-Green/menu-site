const addPara = (text) => {
    const para = document.createElement("p");
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
    const main = document.querySelector("#content");
    main.textContent = "";
    main.appendChild(homePage());
    
}
export {placeHome as homePage};