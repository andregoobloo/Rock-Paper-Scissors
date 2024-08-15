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

const playGame = function () {
  let round = 1;
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
  while (round <= 5) {
    playRound(getHumanChoice, getComputerChoice);
    round++;
  }
};

playGame();

const finalScore = `\nYour score: ${humanScore}\nComputer score: ${computerScore}`;

if (humanScore > computerScore) {
  console.log(`You win! ${finalScore}`);
} else if (computerScore > humanScore) {
  console.log(`You lose! ${finalScore}`);
} else {
  console.log(`It's a draw! ${finalScore}`);
}
