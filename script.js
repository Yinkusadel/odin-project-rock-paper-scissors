const closeRulesBtn = document.querySelector('#display-rules-container');
const openRulesBtn = document.querySelector('#display-rules-container');
const gameBodyPaperPlayer = document.querySelector('.game-body-big-circle-container-paper');

const gameBodyPaperTextPlayer = document.querySelector('.game-body-big-circle-container-paper-text-player');
const gameBodyScissorsTextPlayer = document.querySelector('.game-body-big-circle-container-scissors-text-player');
const gameBodyRockTextPlayer = document.querySelector('.game-body-big-circle-container-rock-text-player');

const gameBodyPaperTextComputer = document.querySelector('.game-body-big-circle-container-paper-text-computer');
const gameBodyScissorsTextComputer = document.querySelector('.game-body-big-circle-container-scissors-text-computer');
const gameBodyRockTextComputer = document.querySelector('.game-body-big-circle-container-rock-text-computer');

const gameBodyPaperComputer = document.querySelector('.game-body-big-circle-container-paper');
const gameBodyScissors = document.querySelector('.game-body-big-circle-container-scissors');
const gameBodyRock = document.querySelector('.game-body-big-circle-container-rock');


const gameBodyDiv = document.querySelector('.game-body');
const afterPlayerComputerChoiceDiv = document.querySelector('.after-player-and-computer-choice-game-container');


const choiceOptions = ['rock', 'paper', 'scissors'];
let randomChoice = '';
const playerScore = document.querySelector('.header-score');
const computerScore = document.querySelector('.header-score');
const headerScore = document.querySelector('.header-score');
const winLoseText = document.querySelector('.win-lose-text');
let goal = 0

let a = document.getElementById("game-body-big-circle-computer-option-border");
let b = document.getElementById("game-body-big-circle-computer-option-border");
let c = document.getElementById("computer-option-svg-computer-rock");
let d = document.getElementById("computer-option-svg-computer-scissors");
let e = document.getElementById("computer-option-svg-computer-paper");


const changeCom = () => {
  a.style.border = "30px solid #dc2e4e";
  b.style.boxShadow = "0 5px 0 #bb2424e1";
  c.style.display = "block";
  d.style.display = "none";
  e.style.display = "none";
};

const getComputerChoice = () => {
  randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  return randomChoice;
};





const playRoundForPaper = () => {
  const player = gameBodyPaperTextPlayer.textContent;
  const computer = gameBodyPaperTextComputer.textContent;

  if ( (player === 'paper' && computer === 'paper') )
   {
    return "DRAW";
  }

  if (player === 'paper' && computer === 'rock') {
    // document.getElementById("game-body-big-circle-computer-option-border").style.border = "30px solid #dc2e4e";
    // document.getElementById("game-body-big-circle-computer-option-border").style.boxShadow = "0 5px 0 #bb2424e1";
    // document.getElementById("computer-option-svg-computer-rock").style.display = "block";
    // document.getElementById("computer-option-svg-computer-scissors").style.display = "none";
    // document.getElementById("computer-option-svg-computer-paper").style.display = "none";
    changeCom();
    // headerScore.textContent = `${(goal += 1)}`;
    //  'YOU WIN';
  }



  if (player === 'paper' && computer === 'scissors') {
    headerScore.textContent = `${(goal -= 1)}`;
    return 'YOU LOSE';
  }

  return 'odd call 😬';
};

console.log (playRoundForPaper())

const playRoundForRock = () => {
  const player = gameBodyRockTextPlayer.textContent;
  const computer = gameBodyRockTextComputer.textContent;

  if (
    (player === 'rock' && computer === 'rock') ) 
    {
    return "DRAW";
  }

  if (player === 'rock' && computer === 'scissors') {
    headerScore.textContent = `${(goal += 1)}`;
    return 'YOU WIN';
  }
  if (player === 'rock' && computer === 'paper') {
    headerScore.textContent = `${(goal -= 1)}`;
    return 'YOU LOSE';
  }

  return 'odd call 😬';
};

const playRoundForScissors = () => {
  const player = gameBodyScissorsTextPlayer.textContent;
  const computer = gameBodyScissorsTextComputer.textContent;

  if ( (player === 'scissors' && computer === 'scissors') ) 
  {
    return "DRAW";
  }

  if (player === 'scissors' && computer === 'paper') {
    headerScore.textContent = `${(goal += 1)}`;
    return 'YOU WIN';
  }
  if (player === 'scissors' && computer === 'rock') {
    headerScore.textContent = `${(goal -= 1)}`;
    return 'YOU LOSE';
  }

  return 'odd call 😬';
};


let getPlayerRock = () => {
  gameBodyRockTextPlayer.textContent = 'rock';
  gameBodyRockTextComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById("game-body-big-circle-player-option-border").style.border = "30px solid #dc2e4e";
  document.getElementById("game-body-big-circle-player-option-border").style.boxShadow = "0 5px 0 #bb2424e1";
  document.getElementById("player-option-svg-player-rock").style.display = "block";
  document.getElementById("player-option-svg-player-scissors").style.display = "none";
  document.getElementById("player-option-svg-player-paper").style.display = "none";
  winLoseText.textContent = playRoundForRock ()

};

let getPlayerScissors = () => {
  gameBodyScissorsTextPlayer.textContent = 'scissors';
  gameBodyScissorsTextComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById("game-body-big-circle-player-option-border").style.border = "30px solid #cbdc2e";
  document.getElementById("game-body-big-circle-player-option-border").style.boxShadow = "0 5px 0 #889421";
  document.getElementById("player-option-svg-player-scissors").style.display = "block";
  document.getElementById("player-option-svg-player-rock").style.display = "none";
  document.getElementById("player-option-svg-player-paper").style.display = "none";
  winLoseText.textContent = playRoundForScissors ()

};

let getPlayerPaper = () => {
  gameBodyPaperTextPlayer.textContent = 'paper';
  gameBodyPaperTextComputer.textContent = getComputerChoice();
  gameBodyDiv.style.display = 'none';
  afterPlayerComputerChoiceDiv.style.display = 'block';
  document.getElementById("game-body-big-circle-player-option-border").style.border = "30px solid #546de7";
  document.getElementById("game-body-big-circle-player-option-border").style.boxShadow = "0 5px 0 #042beee1";
  document.getElementById("player-option-svg-player-paper").style.display = "block";
  document.getElementById("player-option-svg-player-scissors").style.display = "none";
  document.getElementById("player-option-svg-player-rock").style.display = "none";
  winLoseText.textContent = playRoundForPaper ()

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