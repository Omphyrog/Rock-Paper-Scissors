let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "scissors";
  } else {
    return "paper";
  }
}

let computerSelection = getComputerChoice();

let playerSelection = prompt("Please, choose 'Rock, paper or scissors': ");

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    alert("You lose round");
    computerScore += 1;
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    alert("You win round");
    playerScore += 1;
  } else if (playerSelection === computerSelection) {
    alert("It's a tie!");
  } else {
    alert("Wrong answer! Please, choose 'Rock, paper or scissors'");
  }
}

function game(playRound, playerScore, computerScore) {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    if (playerScore == 4) {
      alert("You won the game");
    } else if (computerScore == 4) {
      alert("You lost the game");
    }
  }
}

playRound(playerSelection, computerSelection);
