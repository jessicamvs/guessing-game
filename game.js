var userName = prompt("What is your name?");
console.log("User input for userName: " + userName);
alert("Hello! Welcome to my page " + userName + "!" );

var cityBorn = prompt("Was I born in Vancouver?");
var counter = 0;
console.log("User input for cityBorn: " + cityBorn);
if (cityBorn.toUpperCase() === "NO" || cityBorn.toUpperCase() === "N") {
  alert("That's right, " + userName + "! I was born in Seattle!");
  counter++;
} else {
  alert("I wasn't born in Vancouver, " + userName + ". I was born in Seattle!");
}

var catOwner = prompt("Do I have a cat?");
console.log("User input for catOwner: " + catOwner);
if (catOwner.toUpperCase() === "YES" || catOwner.toUpperCase() === "Y") {
  alert("That's right, " + userName + "!");
  counter++;
} else {
  alert("Ooops! I do have a cat, " + userName + ".");
}

var hairColor = prompt("Is my hair dark?");
console.log("User input for hairColor: " + hairColor);
if (hairColor.toUpperCase() === "YES" || catOwner.toUpperCase() === "Y") {
  alert("Yay, " + userName + "! You got it right!");
  counter++;
} else {
  alert("Sorry, wrong answer. I am not blonde, " + userName + "!");
}

var age = parseInt(prompt("How old am I?"));
console.log("User input for age: " + age);
if (age === 26) {
  alert("You guessed, right, " + userName + "!");
  counter++;
} else if (age < 26) {
  alert("That guess is too low.");
} else {
  alert("That guess is too high.");
}

alert("You got " + counter + " out of 4 answers correct!");

var num = parseInt(prompt("Guess my number."));
while (num !== 7) {
  num = parseInt(prompt("Guess my number again."));
}
