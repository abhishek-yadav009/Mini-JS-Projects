// step 1 get the api for the text
const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
// step 2 get all html element
const quoteDisplayElement = document.querySelector("#quote-display");
const timerElement = document.querySelector("#timer");
const quoteInputElement = document.querySelector("#quoteInput");

// step 3 fetch the api data
async function getRandomQuote() {
    try {
        const response = await fetch(RANDOM_QUOTE_API_URL);
        const quoteData = await response.json();
        return quoteData.content; // return the value
    } catch (error) {
        console.log(error);
    }
}

// step 4 after getting sentence break it into character and put it in span
async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = "";
    quoteInputElement.value = "";

    quote.split("").forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
    });

    
}
// step 5 now its time to work on the value of user input
// so take the user value and break it down and then we will compare it
// with the previous one 
quoteInputElement.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll("span");
    const arrayValue = quoteInputElement.value.split("");
    let correct = true;

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incorrect");
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incorrect");
        } else {
            characterSpan.classList.remove("correct");
            characterSpan.classList.add("incorrect");
            correct = false;
        }
    });
    if (correct) renderNewQuote();
});

renderNewQuote();
