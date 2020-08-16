

highScoreBtn.addEventListener("click", function (event) {

      //check localStorage for high score, if it's not there, use 0
      var highScore = localStorage.getItem("highscore");
      var name = localStorage.getItem("name");
      var score = localStorage.getItem("score");
  
      if (highScore === null) {
        highScore = 0;
      }
      //if player have more time add to score.
      if (score > highScore) {
        localStorage.setItem("highscore", highscore);
        localStorage.setItem("name", name);
    
        alert(name + " has the high score of " + timerEl + "!");
      } 
      else {
        alert(name + " did not beat the high score of " + highScore);
      }
    
      // ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");
    
      if (playAgainConfirm) {
        startQuiz();
      } 
      else {
        window.alert("Thank you for playing!");
      };
    