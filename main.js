console.log("hi, bro. It s me")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    dau = ["rock","paper","scissors"];
    return dau[Math.floor(Math.random() * 3)];
}
function getHumanChoice(){
    const text = `write : ${"rock"} or ${"paper"} or ${"scissors"}, to make a choice!`; 
    let choice = prompt(text);
    return choice;
}

function playRound(humanChoice, computerChoise){
    humanChoice=humanChoice.toUpperCase();
    computerChoise=computerChoise.toUpperCase();
    if(humanChoice==computerChoise){
        humanScore++;
        computerScore++;
        return "wise";
    }
    if(humanChoice=="ROCK"){
        if(computerChoise=="PAPER"){
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        if(computerChoise=="SCISSORS"){
            humanScore++;
            return "You win! Rock beats Scissors";
        }
    }
    if(humanChoice=="PAPER"){
        if(computerChoise=="SCISSORS"){
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        if(computerChoise=="ROCK"){
            humanScore++;
            return "You win! Paper beats Rock";r
        }
    }
    if(humanChoice=="SCISSORS"){
        if(computerChoise=="ROCK"){
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        if(computerChoise=="PAPER"){
            humanScore++;
            return "You win! Scissors beats Paper";
        }
    }
}
function playGame(times){
    for(let i=0;i<times;i++){
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }
    if(humanScore>computerScore){
        return("you win the game!")
    }
    if(humanScore==computerScore){
        return(`it ${"'s a wise"}`)
    }
    return "you lose the game!"
}



console.log(playGame(5));

console.log(humanScore, computerScore);