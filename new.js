const closeRulesBtn = document.querySelector('#display-rules-container');
const openRulesBtn = document.querySelector('#display-rules-container');
// const gameBodyPaperPlayer = document.querySelector('.game-body-big-circle-container-paper');

const gameBodyPaperTextPlayer = document.querySelector(
  '.game-body-big-circle-container-paper-text-player',
);
const gameBodyScissorsTextPlayer = document.querySelector(
  '.game-body-big-circle-container-scissors-text-player',
);
const gameBodyRockTextPlayer = document.querySelector(
  '.game-body-big-circle-container-rock-text-player',
);

const gameBodyPaperTextComputer = document.querySelector(
  '.game-body-big-circle-container-paper-text-computer',
);
const gameBodyScissorsTextComputer = document.querySelector(
  '.game-body-big-circle-container-scissors-text-computer',
);
const gameBodyRockTextComputer = document.querySelector(
  '.game-body-big-circle-container-rock-text-computer',
);

const gameBodyDiv = document.querySelector('.game-body');
const afterPlayerComputerChoiceDiv = document.querySelector(
  '.after-player-and-computer-choice-game-container',
);

const choiceOptions = ['rock', 'paper', 'scissors'];
let randomChoice = '';
const playerScore = document.querySelector('.header-score-player');
const computerScore = document.querySelector('.header-score-computer');
const winLoseText = document.querySelector('.win-lose-text');
let playerGoal = 0;
let computerGoal = 0;






const changeComRock = () => {
  let compSvgRock = document.querySelector('.computer-rock-svg');
  compSvgRock.setAttribute("class", "computer-rock-svg-display-block"); 
} 




const changeComPaper = () => {
  let compSvgPaper = document.querySelector('.computer-paper-svg');
  compSvgPaper.setAttribute("class", "computer-paper-svg-display-block"); 
} 





const changeComScissors = () => {
  let compSvgScissors = document.querySelector('.computer-scissors-svg');
  compSvgScissors.setAttribute("class", "computer-scissors-svg-display-block"); 
} 






const getComputerChoice = () => {
  randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  return randomChoice;
};

const playRoundForPaper = () => {
  const player = gameBodyPaperTextPlayer.textContent;
  const computer = gameBodyPaperTextComputer.textContent;

  if (player === 'paper' && computer === 'paper') {
    changeComPaper();
    return 'DRAW';
  }

  if (player === 'paper' && computer === 'rock') {
    changeComRock();
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'YOU WIN';
  }

  if (player === 'paper' && computer === 'scissors') {
    changeComScissors();
    computerScore.textContent = `${(computerGoal += 1)}`;
    return 'YOU LOSE';
  }

  return 'odd call 😬';
};

const playRoundForRock = () => {
  const player = gameBodyRockTextPlayer.textContent;
  const computer = gameBodyRockTextComputer.textContent;

  if (player === 'rock' && computer === 'rock') {
    changeComRock();
    return 'DRAW';
  }

  if (player === 'rock' && computer === 'scissors') {
    changeComScissors();
    playerScore.textContent = `${(playerGoal += 1)}`;
    return 'YOU WIN';
  }
  if (player === 'rock' && computer === 'paper') {
    changeComPaper();
    computerScore.textContent = `${(computerGoal += 1)}`;
    return 'YOU LOSE';
  }

  return 'odd call 😬';
};

const playRoundForScissors = () => {
  const player = gameBodyScissorsTextPlayer.textContent;
  const computer = gameBodyScissorsTextComputer.textContent;

  if (player === 'scissors' && computer === 'scissors') {
    changeComScissors();
    return 'DRAW';
  }

  if (player === 'scissors' && computer === 'paper') {
    playerScore.textContent = `${(playerGoal += 1)}`;
    changeComPaper();
    return 'YOU WIN';
  }
  if (player === 'scissors' && computer === 'rock') {
    changeComRock();
    computerScore.textContent = `${(computerGoal += 1)}`;
    return 'YOU LOSE';
  }

  return 'odd call 😬';
};

const getPlayerRock = () => {
  gameBodyRockTextPlayer.textContent = 'rock';
  gameBodyRockTextComputer.textContent = getComputerChoice();
  let playerSvgRock = document.querySelector('.player-rock-svg');

  playerSvgRock.setAttribute("class", "player-rock-svg-display-block"); 
  

  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  winLoseText.textContent = playRoundForRock();
};

const getPlayerScissors = () => {
  gameBodyScissorsTextPlayer.textContent = 'scissors';
  gameBodyScissorsTextComputer.textContent = getComputerChoice();
  let playerSvgScissors = document.querySelector('.player-scissors-svg');

  playerSvgScissors.setAttribute("class", "player-scissors-svg-display-block"); 

  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  winLoseText.textContent = playRoundForScissors();
};

const getPlayerPaper = () => {
  gameBodyPaperTextPlayer.textContent = 'paper';
  gameBodyPaperTextComputer.textContent = getComputerChoice();
  let playerSvgPaper = document.querySelector('.player-paper-svg');

  playerSvgPaper.setAttribute("class", "player-paper-svg-display-block"); 

  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  winLoseText.textContent = playRoundForPaper();
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
