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


const contact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.appendChild(addElement("Address", "42 30007 \nMiddle of the Ocean \nGreat Garbage Patch"));
    contact.appendChild(addElement("Phone", "Just yell, mate"));
    contact.appendChild(addElement("E-mail", "somerestaurant@garbagepatch.com"));
    contact.appendChild(addElement("Map", "maybe?"));

    return contact;
}

const placeContact = () => {
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(contact());
    
}
export {placeContact as contact};