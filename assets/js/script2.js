var displayQs = document.querySelector("quiz-question");

const questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: {
          a: "<javascript>",
          b: "<scripted>",
          c: "<script>",
          d: "<js>"
        },
        correctAnswer: "c"
    },

    {
        question: "Who invented javaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
    },

    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: {
          a: "interface",
          b: "throws",
          c: "program",
          d: "short" 
        },
        correctAnswer: "c"
    },

    {
        question: "Which of the following is a server-side Java Script object?",
        answers: {
          a: "file", 
          b: "file upload",
          c: "function",
          d: "date"
        },
        correctAnswer: "d"

    }, 
    
    ];

var score = 0;

createQuiz ()
//Loop
function quiz(){
    var displayQs = document.createElement("quiz-container");
    displayQs.className = "#quiz-container";
    for (var i = 0; i < questions.length; i++) {
    displayQs.textContent = (questions[i].q);
    console.log(questions[i].correctAnswer);

    confirm(questions[i].question);

    var answer = (questions[i].correctAnswer);
    if (answer === questions[i].correctAnswer) {
        score ++;
        alert ("correct");
    }
}
alert("Your score is " + score)
};

quiz()
