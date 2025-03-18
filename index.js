// Rock Paper Scrissors

// Option strings
const choices = ["rock", "paper", "scissors"];

// Displays
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    // Generating a random number to select from choice arary
    const computerChoise = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoise){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoise === "scissors") ? "YOU WON!" : "YOU LOST!";
                break;
            case "paper":
                result = (computerChoise === "rock") ? "YOU WON!" : "YOU LOST!";
                break;
            case "scissors":
                result = (computerChoise === "paper") ? "YOU WON!" : "YOU LOST!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoise.toUpperCase()}`;

    resultDisplay.textContent = result;

    resultDisplay.classList.remove("won", "lost");

    switch(result){
        case "YOU WON!":
            resultDisplay.classList.add("won");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOST!":
            resultDisplay.classList.add("lost");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    console.log(`Computer choice: ${computerChoise}`);
    console.log(`Your choice: ${playerChoice}`);
}