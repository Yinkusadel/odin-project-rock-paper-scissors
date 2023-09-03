const closeRulesBtn = document.querySelector('#display-rules-container');
const openRulesBtn = document.querySelector('#display-rules-container');
const gameBodyPaperPlayer = document.querySelector('.game-body-big-circle-container-paper');
const gameBodyPaperComputer = document.querySelector('.game-body-big-circle-container-paper');
const gameBodyScissors = document.querySelector('.game-body-big-circle-container-scissors');
const gameBodyRock = document.querySelector('.game-body-big-circle-container-rock');

const gameBodyDiv = document.querySelector('.game-body');
const afterPlayerComputerChoiceDiv = document.querySelector('.after-player-and-computer-choice-game-container');


const choiceOptions = ['rock', 'paper', 'scissors'];
let randomChoice = '';
const playerScore = document.querySelector('.header-score');
const computerScore = document.querySelector('.header-score');
let playerGoal = 0;
let computerGoal = 0;






const getComputerChoice = () => {
  randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  return randomChoice;
};

const playRound = () => {
  const player = gameBodyPaperPlayer.textContent;
  const computer = gameBodyPaperComputer.textContent;

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
    computerScore.textContent = `${(computerGoal -= 1)}`;
    return 'you lose! paper beats rock 😭';
  }

  if (player === 'scissors' && computer === 'paper') {
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'you win! scissors beats paper 😄';
  }
  if (player === 'scissors' && computer === 'rock') {
    computerScore.textContent = `${(computerGoal -= 1)}`;
    return 'you lose! rock beats scissors 😭';
  }

  if (player === 'paper' && computer === 'rock') {
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'you win! paper beats rock 😄';
  }
  if (player === 'paper' && computer === 'scissors') {
    computerScore.textContent = `${(computerGoal -= 1)}`;
    return 'you lose! scissors beats paper 😭';
  }

  return 'odd call 😬';
};


let getPlayerRock = () => {
  gameBodyPaperPlayer.textContent = 'rock';
  gameBodyPaperComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById("game-body-big-circle-player-option-border").style.border = "30px solid #dc2e4e";
  document.getElementById("game-body-big-circle-player-option-border").style.boxShadow = "0 5px 0 #bb2424e1";
  document.getElementById("player-option-svg player-rock").style.display = "block";

};

let getPlayerScissors = () => {
  gameBodyPaperPlayer.textContent = 'scissors';
  gameBodyPaperComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById("game-body-big-circle-player-option-border").style.border = "30px solid #cbdc2e";
  document.getElementById("game-body-big-circle-player-option-border").style.boxShadow = "0 5px 0 #889421";
  document.getElementById("player-option-svg player-scissors").style.display = "block";

};

let getPlayerPaper = () => {
  gameBodyPaperPlayer.textContent = 'paper';
  gameBodyPaperComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById("game-body-big-circle-player-option-border").style.border = "30px solid #546de7";
  document.getElementById("game-body-big-circle-player-option-border").style.boxShadow = "0 5px 0 #042beee1";
  document.getElementById("player-option-svg player-paper").style.display = "block";

};

const playAgain = () => {
  gameBodyDiv.style.display = 'flex';
  afterPlayerComputerChoiceDiv.style.display = 'none';
  

};








const closeRulesBtnFunc = () => {
  closeRulesBtn.style.display = 'none';
};

const openRulesBtnFunc = () => {
  openRulesBtn.style.display = 'block';
};







































const closeRules = document.querySelector('.close-rules-icon');
closeRules.addEventListener('click', closeRulesBtnFunc);

const openRules = document.querySelector('#rules-btn');
openRules.addEventListener('click', openRulesBtnFunc);

const playerRockBtn = document.querySelector('.game-body-big-circle-container-rock');
playerRockBtn.addEventListener('click', getPlayerRock);

const playerScissorsBtn = document.querySelector('.game-body-big-circle-container-scissors');
playerScissorsBtn.addEventListener('click', getPlayerScissors);

const playerPaperBtn = document.querySelector('.game-body-big-circle-container-paper');
playerPaperBtn.addEventListener('click', getPlayerPaper);

const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', playAgain);