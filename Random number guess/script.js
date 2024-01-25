let number=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const input=document.querySelector('#guessField')
const guesses=document.querySelector('.guesses')
const rem=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p')

let guessarr=[];
let guesscount=1;
let playGame=true;

function validateguess(guess){
  if(isNaN(guess)){
    alert("Enter valid number")
  }
  else if(guess<1 && guess>100){
    alert("Enter number between 1 and 100")
  }
  else{
    guessarr.push(guess);
    if(guesscount===11){
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${number}`)
      endgame()
    }
    else{
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess){
  if(guess===number){  
    displaymessage("You guessed it right")
    endgame();
  }
  else if(guess<number){
    displaymessage("You guessed low. ")
  }
  else{
    displaymessage("You guessed high")
  }
}

function displayguess(guess){
  input.value="";
  guesses.innerHTML+=`${guess}, `
  rem.innerHTML=`${10-guesscount}`
  guesscount++;
}

function displaymessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`
}

function newgame(){
  const newgamebutton=document.querySelector('#newgame')
  newgamebutton.addEventListener('click',(e)=>{
    number=parseInt(Math.random*100+1)
    guessarr=[];
    guesscount=1;
    guesses.innerHTML=""
    rem.innerHTML=`${11-guesscount}`
    input.removeAttribute('disabled')
    startover.removeChild(p)
    playGame=true;
  })
}

function endgame(){
  input.value="";
  input.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame">Start new game</h2>`
  startover.appendChild(p)
  playGame=false;
  newgame()
}

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const val=parseInt(input.value);
    validateguess(val);
  })
}