// Game options
const choices = ["rock", "paper", "scissors"];

// Scores
let computerScore = 0;
let humanScore = 0;

const getComputerChoice = function (choices) {
  return choices[Math.trunc(Math.random() * 3)];
};

// Need to add ability to check for inputs out of range
const getHumanChoice = function (choices) {
  const userChoice = Number(
    prompt("Enter 0 for rock...1 for paper...2 for scissors")
  );
  return choices[userChoice];
};

const playRound = function (humanChoice, computerChoice) {
  const pcChoice = computerChoice(choices);
  const userChoice = humanChoice(choices);
  const winningMessage = `You win! ${userChoice} beats ${pcChoice}`;
  if (userChoice === pcChoice) {
    console.log("draw");
  } else if (userChoice === "rock" && pcChoice === "scissors") {
    console.log(winningMessage);
    humanScore++;
  } else if (userChoice === "paper" && pcChoice === "rock") {
    console.log(winningMessage);
    humanScore++;
  } else if (userChoice === "scissors" && pcChoice === "rock") {
    console.log(winningMessage);
    humanScore++;
  } else {
    console.log(`You lose! ${pcChoice} beats ${userChoice}`);
    computerScore++;
  }
};
playRound(getHumanChoice, getComputerChoice);
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
