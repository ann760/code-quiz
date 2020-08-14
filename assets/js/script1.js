var highscoreE1 = document.getElementById('hightscore')
 


  function setHighScore() {
      
  }

  function showHighScore() {
    var name = document.querySelector("#name").value;
    var highscore = document.querySelector("#highscore").innerHTML = highscore;
    
    console.log(highscore);
    highscoreE1.textContent=(highscore);


    localStorage.setItem("name", name);
    localStorage.setItem("hightscore", highscore);
    
  };

  
 //highscoreE1.onclick = showHighscore;