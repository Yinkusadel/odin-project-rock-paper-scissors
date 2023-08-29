const choiceOptions = ['rock', 'paper', 'scissors'];
let randomChoice = '';
const playerOption = document.querySelector('.player-option');
const computerOption = document.querySelector('.computer-option');
const resultOutcome = document.querySelector('.result-outcome');
const descriptionContent = document.querySelector('.description-content');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
let playerGoal = 0;
let computerGoal = 0;

const getComputerChoice = () => {
  randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  return randomChoice;
};

const playRound = () => {
  const player = playerOption.textContent;
  const computer = computerOption.textContent;

  if (
    (player === 'rock' && computer === 'rock') ||
    (player === 'paper' && computer === 'paper') ||
    (player === 'scissors' && computer === 'scissors')
  ) {
    return "it's a tie 😕";
  }

  if (player === 'rock' && computer === 'scissors') {
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'you win! rock beats scissors 😄';
  }
  if (player === 'rock' && computer === 'paper') {
    computerScore.textContent = `${(computerGoal += 1)}`;
    return 'you lose! paper beats rock 😭';
  }

  if (player === 'scissors' && computer === 'paper') {
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'you win! scissors beats paper 😄';
  }
  if (player === 'scissors' && computer === 'rock') {
    computerScore.textContent = `${(computerGoal += 1)}`;
    return 'you lose! rock beats scissors 😭';
  }

  if (player === 'paper' && computer === 'rock') {
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'you win! paper beats rock 😄';
  }
  if (player === 'paper' && computer === 'scissors') {
    computerScore.textContent = `${(computerGoal += 1)}`;
    return 'you lose! scissors beats paper 😭';
  }

  return 'odd call 😬';
};

const newGame = () => {
  descriptionContent.textContent = 'Want to play a round ?';
  playerOption.textContent = '';
  computerOption.textContent = '';
  resultOutcome.textContent = '';
  playerScore.textContent = `${(playerGoal = 0)}`;
  computerScore.textContent = `${(computerGoal = 0)}`;
};

const playerComputerChoice = () => {
  descriptionContent.textContent = 'Want to play new round ?';
  playerOption.textContent = getComputerChoice();
  computerOption.textContent = getComputerChoice();
  resultOutcome.textContent = playRound();
};

const playRoundBtn = document.querySelector('.play-round-btn');
playRoundBtn.addEventListener('click', playerComputerChoice);

const newGameBtn = document.querySelector('.refresh-game');
newGameBtn.addEventListener('click', newGame);
