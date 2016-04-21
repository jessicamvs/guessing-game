window.onload = function() {
  (function(){
    var userName = prompt("What is your name?");
    console.log("User input for userName: " + userName);

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
    var holiday = [
      "HALLOWEEN",
      "CHRISTMAS",
      "THANKSGIVING",
    ];

    var el = [
      document.getElementById('one'),
      document.getElementById('two'),
      document.getElementById('three'),
      document.getElementById('four'),
      document.getElementById('five'),
    ];

    function game(question, answer, wrongA, correctA) {
      var userInput = (prompt(question).toUpperCase());
      if (isNaN(parseInt(userInput))) {
        console.log(userInput);
        if ((userInput === answer) || (userInput === answer.substr(0,1))) {
          el[i].textContent = correctA;
          el[i].innerHTML += '<img src="images/ikaika.jpg">';
          el[i].className = "correct";
          counter++;
        } else {
          el[i].textContent = wrongA;
          el[i].className = "incorrect";
        }
      } else if (answer === 26) {
        if (parseInt(userInput) === answer) {
          el[i].textContent = ("You guessed, right, " + userName + "!");
          el[i].innerHTML += '<img src="images/ikaika.jpg">';
          el[i].className = "correct";
          counter++;
        } else if (userInput < 26) {
          el[i].textContent = ("That guess is too low.");
          el[i].className = "incorrect";
        } else {
          el[i].textContent = ("That guess is too high.");
          el[i].className = "incorrect";
        }
      } else {
        while (parseInt(userInput) !== 7) {
          console.log(userInput);
          userInput = parseInt(prompt("Guess my number again."));
        }
        el[i].innerHTML += '<img src="images/ikaika.jpg">';
      }
    }

    for (var i = 0; i < questions.length; i++) {
      game(questions[i],answers[i], wrongAns[i], correctAn[i], el[i]);
    }

    var favDay = prompt("What is one of my favorite holidays?").toUpperCase();
    for(var j = 0; j < holiday.length; j++) {
      if (favDay === holiday[j]) {
        el[4].textContent = favDay.substr(0, 1) + favDay.substr(1).toLowerCase() + " is one of my favorite holidays.";
        el[4].className = "correct";
        el[4].innerHTML += '<img src="images/ikaika.jpg">';
        counter++;
        break;
      } else {
        el[4].textContent = favDay.substr(0, 1) + favDay.substr(1).toLowerCase() + " is not one of my favorite holidays.";
        el[4].className = "incorrect";
      }
    }

    score.textContent = ("You got " + counter + " out of 5 answers correct!");
  })()
}
