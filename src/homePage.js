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

    home.appendChild(addElement("First Line", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus dolor. Nam euismod lacus at sapien iaculis hendrerit a nec neque. Phasellus laoreet felis at purus facilisis tincidunt. Aenean porttitor purus nec molestie sollicitudin. Proin placerat vel arcu semper rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra lectus lacus, sit amet tincidunt purus semper et. "));
    home.appendChild(addElement("Second Line", "Praesent neque nibh, iaculis ut egestas ac, auctor ut mauris. Etiam efficitur vulputate ex, ac malesuada arcu laoreet et. Ut mattis congue semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla odio quam, maximus in sollicitudin in, hendrerit volutpat metus. Pellentesque at augue sodales, sodales ipsum lacinia, aliquet metus. Mauris et tortor tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Praesent scelerisque, turpis non molestie bibendum, elit mauris elementum tellus, nec lobortis ligula quam sodales mi. Quisque molestie sed est ut tempor. Fusce facilisis hendrerit ligula non fermentum. Vivamus tellus erat, pellentesque et sapien vel, blandit imperdiet dolor. Fusce in convallis augue. Aliquam elementum, odio et viverra vestibulum, lectus augue vehicula urna, sed aliquam nunc nisl ut magna. Donec ligula velit, rutrum in sem vitae, lacinia auctor urna. "));
    home.appendChild(addElement("Third Line", "Donec efficitur, nisl sed faucibus varius, eros nisi viverra augue, id commodo ante risus sed urna. Vestibulum facilisis vehicula lacus sit amet auctor. Nunc pulvinar, odio at rhoncus lacinia, massa metus varius mi, sit amet tincidunt diam eros vel enim. Nam feugiat purus id ultricies blandit. Etiam hendrerit mauris eget sapien rutrum, ut maximus justo rhoncus. Nulla maximus nulla leo, non viverra massa vehicula a. Vivamus aliquam tellus id facilisis aliquam. Mauris efficitur et ipsum vel pretium. Donec posuere congue placerat. Aenean sed rhoncus nulla. "));
    home.appendChild(addElement("Fourth Line", "Cras vestibulum scelerisque neque. Vivamus ultricies eu neque eu dictum. Integer a viverra odio. Nullam vel risus eu ipsum faucibus volutpat faucibus in lectus. Integer non orci vel felis blandit elementum. Nunc sodales, dolor at faucibus ultrices, ex risus dignissim turpis, in elementum lectus arcu quis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum augue eu ante placerat, in sollicitudin libero tristique. Ut feugiat convallis neque eget condimentum. Nulla ullamcorper ante in mi lacinia euismod. Nam pulvinar sem at felis tempus gravida. "));

    return home;
}

const placeHome = () => {
    const page = document.querySelector(".current-page")
    page.textContent = "";
    page.appendChild(homePage());
    
}
export {placeHome as homePage};