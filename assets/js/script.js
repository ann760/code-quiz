var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var startHideE1 = document.getElementById('quiz-wrapper');
var qQuizE1 = document.getElementById('quiz-questions');
var highScoreInfo = document.getElementById("high-score-info");

var displayQsE1 = document.querySelector("#question");
var playerChoices = document.querySelector("#player-choices");
var playerChoicesE0 = document.querySelector("#option-0");
var playerChoicesE1 = document.querySelector("#option-1");
var playerChoicesE2 = document.querySelector("#option-2");
var playerChoicesE3 = document.querySelector("#option-3");
var questionIndex = 0;

var answerResultE1 = document.querySelector("#answer-result");
var questionIdCounter = 0;
var optionsIdCounter = 0;

var highScoreBtn = document.getElementById('high-score');
var studentScore =  document.querySelector("#student-score");
var studentInfo = document.querySelector("#student-info");

var score = 0;

// creat question array
const questions = [
  {
    question: 'What is the HTML tag under which one can write the JavaScript code?',
    options: [
      'a. <javascript>',
      'b. <scripted>',
      'c. <script>',
      'd. <js>'
    ],
    correctAnswer: 'c. <script>'
  },

  {
    question: 'Who invented javaScript?',
    options: [
      'a. Douglas Crockford',
      'b. Sheryl Sandberg',
      'c. Brendan Eich',
      'd. Zed A. Shaw'
    ],
    correctAnswer: 'c. Brendan Eich'
  },

  {
    question: 'Which of the following is not a reserved word in JavaScript?',
    options: [
      'a. interface',
      'b. throws',
      'c. program',
      'd. short'
    ],
    correctAnswer: 'c. program'
  },

  {
    question: 'Which of the following is a server-side Java Script object?',
    options: [
      'a. file',
      'b. file upload',
      'c. function',
      'd. date'
    ],
    correctAnswer: 'd. date'

  },

];

// create counter
function countdown() {
    var timeLeft = 25;
  
    var timeInterval = setInterval(function(){
    
    timerEl.textContent=(timeLeft);
    if (questionIndex === questions.length) {
      clearInterval(timeInterval);
      if (timeLeft > 0) {
        score + 5
      }
    } 
     else if (timeLeft > 0) {
        timeLeft--;
     } 
     else {
        clearInterval(timeInterval);
        getInfo()
      }
      
  }, 1000);
  
};

  // load quiz questions into p 
  var displayQuestion = function () {
    displayQsE1.textContent = questions[questionIndex].question;

};

  // load quiz options into button
  var displayOptions = function () {
    playerChoicesE0.textContent = questions[questionIndex].options[0];
    playerChoicesE0.setAttribute("value", questions[questionIndex].options[0]);
    playerChoicesE1.textContent = questions[questionIndex].options[1];
    playerChoicesE1.setAttribute("value", questions[questionIndex].options[1]);
    playerChoicesE2.textContent = questions[questionIndex].options[2];
    playerChoicesE2.setAttribute("value", questions[questionIndex].options[2]);
    playerChoicesE3.textContent = questions[questionIndex].options[3];
    playerChoicesE3.setAttribute("value", questions[questionIndex].options[3]);
};

  playerChoicesE0.addEventListener("click", function () {
    if (playerChoicesE0.value === questions[questionIndex].correctAnswer) {
      score++;
      msg = "Correct!"
      result(msg);
  }
    else {
      msg = "Wrong! The correct answer is " + questions[questionIndex].correctAnswer;
      result(msg);
    }

  });

  playerChoicesE1.addEventListener("click", function () {
    if (playerChoicesE1.value === questions[questionIndex].correctAnswer) {
      score++;
      msg = "Correct!"
      result(msg);
    }
    else {
      msg = "Wrong! The correct answer is " + questions[questionIndex].correctAnswer;
      result(msg);
    }
  
  }); 

  playerChoicesE2.addEventListener("click", function () {
    if (playerChoicesE2.value === questions[questionIndex].correctAnswer) {
      score++;
      msg = "Correct!"
      result(msg);
    }
    else {
      msg = "Wrong! The correct answer is " + questions[questionIndex].correctAnswer;
      result(msg);
    }
    
  }); 

  playerChoicesE3.addEventListener("click", function () {
    if (playerChoicesE3.value === questions[questionIndex].correctAnswer) {
      score++;
      msg = "Correct!"
      result(msg);
    }
    else {
      msg = "Wrong! The correct answer is " + questions[questionIndex].correctAnswer;
      result(msg);
    }
    
  }); 

var result = function () {
    answerResultE1.textContent = msg;
    answerResultE1.className ="answer-result"
};

var checkTime = function() {
    if (timerEl > 0){
      score+5
    }
  
};

var isEnd = function() {
  if (questionIndex === questions.length) {
    getInfo()
    
  } 
  else {
    displayQuestion()
    displayOptions()
  };
};

//go to next question
  answerResultE1.addEventListener("click", function () {
    answerResultE1.className ="quiz-hide"
    questionIndex++
    console.log(questionIndex);
    isEnd()
    checkTime()
});
  
//go to next question
var getInfo = function () {
  qQuizE1.className = "quiz-hide";
  studentInfo.className = "quiz-container";
  studentScore.textContent = "Your score is " + score
  //saveHighScore()
};

highScoreBtn.addEventListener("click", function () {
  studentInfo.className = "quiz-hide";
  highScoreInfo.className = "quiz-container";
  event.preventDefault();

  var name = document.querySelector("input[name ='student-name']").value;
  localStorage.setItem("input[name ='student-name']", name);
  localStorage.setItem("score", score);
  
  //check localStorage for high score, 
  var name = document.querySelector("input[name ='student-name']").value;
  console.dir(name);
  var highScoreName = document.querySelector("#high-score-score");
  highScoreName.textContent = name + " has the high score of " + score
  
});

startBtn.addEventListener("click", function() {
  startHideE1.className = "quiz-hide";
  qQuizE1.className = "quiz-questions";
  countdown()
  displayQuestion()
  displayOptions()
});

