var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var startHideE1 = document.getElementById('quiz-wrapper');
var qQuizE1 = document.getElementById('quiz-questions');


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


startBtn.addEventListener("click", function() {
  startHideE1.className = "#quiz-hide";
  qQuizE1.className = "#quiz-show";
  countdown()
  quiz()

});
