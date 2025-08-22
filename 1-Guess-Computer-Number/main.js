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
    updateMessage.style.display = "block"
    playButton.innerText = "Go enter your value"
    if (randomNum === userGuess) {
        updateMessage.innerText = `Your guess is Correct`;
        updateMessage.style.backgroundColor = "green";
        playButton.style.backgroundColor = "green"
    } else {
        updateMessage.innerText = `Comp :${randomNum}  Your: ${userGuess}`
        updateMessage.style.backgroundColor = "red";
        playButton.style.backgroundColor = "red"
    }
    playButton.disabled= true
    userChoiceInput.value = ""
});

userChoiceInput.addEventListener("click",()=>{
    playButton.disabled = false
    playButton.innerText = "Check"
    updateMessage.style.display = "none"
    playButton.style.backgroundColor = ""
    computerChoice.innerText = "Comp"


})

