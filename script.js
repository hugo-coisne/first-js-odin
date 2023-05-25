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

    const win = (player == "Rock" && computer == "Scissors") ||
        (player == "Paper" && computer == "Rock") ||
        (player == "Scissors" && computer == "Paper");

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

const rock = document.createElement("div");
const paper = document.createElement("div");
const scissors = document.createElement("div");
const result = document.createElement("div");
const choices = document.createElement("div");
const body = document.querySelector("body");

rock.innerText = "ROCK";
paper.innerText = "PAPER";
scissors.innerText = "SCISSORS";
result.innerText = "Click on your choice!";

rock.classList = "choice";
paper.classList = "choice";
scissors.classList = "choice";
choices.id = "choices";

function endgame() {
    if (score == 5) {
        result.innerText = "You won the game!\nClick on a choice to start another game";
        score = 0;
    } else if (score == -5) {
        result.innerText = "You lost the game!\nClick on a choice to start another game"
        score = 0;
    }
}

function round(pl) {
    result.innerText = playRound(pl, getComputerChoice()) + `\nScore : ${score}`;
    endgame();
}

rock.addEventListener('click', function Rock() {
    round("rock");
});

paper.addEventListener('click', function Paper() {
    round("paper");
});

scissors.addEventListener('click', function Scissors() {
    round("scissors");
});


choices.appendChild(rock);
choices.appendChild(paper);
choices.appendChild(scissors);
body.appendChild(choices);
body.appendChild(result);