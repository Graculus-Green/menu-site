const addElement = (title, text) => {
    const element = document.createElement("div");
    const elTitle = document.createElement("h2");
    const para = document.createElement("p");
    element.classList.add("element");
    elTitle.textContent = title;
    para.textContent = text;

    element.appendChild(elTitle)
    element.appendChild(para);
    return element;
}

const homePage = () => {

    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(addElement("First Line", "sklfhsl"));
    home.appendChild(addElement("Second Line", "sdnofjsh"));
    home.appendChild(addElement("Third Line", "ksdhfojs"));
    home.appendChild(addElement("Fourth Line", "slKUGDfhljA"));

    return home;
}

const placeHome = () => {
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(homePage());
    
}
export {placeHome as homePage};