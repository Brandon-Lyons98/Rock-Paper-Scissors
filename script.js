const buttons = document.querySelectorAll('button');
const roundResults = document.querySelector('#results');
const playerWinCount = document.querySelector('#playerWinCount');
const scoreboard = document.querySelector('#scoreboard');
const computerWinCount = document.querySelector('#computerWinCount');
const test = document.querySelector('#testing');
const winner = document.createElement('div');
winner.classList.add('winner');
const choices = document.createElement('div');
choices.classList.add('red');
choices.style.textAlign = 'center';
scoreboard.appendChild(choices);
scoreboard.appendChild(winner);
const playAgain = document.querySelector('#play-again');
const computerChoice = getComputerChoice();
let playerSelection;
let computerWins = 0;
let playerWins = 0;
const container = document.querySelector('#container');

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return computerChoice = "rock";
    } else if (computerChoice === 2) {
        return computerChoice = "paper";
    } else if (computerChoice === 3) {
        return computerChoice = "scissors";
    } else {
        return "Error";
    }
}

function playRound(playerSelection, computerChoice) {
    if (computerChoice === playerSelection) {
        winner.textContent = 'Tie!';
    } else if ((computerChoice === "rock" && playerSelection === "scissors") || (computerChoice === "paper" && playerSelection === "rock") || (computerChoice === "scissors" && playerSelection === "paper")) {
        computerWins += 1;
        winner.textContent = 'Computer wins!';
    } else if ((computerChoice === "rock" && playerSelection === "paper") || (computerChoice === "paper" && playerSelection === "scissors") || (computerChoice === "scissors" && playerSelection === "rock")) {
        playerWins += 1;
        winner.textContent = 'Player Wins!';
    } else {
        winner.textContent = 'Error...';
    }

    if (playerWins === 0) {
        playerWinCount.textContent = 'Player wins: 0';
    } else if (playerWins === 1) {
        playerWinCount.textContent = 'Player wins: 1';
    } else if (playerWins === 2) {
        playerWinCount.textContent = 'Player wins: 2';
    } else if (playerWins === 3) {
        playerWinCount.textContent = 'Player wins: 3';
    } else if (playerWins === 4) {
        playerWinCount.textContent = 'Player wins: 4';
    } else if (playerWins === 5) {
        playerWinCount.textContent = 'Player wins: 5';
    }

    if (computerWins === 0) {
        computerWinCount.textContent = 'Computer wins: 0';
    } else if (computerWins === 1) {
        computerWinCount.textContent = 'Computer wins: 1';
    } else if (computerWins === 2) {
        computerWinCount.textContent = 'Computer wins: 2';
    } else if (computerWins === 3) {
        computerWinCount.textContent = 'Computer wins: 3';
    } else if (computerWins === 4) {
        computerWinCount.textContent = 'Computer wins: 4';
    } else if (computerWins === 5) {
        computerWinCount.textContent = 'Computer wins: 5';
    }

    choices.textContent = `You picked ${playerSelection} and the computer picked ${computerChoice}!`;

    resetGame();
}

function resetGame() {
    if (playerWins === 5) {
        container.style.visibility = 'hidden';
        playAgain.style.visibility = 'visible';
        alert('You won!');
        handlePlayAgain();
    }
    if (computerWins === 5) {
        container.style.visibility = 'hidden';
        playAgain.style.visibility = 'visible';
        alert('The computer won...');
        handlePlayAgain();
    }
}

function handlePlayAgain() {
    playAgain.addEventListener('click', () => {
        window.location.reload();
    });
}

buttons.forEach((button) => {
    playerWinCount.textContent = 'Player wins: 0';
    computerWinCount.textContent = 'Computer wins: 0';
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});