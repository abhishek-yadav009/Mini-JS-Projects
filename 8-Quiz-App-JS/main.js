// Step 1: Access all the DOM elements
const questionElement = document.querySelector("#question")
const answerButtons = document.querySelectorAll(".btn")
const nextButton = document.querySelector("#next-btn")

let currQuestionIndex = 0
let score = 0

// Step 2: Show all the questions and answers
function showQuestion(index) {
    const currQuestion = questions[index]
    questionElement.innerText = currQuestion.question

    answerButtons.forEach((btn, i) => {
        btn.innerText = currQuestion.answers[i].text
        btn.dataset.correct = currQuestion.answers[i].correct

        // Reset styles
        btn.style.backgroundColor = ""
        btn.style.color = ""
        btn.disabled = false
    });
    
    nextButton.style.display = "none"
}

// Step 3: Add event listener that changes background
// if it's the correct answer then green, and wrong then red
answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.correct === "true") {
            btn.style.backgroundColor = "green"
            btn.style.color = "white"
            score++
        } else {
            btn.style.backgroundColor = "red"
            btn.style.color = "white"
        }

        // Step 4: Change the background of the correct answer after clicking any button
        answerButtons.forEach(b => {
            if (b.dataset.correct === "true") {
                b.style.backgroundColor = "green"
                b.style.color = "white"
            }
            b.disabled = true
        })
        nextButton.style.display = "block"
    })
})

// Step 5: Next button functionality — it might be confusing but it's amazing
nextButton.addEventListener("click", () => {
    // Restart if finished
    if (currQuestionIndex >= questions.length) {
        restartQuiz()
    } else {
        currQuestionIndex++
        if (currQuestionIndex < questions.length) {
            showQuestion(currQuestionIndex)
        } else {
            showScore()
        }
    }
})

// Step 6: Score page that will show your score
function showScore() {
    questionElement.innerText = `Quiz Finished! Your score: ${score} / ${questions.length}`

    // Hide buttons
    answerButtons.forEach(btn => (btn.style.display = "none"))
    nextButton.style.display = "block"
    nextButton.innerText = "Restart Quiz"
}

// At the end: Function that will restart your quiz
// Do not add two actions to your next button with addEventListener
// It has a high probability to run an infinite loop on one question as per my experience
function restartQuiz() {
    score = 0
    currQuestionIndex = 0
    answerButtons.forEach(btn => {
        btn.style.display = "inline-block"
        btn.style.backgroundColor = ""
        btn.style.color = ""
    })
    nextButton.innerText = "Next"
    showQuestion(currQuestionIndex)
}

// Start first question
showQuestion(currQuestionIndex)
