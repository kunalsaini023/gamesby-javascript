const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
let resultData
let userChoice
let computerChoice

const possibleChoices= document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  userChoice= e.target.id
  userChoiceDisplay.innerHTML= userChoice
  generateComputerChoice()

}))
function generateComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3)+1
  if(randomNumber==1){
    computerChoice='ROCK'
  }
  if(randomNumber==2){
    computerChoice='SCISSORS'
  }
  if(randomNumber==3){
    computerChoice='PAPER'
  }
  computerChoiceDisplay.innerHTML= computerChoice
  findWinner()
}
function findWinner(){
  if(computerChoice=='ROCK'){
    if(userChoice=='ROCK'){
       resultData='DRAW!'
    }
    if(userChoice=='SCISSORS'){
      resultData='YOU LOSE!'
    }
    if(userChoice=='PAPER'){
      resultData='YOU WIN!'
    }

  }
  if(computerChoice=='SCISSORS'){
    if(userChoice=='ROCK'){
       resultData='YOU WIN!'
    }
    if(userChoice=='SCISSORS'){
      resultData='DRAW!'
    }
    if(userChoice=='PAPER'){
      resultData='YOU LOSE!'
    }

  }
  if(computerChoice=='PAPER'){
    if(userChoice=='ROCK'){
       resultData='YOU LOSE!'
    }
    if(userChoice=='SCISSORS'){
      resultData='YOU WIN!'
    }
    if(userChoice=='PAPER'){
      resultData='DRAW!'
    }

  }
resultDisplay.innerHTML=resultData
}
