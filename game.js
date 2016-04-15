var counter = 0;
var questions = [
  "Was I born in Vancouver?",
  "Do I have a cat?",
  "Is my hair dark?",
  "How old am I?",
  "Guess my number.",
];
var correctAn = [
  "That's right, " + userName + "! I was born in Seattle!",
  "That's right, " + userName + "!",
  "Yay, " + userName + "! You got it right!",
];
var wrongAns = [
  "I wasn't born in Vancouver, " + userName + ". I was born in Seattle!",
  "Ooops! I do have a cat, " + userName + ".",
  "Sorry, wrong answer. I am not blonde, " + userName + "!",
];
var answers = [
  "NO",
  "YES",
  "YES",
  26,
];
var wrongAnswers = [
  "YES",
  "NO",
  "NO",
];
var el = [
  document.getElementById('one'),
  document.getElementById('two'),
  document.getElementById('three'),
  document.getElementById('four'),
];

function game(questions, answers, wrongAns, correctAn) {
  var userInput = (prompt(questions).toUpperCase());
  if (isNaN(parseInt(userInput))) {
    console.log(userInput);
    if ((userInput === answers) || (userInput === answers.substr(0,1))) {
      counter++;
      el[i].textContent = correctAn;
    } else {
      el[i].textContent = wrongAns;
    }
  } else if (answers === 26) {
    if (parseInt(userInput) === answers) {
      el[i].textContent = ("You guessed, right, " + userName + "!");
      counter++;
    } else if (userInput < 26) {
      el[i].textContent = ("That guess is too low.");
    } else {
      el[i].textContent = ("That guess is too high.");
    }
  } else {
    while (parseInt(userInput) !== 7) {
      console.log(userInput);
      userInput = parseInt(prompt("Guess my number again."));
    }
  }
}

var userName = prompt("What is your name?");
console.log("User input for userName: " + userName);
alert("Hello! Welcome to my page " + userName + "!" );

for (i = 0; i < questions.length; i++) {
  game(questions[i],answers[i], wrongAns[i], correctAn[i], el[i]);
}

score.textContent = ("You got " + counter + " out of 4 answers correct!");
