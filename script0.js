//
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

//
//user chooses
let user = prompt('Choose ROCK, PAPER, or SCISSORS:');
let playerChoice = user.toLowerCase();

const computerChoice = getComputerChoice();
console.log(playerChoice, computerChoice);

//determining who won
function whoResult() {
  if (computerChoice === playerChoice) {
    return ("It's a draw");
  }
  if (computerChoice === 'rock' && playerChoice === 'paper') {
    return ("You Win");
  }
  if (computerChoice === 'rock' && playerChoice === 'scissors') {
    return ("You lose");
  }
  if (computerChoice === 'paper' && playerChoice === 'scissors') {
    return ("You Win");
  }
  if (computerChoice === 'paper' && playerChoice === 'rock') {
    return ("You lose");
  }
  if (computerChoice === 'scissors' && playerChoice === 'rock') {
    return ("You Win");
  }
  if (computerChoice === 'scissors' && playerChoice === 'paper') {
    return ("You lose");
  }
}

//visual results
alert (`You chose: \t\t ${playerChoice}
\nComputer chose: \t ${computerChoice}
\n${whoResult()}`);