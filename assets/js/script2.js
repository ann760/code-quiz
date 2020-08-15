var displayQsE1 = document.querySelector("#quiz-question");
var playerChoisesE1 = document.querySelector("#player-choices");
var answerResultE1 = document.querySelector("#answer-result");

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


var displayQuestion = function() {
  var questionE1 = document.createElement("p");
  questionE1.className = "p"; 
  questionE1.textContent = Q1;
  displayQsE1.appendChild(questionE1);
};

var displayOptions = function() {
  var OptionsE1 = document.createElement("button");
  OptionsE1.className = "btn"; 
  OptionsE1.textContent = Opt;
  playerChoisesE1.appendChild(OptionsE1);

};

for (var i = 0; i < questions.length; i++) {
  var Opt = questions[i].options;
  displayOptions() 
  console.log(Opt);  

}

for (var i = 0; i < questions.length; i++) {
  var Q1 = questions[i].question;
  displayQuestion();  
  console.log(Q1);     

};
   

/*
    var answer = confirm(Opt);
      if ((answer === questions[i].correctAnswer)) {
          score ++;
          alert ("correct");
      } else {
        alert ("wrong! the correct answer is " + questions[i].correctAnswer);
      }
//}
alert("Your score is " + score)
*/

