const quizData = [
    {
        question: "What does HTML stand for?",
        Options: [
            "Hyper Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyper Text Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question: "Which property is used for spacing between elements?",
        Options: ["margin", "spacing", "padding", "center"],
        correct: 2,
    },
    {
        question: "Which function is used to select an element by ID?",
        Options: [
            "getElementByClassName",
            "getElementById",
            "document.query",
            "SelectElementId",
        ],
        correct: 1,
    },
    {
        question: "Which tag is used to create an ordered list?",
        Options: ["<ol>", "<li>", "<ul>", "<dl>"],
        correct: 0,
    },
];

let currentQuiz = 0;
let score = 0;

const questionEle = document.getElementById("question");
const options = [document.getElementById("answer_1"), document.getElementById("answer_2"), document.getElementById("answer_3"), document.getElementById("answer_4")];

const loadQuiz = () => {
    const { question, Options } = quizData[currentQuiz];
    questionEle.innerText = question;
    Options.forEach((option, index) => {
        options[index].innerText = option;
    });
};

loadQuiz();

document.getElementById("submit").addEventListener("click", () => {
    const selectedOption = [...document.querySelectorAll('input[name="option"]:checked')];
    if (selectedOption.length > 0) {
        const answer = selectedOption[0].id.split('_')[1] - 1;
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            alert(`You finished! Your score is: ${score}/${quizData.length}`);
        }
    } else {
        alert("Please select an answer!");
    }
});
