const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const addQuestionForm = document.getElementById('addQuestionForm');

addQuestionForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newQuestion = document.getElementById('newQuestion').value;
    const newOptions = document.getElementById('newOptions').value.split(',');
    const newCorrectAnswer = document.getElementById('newCorrectAnswer').value;

    if (newQuestion && newOptions.length && newCorrectAnswer) {
        const newQuestionObj = {
            question: newQuestion,
            options: newOptions.map(option => option.trim()),
            correctAnswer: newCorrectAnswer.trim()
        };

        questions.push(newQuestionObj);
        alert('New question added successfully!');
        showQuestion();
        // Clear form fields
        document.getElementById('newQuestion').value = '';
        document.getElementById('newOptions').value = '';
        document.getElementById('newCorrectAnswer').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'option';
        radioBtn.value = option;
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

});
prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        showQuestion();
    }
    else {
        currentQuestionIndex[0].disabled = true;
    }
})





showQuestion();




// function Click() {
//     let c = 0;
//     let q1 = document.quiz.question1.value;
//     let q2 = document.quiz.question2.value;
//     let q3 = document.quiz.question3.value;
//     let q4 = document.quiz.question4.value;
//     let q5 = document.quiz.question5.value;
//     let q6 = document.quiz.question6.value;
//     let q7 = document.quiz.question7.value;
//     let q8 = document.quiz.question8.value;
//     let q9 = document.quiz.question9.value;
//     let q10 = document.quiz.question10.value;
//     if (q1 == "Guido van Rossum") {
//         c++
//     }
//     if (q2 == "None of the mentioned") {
//         c++
//     }
//     if (q3 == "7") {
//         c++;
//     }
//     if (q4 == "def") {
//         c++;
//     }
//     if (q5 == "#") {
//         c++;
//     }
//     if (q6 == "DECIMAL") {
//         c++;
//     }
//     if (q7 == "TRUNCATE") {
//         c++;
//     }
//     if (q8 == "Only 1") {
//         c++;

//     }
//     if (q9 == "COMPUTE") {
//         c++;
//     }
//     if (q10 == "ALTER") {
//         c++;
//     }
//     document.write("<h1>You scored " + c + " out of 10</h1>");
// }