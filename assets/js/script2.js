var displayQsE1 = document.querySelector("#quiz-question");
var playerChoisesE1 = document.querySelector("#player-choices");
var answerResultE1 = document.querySelector("#answer-result");
var questionIdCounter = 0;
var optionsIdCounter = 0;


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

var score = 0;

// create quiz questions p 
var displayQuestion = function() {
  var questionE1 = document.createElement("p");
  questionE1.className = "p"; 
  questionE1.setAttribute("question-id", questionIdCounter);
  questionE1.textContent = Q1;
  displayQsE1.appendChild(questionE1);
  questionIdCounter++
};
// create quiz options button
var displayOptions = function() {
  var OptionsE1 = document.createElement("button");
  OptionsE1.className = "btn"; 
  OptionsE1.setAttribute("options-id", optionsIdCounter);
  OptionsE1.textContent = Opt;
  playerChoisesE1.appendChild(OptionsE1);
  optionsIdCounter++
};

// loop through questions and options
for (var i = 0; i < questions.length; i++) {
  var Q1 = questions[i].question;
  displayQuestion();  
  console.log(Q1);    
  
  for (var i = 0; i < questions.length; i++) {
    var Opt = questions[0].options[i];
    displayOptions() 
    console.log(Opt);
  
    // return result
  }
}

  playerChoisesE1.addEventListener("click", function() {
    var playerChoisesE1 = confirm(questions[i].question)
    if (playerChoisesE1 === questions[i].correctAnswer) {
      score ++;
      msg = "Correct";
    } else {
      msg = "Wrong! The correct answer is " + questions[i].correctAnswer;
  };
    var resultE1 = document.createElement("p");
    resultE1.className = "p"; 
    resultE1.textContent = msg;
    answerResultE1.appendChild(resultE1);
  });

  var choiceHandler = function(event) {
 
    var optionId = event.target;
    console.log(optionId);
    if (optionId.matches(".btn")){
    var optionId = event.target.getAttribute("option-id");
    console.log(optionId);
    }

  };

 
