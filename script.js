let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScore_div = document.querySelector(".player-score");
const computerScore_div = document.querySelector(".computer-score");
const message = document.querySelector(".message");

function playerChoice() {
  rockButton.addEventListener("click", function () {
    playRound("rock");
  });

  paperButton.addEventListener("click", function () {
    playRound("paper");
  });

  scissorsButton.addEventListener("click", function () {
    playRound("scissors");
  });
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random() * 3);
  return choices[num];
}

function win() {
  message.textContent = "You win!";
  playerScore += 1;
  playerScore_div.innerHTML = playerScore;

  if (playerScore === 6) {
    reset();
    message.textContent = "You won the game!";
  }
}

function lose() {
  message.textContent = "You lose!";
  computerScore += 1;
  computerScore_div.innerHTML = computerScore;

  if (computerScore === 6) {
    reset();
    message.textContent = "You lost the game!";
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScore_div.innerHTML = playerScore;
  computerScore_div.innerHTML = computerScore;
}

function playRound(choice) {
  const computerChoice = getComputerChoice();
  if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "rock") ||
    (choice === "paper" && computerChoice === "scissors")
  ) {
    lose();
  } else if (
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    win();
  } else if (
    (choice === "paper" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "scissors") ||
    (choice === "rock" && computerChoice === "rock")
  ) {
    message.textContent = "It's a draw";
    return;
  }
}

playerChoice();
