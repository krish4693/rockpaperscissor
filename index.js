let playerScore=0
let computerScore=0
let roundWinner =''

const playerSign=document.getElementById('playerScore')
const rockBtn=document.getElementById('rockBtn')

rockBtn.addEventListener("click",()=>{
  handleClick("ROCK")
},false);

function handleClick(playerSelection)
{
  console.log(playerSelection)
}