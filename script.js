function playRound(playerSelection) {
    const choice = ["rock", "paper", "scissors"];
    const computerSelection = choice[Math.floor(Math.random() * choice.length)];
    
    console.log("Player:", playerSelection);
    console.log("Computer:", computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

const Rock = document.getElementById("rock");
Rock.addEventListener("click", function () {
    playRound("rock");
})

const Paper = document.getElementById("paper");
Paper.addEventListener("click", function () {
    playRound("paper");
})

const Scissors = document.getElementById("scissors");
Scissors.addEventListener("click", function () {
    playRound("scissors");
})