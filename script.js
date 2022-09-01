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

let computerSelection;

let playerSelection;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    alert(
      "You lose round " +
        "Computer: " +
        computerScore +
        " " +
        "Player: " +
        playerScore
    );
    computerScore += 1;
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    alert(
      "You win round" +
        " " +
        "Computer: " +
        computerScore +
        " " +
        "Player: " +
        playerScore
    );
    playerScore += 1;
  } else if (playerSelection === computerSelection) {
    alert(
      "It's a tie!" +
        " " +
        "Computer: " +
        computerScore +
        " " +
        "Player: " +
        playerScore
    );
  } else {
    alert(
      "Wrong answer! Please, choose 'Rock, paper or scissors'" +
        " " +
        "Computer: " +
        computerScore +
        " " +
        "Player: " +
        playerScore
    );
  }
}

function game(playRound) {
  for (let i = 0; i < Infinity; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Please, choose 'Rock, paper or scissors': ");
    playRound(playerSelection, computerSelection);
    if (playerScore == 5) {
      alert("You won the game");
      break;
    } else if (computerScore == 5) {
      alert("Computer won");
      break;
    }
  }
}

game(playRound);
