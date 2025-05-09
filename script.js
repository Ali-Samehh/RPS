const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;


rockBtn.addEventListener('click', ()=> {
    let computerSelection = getComputerChoice()
    playRound('rock', computerSelection);
})

paperBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice()
    playRound('paper', computerSelection);
})

scissorsBtn.addEventListener('click' , () => {
    let computerSelection = getComputerChoice()
    playRound('scissors', computerSelection);
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function getComputerChoice () {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice ;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = `It's a tie! You both chose ${playerSelection} / player: ${playerScore} - computer: ${computerScore}`;
    }

    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
        playerScore++;
        resultDisplay.textContent = ` You win! ${playerSelection} beats ${computerSelection}/ player: ${playerScore} - computer: ${computerScore}`;  
    }

    else {
        computerScore++;
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}/ player: ${playerScore} - computer: ${computerScore}`;
    }

    if (playerScore === 5) {
        resultDisplay.textContent = `You win the game! Final score: player: ${playerScore} - computer: ${computerScore}`;
        resetGame();
    } else if (computerScore === 5) {
        resultDisplay.textContent = `You lose the game! Final score: player: ${playerScore} - computer: ${computerScore}`;
        resetGame();
    }


}


