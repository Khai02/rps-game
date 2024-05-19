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
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log("You lose! Their paper covered your rock!")
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log("You win! Your rock shattered their scissors!")
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log("You win! Your paper covered their rock")
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    console.log("You both drew paper, it's a tie!")
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log("You lose! Their scissors cut your paper into pieces!")
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log("You lose! Their rock shattered your scissors!")
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log("You win! Your scissors cut their paper into pieces!")
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors')
    console.log("You both drew scissors, it's a tie!")
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);