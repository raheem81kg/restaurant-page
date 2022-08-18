// removes children till only header remains as the sole children
const clear = function () {
    const content = document.querySelector("#content");

    while (content.children.length > 1) {
        content.children[1].remove();
    }
};

export default clear;
