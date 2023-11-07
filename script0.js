//
//setup the variables
let game  = "";
let i = 0;
let userScore = 0;
let compScore = 0;

//game round counter
while (i < 5) {  
  i++;

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
  const computerChoice = getComputerChoice();

  //user chooses
  let user = prompt('Choose ROCK, PAPER, or SCISSORS:');
  let playerChoice = user.toLowerCase();

  //determining who won the round
  function whoResult() {
    if (computerChoice === playerChoice) {
      return ("It's a draw");
    } 
    if (computerChoice === 'rock' && playerChoice === 'paper') {
      userScore = userScore + 1;
      return ("You Win");
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
      compScore = compScore + 1;
      return ("You lose");
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
      userScore = userScore + 1;
      return ("You Win");
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
      compScore = compScore + 1;
      return ("You lose");
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
      userScore = userScore + 1;
      return ("You Win");
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
      compScore = compScore + 1;
      return ("You lose");
    }
  }

  //visual results
  console.log(`Round: `,i);
  console.log(`  You chose: ${playerChoice}
  Comp chose: ${computerChoice}
  ${whoResult()}
  You: ${userScore}  Computer: ${compScore}`)    
}