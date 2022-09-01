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
  const win = "You won!";
  const lose = "You lose!";
  const draw = "It's a draw!";

  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    return lose;
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return win;
  } else if (
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "scissors")
  ) {
    return draw;
  } else {
    return "Wrong answer! Please, choose 'Rock, paper or scissors'";
  }
}

alert(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
