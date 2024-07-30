// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Getting elements from html
const submitButton = document.querySelector("#submit-button");
const contactPage = document.querySelector("#contact-page");


function submitEventHandler(){
    contactPage.innerHTML = `<p>Thank you for your message!</p>`;
}


submitButton.addEventListener("click", submitEventHandler);