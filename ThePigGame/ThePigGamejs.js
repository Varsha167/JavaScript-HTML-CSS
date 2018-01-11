//alert("hi")
var rollDice, diceDOM, scores, activePlayer, currentScore, continueGame,prevDice,dice

init();


//var currentScore = document.querySelector(".player-current-score")
// var playerScore = document.querySelector(".player-score")



rollDice.addEventListener("click", function(){


	// if (currentScore >=10) {
	// 	document.querySelector('#score-' + activePlayer).textContent = currentScore
	// 	scores[activePlayer].textContent = currentScore
 // 		document.querySelector('#name-' + activePlayer).textContent = "Winner!"
 // 		document.querySelector(".player-" +activePlayer +'-panel').classList.add('winner')
 // 		document.querySelector(".player-" +activePlayer +'-panel').classList.remove('active')
 // 		diceDOM.style.display = 'none'
 // 		continueGame = false

 // 	} else 
 if (continueGame) {

 
var dice = Math.floor(Math.random()*6 ) +1	
	diceDOM.style.display = 'block'
	//display in the "current" box
	document.getElementById('current-score-'+ activePlayer ).textContent= dice
	diceDOM.src = 'dice-'+ dice +".png"
	console.log("previous " + prevDice)
	console.log("current " + dice)
	if (prevDice === 6 && dice === 6) {
		currentScore =0
		nextPlayer();
	} else if (dice !== 1) {
		currentScore = currentScore + dice
		document.getElementById('current-score-'+ activePlayer ).textContent = currentScore
	} 

	else {
		nextPlayer()

	} 
	prevDice = dice;


}

})

 document.querySelector('.btn-hold').addEventListener("click" , function(){

 	if (continueGame)
{
 	//add the current score to global score
 		scores[activePlayer] += currentScore

 	//display the score
 	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
 	
 	var finalScore = document.querySelector(".final-score").value 
 	var winningScore

 	if (finalScore){
 		
 		winningScore = finalScore

 	} else {

 	winningScore= 100
}

 	if (scores[activePlayer] >=winningScore) {
 		document.querySelector('#name-' + activePlayer).textContent = "Winner!"
 		document.querySelector(".player-" +activePlayer +'-panel').classList.add('winner')
 		document.querySelector(".player-" +activePlayer +'-panel').classList.remove('active')
 		diceDOM.style.display = 'none'
 		continueGame = false

 	} else{
 		nextPlayer()
 	}

 }

 })

document.querySelector(".btn-new-game").addEventListener("click" , init)


 function nextPlayer() {

 	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
		currentScore = 0;	
		document.getElementById('current-score-'+ activePlayer ).textContent = 0;
		document.querySelector('.player-0-panel').classList.toggle('active')
		document.querySelector('.player-1-panel').classList.toggle('active')
		document.querySelector('.dice').style.display = 'none'
 }

 function init() {

 rollDice = document.querySelector(".btn-roll-dice")
 diceDOM = document.querySelector('.dice')

 scores = [0,0]
 activePlayer = 0;
 currentScore = 0;
 continueGame =  true
//var finalScore =0;

document.getElementById('score-0').textContent = "0"
document.getElementById('score-1').textContent = "0"
document.getElementById('current-score-0').textContent = "0"
document.getElementById('current-score-1').textContent = "0"
document.getElementById('name-0').textContent = "Player 1"
document.getElementById('name-1').textContent = "Player 2"
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')

diceDOM.style.display = 'none'

 }







