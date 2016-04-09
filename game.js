var userName = prompt("What is your name?");
console.log("User input for userName: " + userName);
alert("Hello! Welcome to my page " + userName + "!" );

var cityBorn = prompt("Was I born in Vancouver?");
var counter = 0;
console.log("User input for cityBorn: " + cityBorn);
if (cityBorn.toUpperCase() === "NO") {
  alert("That's right, " + userName + "! I was born in Seattle!");
  counter += 1;
} else {
  alert("I wasn't born in Vancouver, " + userName + ". I was born in Seattle!");
}

var catOwner = prompt("Do I have a cat?");
console.log("User input for catOwner: " + catOwner);
if (catOwner.toUpperCase() === "YES") {
  alert("That's right, " + userName + "!");
  counter += 1;
} else {
  alert("Ooops! I do have a cat, " + userName + ".");
}

var hairColor = prompt("Is my hair dark?");
console.log("User input for hairColor: " + hairColor);
if (hairColor.toUpperCase() === "YES") {
  alert("Yay, " + userName + "! You got it right!");
  counter += 1;
} else {
  alert("Sorry, wrong answer. I am not blonde, " + userName + "!");
}

alert("You got " + counter + " out of 3 answers correct!");

var age = prompt("How old am I?");
console.log("User input for age: " + age);
if (age === "26") {
  alert("You guessed, right, " + userName + "!");
} else if (age < 26) {
  alert("That guess is too low.");
} else {
  alert("That guess is too high.");
}
