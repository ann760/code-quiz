var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var startHideE1 = document.getElementById('quiz-wrapper');
var qQuizE1 = document.getElementById('quiz-questions');
var displayQsE1 = document.querySelector("#quiz-question");
var playerChoisesE0 = document.querySelector("#option-0");
var playerChoisesE1 = document.querySelector("#option-1");
var playerChoisesE2 = document.querySelector("#option-2");
var playerChoisesE3 = document.querySelector("#option-3");
var questionIndex = 0;

var answerResultE1 = document.querySelector("#answer-result");
var questionIdCounter = 0;
var optionsIdCounter = 0;

var score = 0;

// creat question array
const questions = [
  {
    question: 'What is the HTML tag under which one can write the JavaScript code?',
    options: [
      'a <javascript>',
      'b <scripted>',
      'c <script>',
      'd <js>'
    ],
    correctAnswer: 'c'
  },

  {
    question: 'Who invented javaScript?',
    options: [
      'a. Douglas Crockford',
      'b. Sheryl Sandberg',
      'c. Brendan Eich'
    ],
    correctAnswer: 'c'
  },

  {
    question: 'Which of the following is not a reserved word in JavaScript?',
    options: [
      'a. interface',
      'b. throws',
      'c. program',
      'd. short'
    ],
    correctAnswer: 'c'
  },

  {
    question: 'Which of the following is a server-side Java Script object?',
    options: [
      'a. file',
      'b. file upload',
      'c. function',
      'd. date'
    ],
    correctAnswer: 'd'

  },

];

// create counter
function countdown() {
    var timeLeft = 25;
  
    var timeInterval = setInterval(function(){
    
    timerEl.textContent=(timeLeft);
    if (timeLeft > 0) {
    timeLeft--;
    } else {
      clearInterval(timeInterval);
    alert("End the quiz");
    //endQuiz()
    }
  }, 1000)
  };

// load quiz questions into p 
var displayQuestion = function () {
  displayQsE1.textContent = questions[questionIndex].question;
};
// load quiz options into button
var displayOptions = function () {
  playerChoisesE0.textContent = questions[questionIndex].options[0];
  playerChoisesE1.textContent = questions[questionIndex].options[1];
  playerChoisesE2.textContent = questions[questionIndex].options[2];
  playerChoisesE3.textContent = questions[questionIndex].options[3];
};

playerChoisesE2.addEventListener("click", function () {
  if (playerChoisesE2 === questions[questionIndex].correctAnswer) {
    score++;
    msg = "Correct";
    alert(correct);
    result(msg);
  } else {
    msg = "Wrong! The correct answer is " + questions[questionIndex].correctAnswer;
    result(msg);
  }
  
});
    
var result = function () {
  var resultE1 = document.createElement("p");
  resultE1.className = "p";
  resultE1.textContent = msg;
  answerResultE1.appendChild(resultE1);
  questionIndex++
  console.log(questionIndex);
};

  //go to next question


startBtn.addEventListener("click", function() {
  startHideE1.className = "quiz-hide";
  qQuizE1.className = "quiz-container";
  countdown()
  displayQuestion()
  displayOptions()

});
