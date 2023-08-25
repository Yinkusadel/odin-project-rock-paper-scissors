const choiceOptions = ['rock', 'paper', 'scissors'];
let randomChoice = '';
const playerOption = document.querySelector('.player-option');
const computerOption = document.querySelector('.computer-option');
const resultOutcome = document.querySelector('.result-outcome');
const descriptionContent = document.querySelector('.description-content');

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
    return 'you win! rock beats scissors 😄';
  }
  if (player === 'rock' && computer === 'paper') {
    return 'please replay 🙃';
  }

  if (player === 'scissors' && computer === 'paper') {
    return 'you win! scissors beats paper 😄';
  }
  if (player === 'scissors' && computer === 'rock') {
    return 'please replay 🙃';
  }

  if (player === 'paper' && computer === 'rock') {
    return 'you win! paper beats rock 😄';
  }
  if (player === 'paper' && computer === 'scissors') {
    return 'please replay 🙃';
  }

  return 'odd call 😬';
};

const playerComputerChoice = () => {
  descriptionContent.textContent = 'Want to play new round ?';
  playerOption.textContent = getComputerChoice();
  computerOption.textContent = getComputerChoice();
  resultOutcome.textContent = playRound();
};

const newGame = document.querySelector('.new-game-btn');
newGame.addEventListener('click', playerComputerChoice);
