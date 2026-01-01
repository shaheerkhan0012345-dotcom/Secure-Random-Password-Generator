const question = [
    {
        question: "Which Is The Largest Animal In The World?",
        answers: [
            { text: "Shark", Correct: false },
            { text: "Blue Whale", Correct: true },
            { text: "Elephant", Correct: false },
            { text: "Giraffe", Correct: false },
        ]
    },
    {
        question: "Which Is The Smallest Country In The World?",
        answers: [
            { text: "India", Correct: false },
            { text: "Vatican City", Correct: true },
            { text: "Pakistan", Correct: false },
            { text: "Nepal", Correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;


    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.Correct) {
            button.dataset.correct = answer.Correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    nextButton.style.display = "block";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("Correct");
        score++;
    } else {
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("Correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}



    function showscore(){
        resetState();
        questionElement.innerHTML =`you scored ${score} out of ${question.length}!`;
        nextButton.innerHTML = "Play Again"
        nextButton.setHTMLUnsafe.display = "block"
    }

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showscore();
    }

}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
