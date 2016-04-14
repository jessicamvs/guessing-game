var userName = prompt("What is your name?");
console.log("User input for userName: " + userName);
alert("Hello! Welcome to my page " + userName + "!" );


var counter = 0;
var questions = [
  "Was I born in Vancouver?",
  "Do I have a cat?",
  "Is my hair dark?",
  "Guess my number.",
];
var correctAn = [
  "That's right, " + userName + "! I was born in Seattle!",
  "That's right, " + userName + "!",
  "Yay, " + userName + "! You got it right!",
];
var wrongAn = [
  "I wasn't born in Vancouver, " + userName + ". I was born in Seattle!",
  "Ooops! I do have a cat, " + userName + ".",
  "Sorry, wrong answer. I am not blonde, " + userName + "!",
];
var answers = [
  "NO",
  "YES",
  "YES",
];
var el = [
  document.getElementById('one'),
  document.getElementById('two'),
  document.getElementById('three'),
];

function game(questions, answers, wrongAn, correctAn){
  var userInput = parseInt(prompt(questions).toUpperCase());
  console.log(userInput);
  if (userInput === answers) {
    counter++;
    el[i].textContent = correctAn;
  } else if (parseInt(userInput) !== 'string') {
    while (userInput !== 7) {
      userInput = parseInt(prompt("Guess my number again."));
    }
  } else {
    el[i].textContent = wrongAn;
  }
}


for (i = 0; i < questions.length; i++){
  game(questions[i],answers[i], wrongAn[i], correctAn[i], el[i]);
}
score.textContent = ("You got " + counter + " out of 4 answers correct!");
//
// var num = parseInt(prompt("Guess my number."));
// while (num !== 7) {
//   num = parseInt(prompt("Guess my number again."));
// }




// function game(questions, answers, wrongAn, correctAn){
//   var userInput = prompt(questions).toUpperCase();
//   console.log(typeof userInput);
//   if (userInput === answers) {
//     counter++;
//     console.log(typeof userInput);
//     el[i].textContent = correctAn;
//   } else if (parseInt(userInput) !== 'string') {
//     console.log(userInput);
//   } else {
//     while (num !== 7) {
//       num = parseInt(prompt("Guess my number again."))
//     }
//     el[i].textContent = wrongAn;
//   }
// }
