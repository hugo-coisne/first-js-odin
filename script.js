function getComputerChoice(){
    const choices = Array("Rock","Paper","Scissors");
    const i = parseInt(Math.random()*10)%3;
    return choices[i]
}
