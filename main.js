console.log("hi, bro. It s me")
function getComputerChoice(){
    dau = ["rock","paper","scissors"];
    return dau[Math.floor(Math.random() * 3)];
}
const text = `write : ${"rock"} or ${"paper"} or ${"scissors"}, to make a choice!`; 
let choice = prompt();