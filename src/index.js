// entrypoint for the app

// importing css
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";
import pageLoad from "./functions/pageLoad";
import homeTab from "./pages/homeTab";
import contactTab from "./pages/contactTab";
import menuTab from "./pages/menuTab";
import clear from "./functions/clear";
import createFooter from "./functions/footer";

pageLoad();

const homeBtn = document.getElementById("home-button");
homeBtn.addEventListener("click", () => {
    clear();
    homeTab();
    createFooter();
});

const contactBtn = document.getElementById("contact-button");
contactBtn.addEventListener("click", () => {
    clear();
    contactTab();
    createFooter();
});

const menuBtn = document.getElementById("menu-button");
menuBtn.addEventListener("click", () => {
    clear();
    menuTab();
    createFooter();
});
