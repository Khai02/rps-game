alert("Due to my current knowledge of JS and problem solving, in order to play this version of RPS you will choose a hand for each of the five rounds and then the results will be displayed in the console. \n \nPress Ctrl+Shift+J to view the console or press F12 and click on console after you have made your choices.")

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
    console.log("You both drew rock, it's a tie!");
    return
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log("You lose! Their paper covered your rock!");
    computerScore += 1;
    return
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log("You win! Your rock shattered their scissors!");
    humanScore += 1;
    return
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log("You win! Your paper covered their rock!");
    humanScore += 1;
    return
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    console.log("You both drew paper, it's a tie!");
    return
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log("You lose! Their scissors cut your paper into pieces!");
    computerScore += 1;
    return
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log("You lose! Their rock shattered your scissors!");
    computerScore += 1;
    return
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log("You win! Your scissors cut their paper into pieces!");
    humanScore += 1;
    return
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors')
    console.log("You both drew scissors, it's a tie!");
    return
}

function playGame() {
  if ((humanScore > computerScore) && (humanScore === 1 || humanScore === 2 || humanScore === 3 || humanScore === 4 || humanScore === 5)) {
    console.log("Congratulations, you won the set! Refresh your browser to play again.")
  } else if ((computerScore > humanScore) && (computerScore === 1 || computerScore === 2 || computerScore === 3 || computerScore === 4 || computerScore === 5)) {
    console.log("You lost the set! The computer was victorious this time but refresh to try again.")
  } else if (humanScore === computerScore) {
    console.log("There is no clear winner from the five rounds played, reload the page for another attempt.")
  }
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const humanSelectionOne = getHumanChoice();
const computerSelectionOne = getComputerChoice();

const humanSelectionTwo = getHumanChoice();
const computerSelectionTwo = getComputerChoice();

const humanSelectionThree = getHumanChoice();
const computerSelectionThree = getComputerChoice();

const humanSelectionFour = getHumanChoice();
const computerSelectionFour = getComputerChoice();

playRound(humanSelection, computerSelection);
playRound(humanSelectionOne, computerSelectionOne);
playRound(humanSelectionTwo, computerSelectionTwo);
playRound(humanSelectionThree, computerSelectionThree);
playRound(humanSelectionFour, computerSelectionFour);

playGame();