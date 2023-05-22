var score = 0;

function getComputerChoice() {
    const choices = Array("Rock", "Paper", "Scissors");
    const i = parseInt(Math.random() * 100) % 3;
    return choices[i]
}

function playRound(playerSelection, computerSelection) {

    const p = playerSelection.toLowerCase();
    const player = p[0].toUpperCase() + p.slice(1);

    const c = computerSelection.toLowerCase();
    const computer = c[0].toUpperCase() + c.slice(1);

    const win = (player == "Rock" && computer == "Scissors") || (player == "Paper" && computer == "Rock") || (player == "Scissors" && computer == "Paper");
    const draw = player == computer;

    if (win) {
        score += 1;
        return ("You win! " + player + " beats " + computer + "!");
    } else if (draw) {
        return ("Draw! " + player + " against " + computer + "!");
    } else {
        score -= 1;
        return ("You lose! " + computer + " beats " + player + "!");
    }

}

function game() {
    for (var j = 0; j < 5; j++) {
        const play = prompt("Please enter your choice : ");
        console.log(playRound(play, getComputerChoice()));
    }
    if (score == 0) {
        console.log("Draw!");
    } else if (score < 0) {
        console.log("You lost!");
    } else {
        console.log("You won!");
    }
}

game();