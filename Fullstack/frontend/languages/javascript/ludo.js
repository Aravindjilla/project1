let totalP1=[]
let totalP2=[]
let winnerEl = document.getElementById("winner");
function randomP1(){
    let total1= document.getElementById('total')
    
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('random')
  ran.innerHTML=`${ num}`
  totalP1.push(num)
  let score = totalP1.reduce((a,b)=> a+b)
  total1.innerHTML=score
  if(score>=50){
     winnerEl.innerHTML = "WINNER PLAYER1"
  }
}

function randomP2(){
    let total1= document.getElementById('Total')
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('randomScore')
  ran.innerHTML=`${ num}`
  totalP2.push(num)
  let score = totalP2.reduce((a,b)=> a+b)
  total1.innerHTML=score
  if(score>=50){
     winnerEl.innerHTML = "WINNER PLAYER2"
  }
}