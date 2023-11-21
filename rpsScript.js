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

function handlePlayerChoice(event) {
  let target = event.target;
  let resultDiv = document.querySelector('#results');

  let computerSelection = getComputerChoice();
  let roundResult = document.createElement('p');
  let result;

  switch(target.id) {
    case 'rock':
      result = playRound('rock', computerSelection);
      break;
    case 'paper':
      result = playRound('paper', computerSelection);
      break;
    case 'scissors':
      result = playRound('scissors', computerSelection);
      break;
  }

  roundResult.textContent = result;
  resultDiv.appendChild(roundResult);

  // Update scores based on the result
  updateScores(result);
  
  // Check if either player or computer has won
  if (playerScore === 5 || computerScore === 5) {
    displayScores();
    announceWinner();
    playerChoice.removeEventListener('click', handlePlayerChoice);    
  } else {
    // Display scores if the game is not over
    displayScores();
  }
}

function updateScores(result) {
  if (result.includes("You win")) {
    playerScore++;
  } else if (result.includes("Computer wins")) {
    computerScore++;
  }
}

function displayScores() {
  let scoreDiv = document.querySelector('#scores');
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function announceWinner() {
  let winnerDiv = document.querySelector('#winner');
  document.querySelector('#results').innerHTML = "";
  if (playerScore === 5) {
    winnerDiv.textContent = "Congratulations! You won the game!";
  } else {
    winnerDiv.textContent = "Computer wins the game. Better luck next time!";
  }
}

function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  displayScores();
  
  // Clear results and winner displays
  document.querySelector('#results').innerHTML = "";
  document.querySelector('#winner').textContent = "";

  // Readd event listner for player selections
  playerChoice.addEventListener('click', handlePlayerChoice);
}

let playerChoice = document.querySelector('#playerChoice');
playerChoice.addEventListener('click', handlePlayerChoice);

let newGame = document.querySelector('#newGame');
newGame.addEventListener('click', resetGame);
