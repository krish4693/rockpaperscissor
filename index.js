let playerScore = 0
let computerScore = 0
let roundWinner = ''

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        playerScore++
        roundWinner = 'player'
    }
    if ((
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    )) {
        computerScore++
        roundWinner = 'computer'
    }

}

function updateChoices(playerSelection, computerScore) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = '✊'
            break
        case 'PAPER':
            playerSign.textContent = '✋'
        case 'SCISSOR':
            playerSign.textContent = '✌'
            break
    }


  switch (computerSelection) {
    case 'ROCK':
      computerSign.textContent = '✊'
      break
    case 'PAPER':
      computerSign.textContent = '✋'
      break
    case 'SCISSORS':
      computerSign.textContent = '✌'
      break
  }
}

function getRandomChoice(){
    let radomNumber=Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            return 'ROCK'
            break
        case 1:
            return 'PAPER'
            break
        case 2:
            return 'SCISSOR'
            break
    }
}


const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)





