function contactTab() {
    const contact = document.createElement("main");
    contact.id = "contact-container";

    const contactTitle = document.createElement("h1");
    contactTitle.id = "contact-title";
    contactTitle.textContent = "Contact Us";

    contact.appendChild(contactTitle);

    const form = document.createElement("form");
    form.id = "contact-form";
    form.setAttribute("action", "#");
    form.setAttribute("autocomplete", "#");

    contact.appendChild(form);

    const firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("name", "first-name");
    firstNameInput.id = "first-name";
    firstNameInput.setAttribute("placeholder", "*First Name");
    firstNameInput.setAttribute("required", "");

    form.appendChild(firstNameInput);

    const lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("name", "last-name");
    lastNameInput.id = "last-name";
    lastNameInput.setAttribute("placeholder", "*Last Name");
    lastNameInput.setAttribute("required", "");

    form.appendChild(lastNameInput);

    const tellInput = document.createElement("input");
    tellInput.setAttribute("type", "tel");
    tellInput.setAttribute("name", "phone-number");
    tellInput.id = "phone-number";
    tellInput.setAttribute("placeholder", "*Phone");
    tellInput.setAttribute("required", "");

    form.appendChild(tellInput);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.id = "email";
    emailInput.setAttribute("placeholder", "*Email");
    emailInput.setAttribute("required", "");

    form.appendChild(emailInput);

    const textArea = document.createElement("textarea");
    textArea.setAttribute("name", "message");
    textArea.id = "message-input";
    textArea.setAttribute("cols", "30");
    textArea.setAttribute("rows", "10");
    textArea.setAttribute("placeholder", "*Message");
    textArea.setAttribute("required", "");

    form.appendChild(textArea);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("type", "button");
    submitBtn.id = "submit-button";

    form.appendChild(submitBtn);

    const content = document.getElementById("content");

    content.appendChild(contact);
}

export default contactTab;
