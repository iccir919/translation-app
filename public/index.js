console.log("index.js loaded");

const inputForm = document.getElementById("form")
const inputTextarea = document.getElementById("text-input");
const translateBtn = document.getElementById("translate-btn");
const errorText = document.getElementById("error-text")

inputTextarea.addEventListener("selectionchange", (event) => {
    const input = event.target.value;

    if (input.length > 50) {
        translateBtn.disabled = true;
        renderError("Text length must be less than 50 characters.")
    } else {
        translateBtn.disabled = false;
        renderError("")
    }
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!")
})



function renderError(error) {
    errorText.textContent = error;
}
