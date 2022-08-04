let playerPoints = 0, computerPoints = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const computer = document.getElementById('computerPick');
const player = document.getElementById('playerPick');
const resetBtn = document.querySelector('#reset-btn');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');
const finalResult = document.getElementById('result-container');

resetBtn.addEventListener('click', () => location.reload());


function getComputerChoice() {
    const choice = Math.floor(Math.random() * (3)) + 1;
    if (choice == 1) {
        return "Rock"
    } else if (choice == 2) {
        return "Paper"
    } else {
        return "Scissor"
    }
}

// 1 = Rock, 2 = Paper, 3 = Scissors

function playRound(playerSelection, computerSelection) {
    player.textContent = playerSelection;
    computer.textContent = computerSelection;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {

    }
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") || (playerSelection === "SCISSOR" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        playerPoints++;
    } else {
        computerPoints++;
    }

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    if (playerPoints == 5) {
      finalResult.textContent = "YOU BEAT THE COMPUTER! You genius!\nPress RESET GAME to play again!";
      stopGame()
    }
    if (computerPoints == 5) {
      finalResult.textContent = "THE COMPUTER HAS WON! You have failed me greatly.";
      stopGame()
    }

  }
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));\

function stopGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}

function game() {

  rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
  });

  paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
  });

  scissor.addEventListener('click', () => {
    playRound('Scissor', getComputerChoice());
  });
}

game()
