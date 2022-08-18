const createFooter = function () {
    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.innerHTML = 'created by <a href="https://github.com/raheem81kg">raheem81kg</a>';

    const content = document.getElementById("content");
    content.appendChild(footer);
};

export default createFooter;
