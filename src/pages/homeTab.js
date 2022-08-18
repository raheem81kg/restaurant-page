import Icon from "../assets/images/icon.png";

const homeTab = function () {
    const home = document.createElement("main");
    home.id = "home-container";

    const img = document.createElement("img");
    img.id = "home-icon";
    img.src = Icon;
    img.alt = "viking logo";

    home.appendChild(img);

    const content = document.getElementById("content");
    content.appendChild(home);
};

export default homeTab;
