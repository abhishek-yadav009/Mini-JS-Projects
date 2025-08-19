const questionElement = document.querySelector("#question");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.querySelector("#next-btn");

let currQuestionIndex = 0;
let score = 0;


function showQuestion(index) {
    const currQuestion = questions[index];
    questionElement.innerText = currQuestion.question;

    answerButtons.forEach((btn, i) => {
        const currAnswer = currQuestion.answers[i].text;
        btn.innerText = currAnswer;
        btn.dataset.correct = currQuestion.answers[i].correct;

        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.disabled = false;
    });
}

answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        answerButtons.forEach(b => {
            if (b.dataset.correct === "true") {
                b.style.backgroundColor = "green";
                b.style.color = "white";

                if (btn.dataset.correct !== "true") {
                    btn.style.backgroundColor = "red";
                    btn.style.color = "white";
                }
            }
        });
        answerButtons.forEach(b => b.disabled = true);

        nextButton.style.display = "block";
    });
});

nextButton.addEventListener("click", () => {
    currQuestionIndex++

    if (currQuestionIndex < questions.length) {
        showQuestion(currQuestionIndex);
    } else {
        alert("quiz finished")
        currQuestionIndex = 0
        showQuestion(currQuestionIndex)
    }
})


showQuestion(currQuestionIndex);

