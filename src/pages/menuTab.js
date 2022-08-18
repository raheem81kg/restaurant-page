import ImageIcon1 from "../assets/images/item1.jpg";
import ImageIcon2 from "../assets/images/item2.jpg";
import ImageIcon3 from "../assets/images/item3.jpeg";
import ImageIcon4 from "../assets/images/item4.jpg";
import ImageIcon5 from "../assets/images/item5.jpeg";
import ImageIcon6 from "../assets/images/item6.jpg";
import ImageIcon7 from "../assets/images/item7.jpg";
import ImageIcon8 from "../assets/images/item8.jpg";

const menuTab = function () {
    const menu = document.createElement("main");
    menu.id = "menu-container";

    // item 1
    const menuItemContainer = document.createElement("div");
    menuItemContainer.className = "menu-item-container";

    const itemImg1 = document.createElement("img");
    itemImg1.id = "item-image";
    itemImg1.src = ImageIcon1;
    itemImg1.alt = "menu item 1";

    menuItemContainer.appendChild(itemImg1);

    const productDescription = document.createElement("div");
    productDescription.className = "product-description";

    menuItemContainer.appendChild(productDescription);

    const productTitle = document.createElement("h2");
    productTitle.textContent = "ADOBO IN OLIVE OIL";
    productTitle.id = "product-title";

    productDescription.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.id = "product-price";
    productPrice.textContent = "JMD 280.00";

    productDescription.appendChild(productPrice);

    menu.appendChild(menuItemContainer);

    // item 2
    const menuItemContainer2 = document.createElement("div");
    menuItemContainer2.className = "menu-item-container";

    const itemImg2 = document.createElement("img");
    itemImg2.id = "item-image";
    itemImg2.src = ImageIcon2;
    itemImg2.alt = "menu item 2";

    menuItemContainer2.appendChild(itemImg2);

    const productDescription2 = document.createElement("div");
    productDescription2.className = "product-description";

    menuItemContainer2.appendChild(productDescription2);

    const productTitle2 = document.createElement("h2");
    productTitle2.textContent = "BEEF KALDERETA WITH OLIVES";
    productTitle2.id = "product-title";

    productDescription2.appendChild(productTitle2);

    const productPrice2 = document.createElement("p");
    productPrice2.id = "product-price";
    productPrice2.textContent = "JMD 280.00";

    productDescription2.appendChild(productPrice2);

    menu.appendChild(menuItemContainer2);

    // item 3
    const menuItemContainer3 = document.createElement("div");
    menuItemContainer3.className = "menu-item-container";

    const itemImg3 = document.createElement("img");
    itemImg3.id = "item-image";
    itemImg3.src = ImageIcon3;
    itemImg3.alt = "menu item 3";

    menuItemContainer3.appendChild(itemImg3);

    const productDescription3 = document.createElement("div");
    productDescription3.className = "product-description";

    menuItemContainer3.appendChild(productDescription3);

    const productTitle3 = document.createElement("h2");
    productTitle3.textContent = "BEEF SIOMAI";
    productTitle3.id = "product-title";

    productDescription3.appendChild(productTitle3);

    const productPrice3 = document.createElement("p");
    productPrice3.id = "product-price";
    productPrice3.textContent = "JMD 175.00";

    productDescription3.appendChild(productPrice3);

    menu.appendChild(menuItemContainer3);

    // item 4
    const menuItemContainer4 = document.createElement("div");
    menuItemContainer4.className = "menu-item-container";

    const itemImg4 = document.createElement("img");
    itemImg4.id = "item-image";
    itemImg4.src = ImageIcon4;
    itemImg4.alt = "menu item 4";

    menuItemContainer4.appendChild(itemImg4);

    const productDescription4 = document.createElement("div");
    productDescription4.className = "product-description";

    menuItemContainer4.appendChild(productDescription4);

    const productTitle4 = document.createElement("h2");
    productTitle4.textContent = "BINUSOG NA LECHON";
    productTitle4.id = "product-title";

    productDescription4.appendChild(productTitle4);

    const productPrice4 = document.createElement("p");
    productPrice4.id = "product-price";
    productPrice4.textContent = "JMD 1,460.00";

    productDescription4.appendChild(productPrice4);

    menu.appendChild(menuItemContainer4);

    // item 5
    const menuItemContainer5 = document.createElement("div");
    menuItemContainer5.className = "menu-item-container";

    const itemImg5 = document.createElement("img");
    itemImg5.id = "item-image";
    itemImg5.src = ImageIcon5;
    itemImg5.alt = "menu item 5";

    menuItemContainer5.appendChild(itemImg5);

    const productDescription5 = document.createElement("div");
    productDescription5.className = "product-description";

    menuItemContainer5.appendChild(productDescription5);

    const productTitle5 = document.createElement("h2");
    productTitle5.textContent = "CHICKEN SIOMAI";
    productTitle5.id = "product-title";

    productDescription5.appendChild(productTitle5);

    const productPrice5 = document.createElement("p");
    productPrice5.id = "product-price";
    productPrice5.textContent = "JMD 155.00";

    productDescription5.appendChild(productPrice5);

    menu.appendChild(menuItemContainer5);

    // item 6
    const menuItemContainer6 = document.createElement("div");
    menuItemContainer6.className = "menu-item-container";

    const itemImg6 = document.createElement("img");
    itemImg6.id = "item-image";
    itemImg6.src = ImageIcon6;
    itemImg6.alt = "menu item 6";

    menuItemContainer6.appendChild(itemImg6);

    const productDescription6 = document.createElement("div");
    productDescription6.className = "product-description";

    menuItemContainer6.appendChild(productDescription6);

    const productTitle6 = document.createElement("h2");
    productTitle6.textContent = "CHILI BINAGOONGAN BABOY";
    productTitle6.id = "product-title";

    productDescription6.appendChild(productTitle6);

    const productPrice6 = document.createElement("p");
    productPrice6.id = "product-price";
    productPrice6.textContent = "JMD 280.00";

    productDescription6.appendChild(productPrice6);

    menu.appendChild(menuItemContainer6);

    // item 7
    const menuItemContainer7 = document.createElement("div");
    menuItemContainer7.className = "menu-item-container";

    const itemImg7 = document.createElement("img");
    itemImg7.id = "item-image";
    itemImg7.src = ImageIcon7;
    itemImg7.alt = "menu item 7";

    menuItemContainer7.appendChild(itemImg7);

    const productDescription7 = document.createElement("div");
    productDescription7.className = "product-description";

    menuItemContainer7.appendChild(productDescription7);

    const productTitle7 = document.createElement("h2");
    productTitle7.textContent = "HAKAW";
    productTitle7.id = "product-title";

    productDescription7.appendChild(productTitle7);

    const productPrice7 = document.createElement("p");
    productPrice7.id = "product-price";
    productPrice7.textContent = "JMD 320.00";

    productDescription7.appendChild(productPrice7);

    menu.appendChild(menuItemContainer7);

    // item 8
    const menuItemContainer8 = document.createElement("div");
    menuItemContainer8.className = "menu-item-container";

    const itemImg8 = document.createElement("img");
    itemImg8.id = "item-image";
    itemImg8.src = ImageIcon8;
    itemImg8.alt = "menu item 8";

    menuItemContainer8.appendChild(itemImg8);

    const productDescription8 = document.createElement("div");
    productDescription8.className = "product-description";

    menuItemContainer8.appendChild(productDescription8);

    const productTitle8 = document.createElement("h2");
    productTitle8.textContent = "JAPANESE NORI SIOMAI";
    productTitle8.id = "product-title";

    productDescription8.appendChild(productTitle8);

    const productPrice8 = document.createElement("p");
    productPrice8.id = "product-price";
    productPrice8.textContent = "JMD 220.001";

    productDescription8.appendChild(productPrice8);

    menu.appendChild(menuItemContainer8);

    const content = document.getElementById("content");

    content.appendChild(menu);
};

export default menuTab;
