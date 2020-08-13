var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');

var highscoreE1 = document.getElementById('hightscore')
var 

function countdown() {
    var timeLeft = 25;
  
    var timeInterval = setInterval(function(){
    console.log(timeLeft);
    timerEl.textContent=(timeLeft);
    if (timeLeft > 0) {
    timeLeft--;
    } else {
      clearInterval(timeInterval);
    alert("Time is up");
    }
  })
  };

  function setHighScore() {
      
  }

  function showHighScore() {
    var name = document.querySelector("#name").value;
    var highscore = document.querySelector("#highscore").value;
    
    console.log(highscore);
    highscoreE1.textContent=(highscore);


    localStorage.setItem("name", name);
    localStorage.setItem("hightscore", highscore);
    
  };

  startBtn.onclick = countdown;
  highscoreE1.onclick = showHighscore;
