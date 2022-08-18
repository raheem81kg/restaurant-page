function createHeader() {
    const header = document.createElement("header");
    header.id = "nav-container";

    const unorderedList = document.createElement("ul");
    unorderedList.id = "nav-list";
    header.appendChild(unorderedList);

    const li1 = document.createElement("li");
    li1.textContent = "Home";
    li1.id = "home-button";
    unorderedList.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = "Menu";
    li2.id = "menu-button";
    unorderedList.appendChild(li2);

    const li3 = document.createElement("li");
    li3.textContent = "Contact";
    li3.id = "contact-button";
    unorderedList.appendChild(li3);

    const content = document.getElementById("content");
    content.appendChild(header);
}

export default createHeader;
