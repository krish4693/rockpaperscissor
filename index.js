let playerScore = 0
let computerScore = 0
let roundWinner = ''

const playerSign = document.getElementById('playerSign')
const computerSign=document.getElementById('sign')


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

function updateScore(){
    if(roundWinner==='tie')



const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)



