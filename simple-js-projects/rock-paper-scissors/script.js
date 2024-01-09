const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
    const playerChoice =
        prompt("Please enter rock / paper / scissors (or q to quit): ");
    if (playerChoice.toLowerCase() === "q") {
        break;
    }

    if (
        playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors"
    ) {
        console.log("Please enter a valid choice.");
        continue;
    }

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex]

    console.log("The computer chose:", computerChoice);

    if (computerChoice === playerChoice) {
        console.log("Draw!");
        ties++;
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        console.log("You won!");
        wins++;
    } else {
        console.log("You lost!");
        losses++;
    }
}

console.log("Wins:", wins, "Losses:", losses, "Draws:", ties);