console.log("index.js loaded");

const inputForm = document.getElementById("form")
const inputTextarea = document.getElementById("text-input");
const translateBtn = document.getElementById("translate-btn");
const errorText = document.getElementById("error-text");
const output = document.getElementById("output");
const textInputted = document.getElementById("text-inputted");
const textTranslated = document.getElementById("text-translated");
const resetBtn = document.getElementById("reset-btn")

inputTextarea.addEventListener("selectionchange", (event) => {
    const textInput = event.target.value;

    if (textInput.length > 50) {
        translateBtn.disabled = true;
        renderError("Text length must be less than 50 characters.")
    } else {
        translateBtn.disabled = false;
        renderError("")
    }
});


inputForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    renderError("");

    const data = new FormData(inputForm);
    const textInput = inputTextarea.value;
    const language = data.get("language");

    try {
        if (!language) {
            throw new Error("A language must be selected.")
        }

        if (!textInput.trim()) {
            throw new Error("Please input text to translate.")
        }

        const translation = await callTranslateAPI(textInput, language);
        renderTranslation(textInput, translation)

    } catch(error) {
        renderError(error.message)
    }
})

resetBtn.addEventListener("click", (event) => {
    reset()
})

async function callTranslateAPI(text, language) {
    try {
        const response = await fetch("/api/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text, language})
        });

        if (!response.ok) {
            const { error } = await response.json();
            throw new Error(error || "Sever returned an unknown error");
        }

        const data = await response.json();
        return data.translation
    } catch(error) {
        console.error("API call failed:", error);
        throw error;
    }
}

function renderTranslation(input, translation) {
    textInputted.textContent = input;
    textTranslated.textContent = translation;

    output.style.display = "flex";
    inputForm.style.display = "none";
}

function reset() {
    inputForm.reset();

    output.style.display = "none";
    inputForm.style.display = "flex";
}

function renderError(error) {
    errorText.textContent = error;
}

reset();