let playerScore=0
let computerScore=0
let roundWinner =''


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

endgameModal.classList.remove('active')
overlay.classList.remove('active')


rockBtn.addEventListener('click',()=>{
  handleClic('ROCK')
});
paperBtn.addEventListener('click',()=>{
  handleClic('PAPER')
});
scissorsBtn.addEventListener('click',()=>{
  handleClic("SCISSORS")
});

restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClic(playerSelection){
  // alert(playerSelection)
  if (isGameOver()) {
    openEndgameModal()
    // alert('game over')
    return
  }
  playerSign.textContent=returnSign(playerSelection)
  const computerSelection=getRandomChoice()
  computerSign.textContent=returnSign(computerSelection)
  playRound(playerSelection,computerSelection)
  if (isGameOver()) {
    openEndgameModal()
    // alert('game over')
    return
  }

  
}

function returnSign(playerSelection)
{
  if(playerSelection==='ROCK'){
    return '✊'
  }
  else if(playerSelection==='PAPER'){
    return '✋'
  }
  else if(playerSelection==='SCISSORS'){
    return '✌️'
  }

}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
  scoreMessage.textContent=roundWinner
  updateScoreMessage(roundWinner)
}

function updateScoreMessage(roundWinner)
{
  if(roundWinner==='computer'){

    computerScorePara.textContent=`Computer:${computerScore}`
    return
  }
  else if(roundWinner==='player'){
    playerScorePara.textContent=`Player 1:${playerScore}`
    return
  }
}

function isGameOver(){

  return playerScore===5||computerScore===5
}

function openEndgameModal(){
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal(){
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

