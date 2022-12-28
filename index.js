var score = 0;
var highScores = [
  {
    name: "Jagadeesh",
    score: 4,
  },
  {
    name: "Rmn",
    score: 3,
  },
]

//2. Questions to display
var questions = [
  {
    question: "1. What is my most called Nickname?\n",
    answer: "Jaggu"
  },
  {
    question: "2. Who is my favorite Cricketer?\n",
    answer: "Ms Dhoni"
  },
  {
    question: "3. Where do I live?\n",
    answer: "Vijayawada"
  },
  {
    question: "4. What is the thing that I am passionate of?\n",
    answer: "Travel"
  }
];

// Step 1. Intro 
var readlineSync = require("readline-sync");
console.log("Hurray! You entered the Jagadeesh's Quiz!");
var name = readlineSync.question("What is ur name?\n");
console.log("Hi! " + name);
console.log("______________________________");
var entry = readlineSync.question("1.Enter Ding to start answering d qns.\n2.Enter exit to end the session\n");
console.log("______________________________");
if (entry === "Ding") {
  console.log("***How well do you know me?***");
  game();
  scores();
}
else {
  console.log("Exited successfully. Happy day!");
}


function process(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("_____________________________")
}


function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    process(currentQuestion.question, currentQuestion.answer)
  }
}

function scores() {
  console.log("Wooah! Your final score is: ", score);
  console.log("Check out the high scores of the QUiz!");

  highScores.map(score => console.log(score.name, " : ", score.score))
}





