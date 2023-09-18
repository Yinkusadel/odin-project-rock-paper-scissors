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

// const gameBodyPaperComputer = document.querySelector('.game-body-big-circle-container-paper');
// const gameBodyScissors = document.querySelector('.game-body-big-circle-container-scissors');
// const gameBodyRock = document.querySelector('.game-body-big-circle-container-rock');

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
  let compDivBigCircle = document.getElementById("game-body-big-circle-computer-option-border");
  let compDivBigSvgRock = document.getElementById("computer-option-svg-computer-rock");
  let compDivBigSvgScissors = document.getElementById("computer-option-svg-computer-scissors");
  let compDivBigSvgPaper = document.getElementById("computer-option-svg-computer-paper");


  compDivBigCircle.classList.remove("game-body-big-circle-computer-option-border")
  compDivBigSvgScissors.classList.remove("computer-option-svg-computer-scissors")
  compDivBigSvgPaper.classList.remove("computer-option-svg-computer-paper")

  compDivBigCircle.classList.add("change-com-rock-circle-border")
  compDivBigSvgRock.classList.add("change-com-rock-svg")
  compDivBigSvgScissors.classList.add("change-com-rock-remove-scissors-svg")
  compDivBigSvgPaper.classList.add("change-com-rock-remove-paper-svg")

} 

const changeComPaper = () => {
  let compDivBigCircle = document.getElementById("game-body-big-circle-computer-option-border");
  let compDivBigSvgRock = document.getElementById("computer-option-svg-computer-rock");
  let compDivBigSvgScissors = document.getElementById("computer-option-svg-computer-scissors");
  let compDivBigSvgPaper = document.getElementById("computer-option-svg-computer-paper");


  compDivBigCircle.classList.remove("game-body-big-circle-computer-option-border")
  compDivBigSvgRock.classList.remove("computer-option-svg-computer-rock")
  compDivBigSvgScissors.classList.remove("computer-option-svg-computer-scissors")

  compDivBigCircle.classList.add("change-com-paper-circle-border")
  compDivBigSvgRock.classList.add("change-com-paper-remove-rock-svg")
  compDivBigSvgScissors.classList.add("change-com-paper-remove-scissors-svg")
  compDivBigSvgPaper.classList.add("change-com-paper-svg")

} 

const changeComScissors = () => {
  let compDivBigCircle = document.getElementById("game-body-big-circle-computer-option-border");
  let compDivBigSvgRock = document.getElementById("computer-option-svg-computer-rock");
  let compDivBigSvgScissors = document.getElementById("computer-option-svg-computer-scissors");
  let compDivBigSvgPaper = document.getElementById("computer-option-svg-computer-paper");


  compDivBigCircle.classList.remove("game-body-big-circle-computer-option-border")
  compDivBigSvgRock.classList.remove("computer-option-svg-computer-rock")
  compDivBigSvgPaper.classList.remove("computer-option-svg-computer-paper")

  compDivBigCircle.classList.add("change-com-scissors-circle-border")
  compDivBigSvgRock.classList.add("change-com-scissors-remove-rock-svg")
  compDivBigSvgScissors.classList.add("change-com-scissors-svg")
  compDivBigSvgPaper.classList.add("change-com-scissors-remove-paper-svg")

} 










const changePlayerRock = () => {
  let playerDivBigCircle = document.getElementById("game-body-big-circle-player-option-border");
  let playerDivBigSvgRock = document.getElementById("player-option-svg-player-rock");
  let playerDivBigSvgScissors = document.getElementById("player-option-svg-player-scissors");
  let playerDivBigSvgPaper = document.getElementById("player-option-svg-player-paper");


  playerDivBigCircle.classList.remove("game-body-big-circle-player-option-border")
  playerDivBigSvgScissors.classList.remove("player-option-svg-player-scissors")
  playerDivBigSvgPaper.classList.remove("player-option-svg-player-paper")

  playerDivBigCircle.classList.add("change-player-rock-circle-border")
  playerDivBigSvgRock.classList.add("change-player-rock-svg")
  playerDivBigSvgScissors.classList.add("change-player-rock-remove-scissors-svg")
  playerDivBigSvgPaper.classList.add("change-player-rock-remove-paper-svg")

} 

const changePlayerScissors = () => {
  let playerDivBigCircle = document.getElementById("game-body-big-circle-player-option-border");
  let playerDivBigSvgRock = document.getElementById("player-option-svg-player-rock");
  let playerDivBigSvgScissors = document.getElementById("player-option-svg-player-scissors");
  let playerDivBigSvgPaper = document.getElementById("player-option-svg-player-paper");


  playerDivBigCircle.classList.remove("game-body-big-circle-player-option-border")
  playerDivBigSvgRock.classList.remove("player-option-svg-player-rock")
  playerDivBigSvgPaper.classList.remove("player-option-svg-player-paper")

  playerDivBigCircle.classList.add("change-player-scissors-circle-border")
  playerDivBigSvgRock.classList.add("change-player-scissors-remove-rock-svg")
  playerDivBigSvgScissors.classList.add("change-player-scissors-svg")
  playerDivBigSvgPaper.classList.add("change-player-scissors-remove-paper-svg")

} 

const changePlayerPaper = () => {
  let playerDivBigCircle = document.getElementById("game-body-big-circle-player-option-border");
  let playerDivBigSvgRock = document.getElementById("player-option-svg-player-rock");
  let playerDivBigSvgScissors = document.getElementById("player-option-svg-player-scissors");
  let playerDivBigSvgPaper = document.getElementById("player-option-svg-player-paper");


  playerDivBigCircle.classList.remove("game-body-big-circle-player-option-border")
  playerDivBigSvgRock.classList.remove("player-option-svg-player-rock")
  playerDivBigSvgScissors.classList.remove("player-option-svg-computer-scissors")

  playerDivBigCircle.classList.add("change-player-paper-circle-border")
  playerDivBigSvgRock.classList.add("change-player-paper-remove-rock-svg")
  playerDivBigSvgScissors.classList.add("change-player-paper-remove-scissors-svg")
  playerDivBigSvgPaper.classList.add("change-player-paper-svg")

} 



// const a = document.getElementById('game-body-big-circle-computer-option-border');
// const b = document.getElementById('game-body-big-circle-computer-option-border');
// const r = document.getElementById('computer-option-svg-computer-rock');
// const s = document.getElementById('computer-option-svg-computer-scissors');
// const p = document.getElementById('computer-option-svg-computer-paper');

// const changeComRock = () => {
//   a.style.border = '30px solid #dc2e4e';
//   b.style.boxShadow = '0 5px 0 #bb2424e1';
//   r.style.display = 'block';
//   p.style.display = 'none';
//   s.style.display = 'none';
// };

// const changeComPaper = () => {
//   a.style.border = '30px solid #546de7';
//   b.style.boxShadow = '0 5px 0 #042beee1';
//   p.style.display = 'block';
//   r.style.display = 'none';
//   s.style.display = 'none';
// };

// const changeComScissors = () => {
//   a.style.border = '30px solid #cbdc2e';
//   b.style.boxShadow = '0 5px 0 #889421';
//   s.style.display = 'block';
//   r.style.display = 'none';
//   p.style.display = 'none';
// };

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

  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById('game-body-big-circle-player-option-border').style.border =
    '30px solid #dc2e4e';
  document.getElementById('game-body-big-circle-player-option-border').style.boxShadow =
    '0 5px 0 #bb2424e1';
  document.getElementById('player-option-svg-player-rock').style.display = 'block';
  document.getElementById('player-option-svg-player-scissors').style.display = 'none';
  document.getElementById('player-option-svg-player-paper').style.display = 'none';
  winLoseText.textContent = playRoundForRock();
};

const getPlayerScissors = () => {
  gameBodyScissorsTextPlayer.textContent = 'scissors';
  gameBodyScissorsTextComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById('game-body-big-circle-player-option-border').style.border =
    '30px solid #cbdc2e';
  document.getElementById('game-body-big-circle-player-option-border').style.boxShadow =
    '0 5px 0 #889421';
  document.getElementById('player-option-svg-player-scissors').style.display = 'block';
  document.getElementById('player-option-svg-player-rock').style.display = 'none';
  document.getElementById('player-option-svg-player-paper').style.display = 'none';
  winLoseText.textContent = playRoundForScissors();
};

const getPlayerPaper = () => {
  gameBodyPaperTextPlayer.textContent = 'paper';
  gameBodyPaperTextComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById('game-body-big-circle-player-option-border').style.border =
    '30px solid #546de7';
  document.getElementById('game-body-big-circle-player-option-border').style.boxShadow =
    '0 5px 0 #042beee1';
  document.getElementById('player-option-svg-player-paper').style.display = 'block';
  document.getElementById('player-option-svg-player-scissors').style.display = 'none';
  document.getElementById('player-option-svg-player-rock').style.display = 'none';
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
