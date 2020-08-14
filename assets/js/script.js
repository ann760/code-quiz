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
    }
  }, 1000)
  };

function start(){
  startHideE1.className = "#quiz-hide";
  qQuizE1.className = "#quiz-show";
  countdown()
  
};



startBtn.onclick = start;