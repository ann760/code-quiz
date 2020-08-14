var nameInput = document.querySelector("name");
var scoreInput = document.querySelector("score");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
var highscoreE1 = document.getElementById('hightscore')
 

function displayHighscore() {
    var email = localStorage.getItem("name");
    var score = localStorage.getItem("score");
  
    if (email && score === null) {
      return;
    }
  
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
  }

  nameButton.addEventListener("click", function (event) {
      
    var name = document.querySelector("#name").value;
    var highscore = document.querySelector("#highscore").innerHTML = highscore;
        if (email === ""){
            
        }
    console.log(highscore);
    highscoreE1.textContent=(highscore);


    localStorage.setItem("name", name);
    localStorage.setItem("hightscore", highscore);
    function displayHighscore()

    });