const addElement = (title, text) => {
    const element = document.createElement("div");
    const elTitle = document.createElement("h2");
    const para = document.createElement("p");
    element.classList.add("element");
    elTitle.textContent = title;
    elTitle.classList.add("elTitle");
    para.textContent = text;

    element.appendChild(elTitle)
    element.appendChild(para);
    return element;
};

const menu = () => {
    const home = document.createElement("div");
    home.classList.add("menu");

    home.appendChild(addElement("Appetiser", "sieFHSzlfj"));
    home.appendChild(addElement("Main", "slhfosjzx"));
    home.appendChild(addElement("Pudding", "shodfhcslx"));
    home.appendChild(addElement("Drinks", "jsoifhlvlzsjx"));

    return home;
}

const placeMenu = () => {
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(menu());
    
}
export {placeMenu as menu};