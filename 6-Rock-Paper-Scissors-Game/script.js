// sep 1 init the score
let playerScore = 0;
let compScore = 0;

// step 2 
const choiceButtons = document.querySelectorAll(".choice");
const messageDisplay = document.querySelector("#msg");
const playerScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#comp-score");
const restartBtn = document.querySelector(".restart-btn");

// step 3 create funciton to get random computer choice
function getRandomComputerChoice() {
  const choicesArray = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
}

// step 4 function to get user choice
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("id");
    playRound(playerChoice);
  });
});
// step 5 Draw function {message}
function handleDraw() {
  messageDisplay.innerText = "It's a Draw! Play again.";
  messageDisplay.style.backgroundColor = "black";
}

// step 6 player win function {message}
function playerWin(playerChoice, computerChoice) {
  messageDisplay.innerText = `You win! ${playerChoice} beats ${computerChoice}`;
  messageDisplay.style.backgroundColor = "green";
}
// step 7 player loose function {message}
function playerLoose(playerChoice, computerChoice) {
  messageDisplay.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
  messageDisplay.style.backgroundColor = "red";
}

// combining all in one function or the main one

function playRound(playerChoice) {
  const computerChoice = getRandomComputerChoice();

  if (playerChoice === computerChoice) {
    handleDraw();
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerWin(playerChoice, computerChoice);
  } else {
    compScore++;
    playerLoose(playerChoice, computerChoice);
  }
  // Update scores in UI:
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = compScore;
}

restartBtn.addEventListener("click",()=>{
  playerScore = 0
  compScore = 0

  computerScoreDisplay.innerText = compScore
  playerScoreDisplay.innerText = playerScore
})
