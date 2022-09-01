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

console.log(computerSelection);
