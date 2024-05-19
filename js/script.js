function getComputerChoice() {
  const computerChoice = ['rock', 'paper', 'scissors'];
  index = Math.floor(Math.random() * 3);  
  return computerChoice[index];
}

function getHumanChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  let humanChoice = prompt('Please choose between: rock, paper or scissors:').toLowerCase();
  while (!choice.includes(humanChoice)) {
    humanChoice = prompt("Uh Oh! Please enter rock, paper, or scissors:").toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'rock') {
    console.log("You both drew rock, it's a tie!")
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    console.log("You both drew paper, it's a tie!")
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors')
    console.log("You both drew scissors, it's a tie!")
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);