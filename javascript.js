function getComputerChoice() {
    const choice = Math.floor(Math.random() * (3)) + 1;
    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

getComputerChoice()

// 1 = Rock, 2 = Paper, 3 = Scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return "It's a Tie!"
    } else if (playerSelection === "rock" || computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" || computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" || computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
    else {
        return 'You Lose!' + computerSelection + "beats" + playerSelection
    }

  }
   
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) { 
        const playerSelection = prompt("Please pick rock, paper or scissors!")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
     }
}

game()