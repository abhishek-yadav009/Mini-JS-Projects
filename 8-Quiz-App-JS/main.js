const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Element", correct: false },
            { text: "Giraffe", correct: false },
        ]

    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]

    }
]

const questionElement = document.querySelector("#question")
const answerButton = document.querySelector("#answer-buttons")
const nextButton = document.querySelector("#next-btn")
const btn = document.querySelectorAll(".btn")

// at first we need to init the index
let currQuestionIndex = 0

// here we create a function and pass the perimeter  for currquestions
function showQuestion(index) {
    const currQuestion = questions[index]
    questionElement.innerText = currQuestion.question


    // this is for showing all the answers in their box
    btn.forEach((btn, i) => {
        const currAnswer = currQuestion.answers[i].text
        btn.innerText = currAnswer
    })
}



showQuestion(currQuestionIndex)













