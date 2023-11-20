function getComputerChoice () {
    // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Map the decimal to the values 1, 2, or 3
  if (randomDecimal < 0.3333) {
    return "rock";
  } else if (randomDecimal < 0.6666) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound (playerSelection, computerSelection) {
    // Convert both selections to lowercase to make the comparison case-insensitive
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "It's a tie! Both chose " + player;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You win! " + player + " beats " + computer;
  } else {
    return "Computer wins! " + computer + " beats " + player;
  }
}

let playerSelection = document.querySelector('#playerSelection');

playerSelection.addEventListener('click', (event) => {

  let target = event.target;
  let computerSelection = getComputerChoice();

  switch(target.id) {
      case 'rock':
        console.log(playRound('rock', computerSelection));
        break;
      case 'paper':
        console.log(playRound('paper', computerSelection));
        break;
      case 'scissors':
        console.log(playRound('scissors', computerSelection));
        break;
  }
});