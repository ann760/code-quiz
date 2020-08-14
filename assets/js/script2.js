var displayQs = document.querySelector("quiz-question");

const questions = [
    {q: "The sky is blue?", a: true},
    {q: "Grass is green?", a: true},
    {q: "dog goes bark?", a: true},
    {q: "What does the fox say?", a: false}
]

var score = 0;

function createQuiz () {
    var displayQs = document.createElement("quiz-container");
        for (var i = 0; i < questions.length; i++) {
        displayQs.textContent = (questions[i].q);
        displayQs.className = "#quiz-container";
    
}
};
createQuiz ()
//Loop
function quiz(){
    
for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].a);

    confirm(questions[i].q);

    var answer = (questions[i].a);
    if (answer == questions[i].a) {
        score ++
        alert ("correct");
    }
}
alert("Your score is " + score)
};

//quiz()

