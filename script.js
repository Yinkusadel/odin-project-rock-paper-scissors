let choiceOptions = ['rock', 'paper','scissors']
let randomChoice = ""


let getComputerChoice = () => {
    for (let i = 0; i < choiceOptions.length; i++) {
        randomChoice = (choiceOptions[(Math.floor(Math.random() * choiceOptions.length))]);
      }
      return randomChoice
}





let playRound = () => {

  let playerSelection = "rock";
  let computerSelection = getComputerChoice();

    if (computerSelection == "rock" && playerSelection == "rock") {
        return "it's a tie"
      } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "you win! rock beats scissors"
      } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose! Paper beats Rock"
      } else {
        return "please play again"
      }
  }


let game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
      }
      
}
  
  








console.log(      game  ()    )