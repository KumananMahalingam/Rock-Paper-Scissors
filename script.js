function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getHumanChoice() {
    let choice = parseInt(prompt("Give me a integer between 1 and 3 (Rock, Paper, Scissors): "));
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 1 && computerChoice === 3) ||
        (humanChoice == 2 && computerChoice == 1) ||
        (humanChoice == 3 && computerChoice == 2)
    ){
        console.log("You win this round!");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    } else {
        console.log("Computer wins this round!"):
        computerScore++;
    }

    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(1, 3);
playRound(humanChoice, computerChoice);