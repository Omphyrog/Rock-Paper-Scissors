let playerSelection;
let computerSelection;

const selectionBtns = document.querySelectorAll("[data-selection]");

selectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", (e) => {
    const selectionName = selectionBtn.dataset.selection;
    makeSelection(selectionName);
    console.log(playerSelection);
  });
});

function makeSelection(selection) {
  return selection;
}

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
let score = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = makeSelection();
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    console.log("You lose");
    score--;
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("You win");
    score++;
  } else if (
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "rock")
  ) {
    console.log("Its a draw");
    score += 0;
  }
  return score;
}

// function game(playRound) {
//   for (let i = 0; i < Infinity; i++) {
//     // computerSelection = getComputerChoice();
//     // playerSelection = prompt("Please, choose 'Rock, paper or scissors': ");
//     playRound(playerSelection, computerSelection);
//     if (score === 5) {
//       alert("You won the game");
//       break;
//     } else if (score < 0) {
//       alert("Computer won");
//       break;
//     }
//   }
// }

// game(playRound);
