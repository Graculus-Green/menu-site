const addPara = (text) => {
    const para = document.createElement("p");
    para.classList.add("element");

    para.textContent = text;
    return para;
}

const contact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.appendChild(addPara("Address"));
    contact.appendChild(addPara("Phone"));
    contact.appendChild(addPara("E-mail"));
    contact.appendChild(addPara("Map"));

    return contact;
}

const placeContact = () => {
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(contact());
    
}
export {placeContact as contact};