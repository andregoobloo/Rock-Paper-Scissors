"use strict";

// Selectors
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// Random computer choice
const getComputerChoice = function (choices) {
  return choices[Math.trunc(Math.random() * 3)];
};

// Game options
const choices = ["rock", "paper", "scissors"];

// Scores
let computerScore = 0;
let humanScore = 0;

// Event Listeners
rock.addEventListener("click", function (e) {
  console.log("Rock");
  playRound("rock", getComputerChoice);
});

paper.addEventListener("click", function (e) {
  console.log("Paper");
  playRound("paper", getComputerChoice);
});

scissors.addEventListener("click", function (e) {
  console.log("Scissors");
  playRound("scissors", getComputerChoice);
});

// Game logic
const playRound = function (humanChoice, computerChoice) {
  const pcChoice = computerChoice(choices);
  const userChoice = humanChoice;
  const winningMessage = `You win! ${
    userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
  } beats ${pcChoice}`;
  if (userChoice === pcChoice) {
    console.log("draw");
  } else if (userChoice === "rock" && pcChoice === "scissors") {
    console.log(winningMessage);
    humanScore++;
  } else if (userChoice === "paper" && pcChoice === "rock") {
    console.log(winningMessage);
    humanScore++;
  } else if (userChoice === "scissors" && pcChoice === "paper") {
    console.log(winningMessage);
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        pcChoice.charAt(0).toUpperCase() + pcChoice.slice(1)
      } beats ${userChoice}`
    );
    computerScore++;
  }
};

const finalScore = `\nYour score: ${humanScore}\nComputer score: ${computerScore}`;

if (humanScore > computerScore) {
  console.log(`You win! ${finalScore}`);
} else if (computerScore > humanScore) {
  console.log(`You lose! ${finalScore}`);
} else {
  console.log(`It's a draw! ${finalScore}`);
}
