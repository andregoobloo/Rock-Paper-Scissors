"use strict";

// Selectors
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".round-result");
const score = document.querySelector(".score");

// Random computer choice
const getComputerChoice = function (choices) {
  return choices[Math.trunc(Math.random() * 3)];
};

// Game options
const choices = ["rock", "paper", "scissors"];

// Scores
let computerScore = 0;
let humanScore = 0;
let scoreText = `\nYour score: ${humanScore}\nComputer score: ${computerScore}`;

// Event Listeners
rock.addEventListener("click", function (e) {
  playRound("rock", getComputerChoice);
});

paper.addEventListener("click", function (e) {
  playRound("paper", getComputerChoice);
});

scissors.addEventListener("click", function (e) {
  playRound("scissors", getComputerChoice);
});

const winner = function (winner, loser) {
  const winningMessage = `You win! ${
    winner.charAt(0).toUpperCase() + winner.slice(1)
  } beats ${loser}`;
  results.textContent = winningMessage;
  results.style.color = "green";
  humanScore++;
  score.textContent = `User score: ${humanScore}  Computer score: ${computerScore}`;
};

const isGameOver = function () {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      results.textContent = `You win!! The final score was ${humanScore} to ${computerScore}`;
      results.style.color = "green";
    } else {
      results.textContent = `You lose!! The final score was ${humanScore} to ${computerScore}`;
      results.style.color = "red";
    }
    humanScore = 0;
    computerScore = 0;
    score.textContent = ``;
  }
};

// Game logic
const playRound = function (humanChoice, computerChoice) {
  const pcChoice = computerChoice(choices);
  const userChoice = humanChoice;

  if (userChoice === pcChoice) {
    results.textContent = "Draw";
    results.style.color = "grey";
  } else if (userChoice === "rock" && pcChoice === "scissors") {
    winner(userChoice, pcChoice);
    isGameOver();
  } else if (userChoice === "paper" && pcChoice === "rock") {
    winner(userChoice, pcChoice);
    isGameOver();
  } else if (userChoice === "scissors" && pcChoice === "paper") {
    winner(userChoice, pcChoice);
    isGameOver();
  } else {
    results.textContent = `You lose! ${
      pcChoice.charAt(0).toUpperCase() + pcChoice.slice(1)
    } beats ${userChoice}`;
    results.style.color = "red";
    computerScore++;
    gameOver();
    score.textContent = `\nYour score: ${humanScore}\nComputer score: ${computerScore}`;
  }
};
