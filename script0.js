
//

//user chooses
let user = prompt('Choose ROCK, PAPER, or SCISSORS:');
let playerChoice = user.toLowerCase();

alert (`You chose ${playerChoice}`);


//this part works
//*
//computer choooses
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    getComputerChoice = 'rock'
  }
  if (randomNumber === 1) {
    getComputerChoice = 'paper'
  }
  if (randomNumber === 2) {
    getComputerChoice = 'scissors'
  }
  return (getComputerChoice)
}

//console.log(getComputerChoice())

const computerChoice = getComputerChoice();
console.log(playerChoice, computerChoice);

function whoResult() {
  if (computerChoice === playerChoice) {
    alert ("It's a draw");
  }
  if (computerChoice === 'rock' && playerChoice === 'paper') {
    alert ("You Win");
  }
  if (computerChoice === 'rock' && playerChoice === 'scissors') {
    alert ("You lose");
  }
  if (computerChoice === 'paper' && playerChoice === 'scissors') {
    alert ("You Win");
  }
  if (computerChoice === 'paper' && playerChoice === 'rock') {
    alert ("You lose");
  }
  if (computerChoice === 'scissors' && playerChoice === 'rock') {
    alert ("You Win");
  }
  if (computerChoice === 'scissors' && playerChoice === 'paper') {
    alert ("You lose");
  }


  

}
