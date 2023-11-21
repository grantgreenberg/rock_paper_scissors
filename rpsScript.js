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

let playerScore = 0;
let computerScore = 0;

let buttonChoice = document.querySelector('body');
buttonChoice.addEventListener('click', resolvePlayersChoice);

function resolvePlayersChoice (event) {
  let target = event.target;
  let computerChoice = getComputerChoice();
  let result = '';
  let resultsDiv = document.querySelector('#results');

  switch (target.id) {
    case 'rock':
      result = playRound('rock', computerChoice);
      resultsDiv.textContent = result;
      break;
    case 'paper':
      result = playRound('paper', computerChoice);
      resultsDiv.textContent = result;
      break;
    case 'scissors':
      result = playRound('scissors', computerChoice);
      resultsDiv.textContent = result;
      break;
  }

  updateScores(result);
}

function updateScores(result) {
  let scores = document.querySelector('#scores');

  if (result.includes("You win")) {
    playerScore++;
  }
  else if (result.includes("Computer wins")) {
    computerScore++;
  }
  checkGameState();
}

function checkGameState() {
  let resultsDiv = document.querySelector('#results');
  let scores = document.querySelector('#scores');

  if (playerScore == 5) {
    resultsDiv.textContent = `Congratulations! You won the game ${playerScore} points to ${computerScore} points.`;
    playerScore = 0;
    computerScore = 0;
    scores.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
  }
  else if (computerScore == 5) {
    resultsDiv.textContent = `Better luck next time! The computer won the game ${computerScore} points to ${playerScore} points.`;
    playerScore = 0;
    computerScore = 0;
    scores.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
  }
  else {
    scores.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
  }
}