var readlineSync = require("readline-sync");

let number = Math.random() * 100;
number = Number.parseInt(number);
let chancesTaken = 0;
let userInput;

while (userInput != number) {
  userInput = readlineSync.question("Guess the number: ");
  chancesTaken++;

  if (userInput > number && userInput < 101) {
    console.log("Your guess is greater than actual number.");
    console.log("Try again!");

  } else if (userInput < number && userInput > 0) {
    console.log("Your guess is smaller than actual number.");
    console.log("Try again!");

  } else if (userInput == number) {
    console.log("Hurray! You have guessed the correct number. \n COGRATULATIONS!!")
  } else {
    console.log("Invalid input. Number is between 0 to 100.")
  }

}

console.log("You took " + chancesTaken + " chances to guess the number.");
console.log("Your score is: " + (100 - chancesTaken));
