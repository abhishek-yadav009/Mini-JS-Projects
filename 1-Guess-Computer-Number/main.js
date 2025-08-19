const computerChoice = document.querySelector("#comp-choice");
const userChoiceInput = document.querySelector("#user-choice");
const updateMessage = document.querySelector("#msg");
const playButton = document.querySelector("#play-btn");

// Generate a random number between 0 and 5
function getRandomComputerChoice() {
    const randomNum = Math.floor(Math.random() * 4);
    return randomNum;
}

playButton.addEventListener("click", () => {
    const randomNum = getRandomComputerChoice();
    const userGuess = Number(userChoiceInput.value);
    computerChoice.innerText = randomNum;
    if (randomNum === userGuess) {
        updateMessage.innerText = "Your guess is Correct";
        updateMessage.style.backgroundColor = "green";
    } else {
        updateMessage.innerText = "Please try again (0-3)";
        updateMessage.style.backgroundColor = "red";
    }
});
