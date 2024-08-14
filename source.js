// Game options
const choices = ["rock", "paper", "scissors"];

// Scores
let computerScore = 0;
let humanScore = 0;

const getComputerChoice = function (choices) {
  return choices[Math.trunc(Math.random() * 3)];
};
console.log(`Computer choice: ${getComputerChoice(choices)}`);

// Need to add ability to check for inputs out of range
const getHumanChoice = function (choices) {
  const userChoice = Number(
    prompt("Enter 0 for rock...1 for paper...2 for scissors")
  );
  return choices[userChoice];
};
console.log(`Your choice: ${getHumanChoice(choices)}`);
