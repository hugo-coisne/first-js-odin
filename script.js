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
        return ("You win! " + player + " beats " + computer + "!");
    } else if (draw) {
        return ("Draw! " + player + " against " + computer + "!");
    } else {
        return ("You lose! " + computer + " beats " + player + "!");
    }

}