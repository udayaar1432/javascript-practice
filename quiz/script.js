const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris",
        actualkey: "0"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale",
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const prevButton = document.getElementById('prevButton');
const addQuestionForm = document.getElementById('addQuestionForm');


const timeLeftDisplay = document.getElementById('timeLeftDisplay');
const questionTime = 30;
let timeLeft = questionTime;
let timerInterval;

function startTimer() {
    timeLeft = questionTime;
    timeLeftDisplay.textContent = timeLeft;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            checkAnswer();
            showNextQuestion();
        }
    }, 1000);
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
});
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
} else {
    body.classList.add('light');
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    console.log(currentQuestion.actualKey);
    currentQuestion.options.forEach((option, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'option';
        radioBtn.value = option;
        radioBtn.checked = option == currentQuestion.actualKey
        optionsElement.appendChild(radioBtn);

        const label = document.createElement('label');
        label.textContent = option;
        optionsElement.appendChild(label);

        optionsElement.appendChild(document.createElement('br'));
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        return false;
    }
    questions[currentQuestionIndex].actualKey = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];
    return selectedOption.value === currentQuestion.correctAnswer;
}

nextButton.addEventListener('click', () => {
    if (checkAnswer()) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        alert('Quiz is over!');
        nextButton.disabled = true;
    }

    if (currentQuestionIndex < questions.length) {
        startTimer();
        showQuestion();
        questionSelector.value = currentQuestionIndex;
        prevButton.disabled = false;
    } else {
        alert('Quiz is over!');
        nextButton.disabled = true;
        stopTimer();
    }

});
prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        showQuestion();
    }
    else {
        currentQuestionIndex[0].disabled = true;
    }

    if (currentQuestionIndex >= 0) {
        showQuestion();
        questionSelector.value = currentQuestionIndex;
        nextButton.disabled = false;
    } else {
        currentQuestionIndex = 0;
    }
})

showQuestion();
