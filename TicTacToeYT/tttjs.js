function startGame()
// {

// 	for (var i = 0; i<=9; i++) {
// 		clearBox(i)
// 	}

	document.turn = "X" //variable on document obj
	document.winner = null
	displayMessage(document.turn + " gets to start ")

}



function displayMessage(msg) {
	document.getElementById("message").innerText = msg
}


function nextMove(square) { 
	if(document.winner != null)
	{
		displayMessage(document.winner + " has already won this game") //if this is true, control woll come out and nothing else will happen
	} else if(square.innerText === '') {
	square.innerText = document.turn
	switchTurn()
} else {

	displayMessage ("Pick another square")	
	}
}



function switchTurn() {
	if (checkForWinner(document.turn)) {
		displayMessage("Congratulations!" + document.turn + "You have won this game!")
		document.winner = document.turn
	} else if(document.turn === "X") {
		document.turn = "O"
		displayMessage("It's " + document.turn + "'s turn")
	} else {
	document.turn = "X"
	displayMessage("It's " + document.turn + "'s turn")
	}	
}

	
	
function checkForWinner(move){
	var result = false;
	if (checkBox(1,2,3,move) ||
		checkBox(4,5,6,move) ||
		checkBox(7,8,9,move) ||
		checkBox(1,4,7,move) ||
		checkBox(2,5,8,move) ||
		checkBox(3,6,9,move) ||
		checkBox(1,5,9,move) ||
		checkBox(3,5,7,move))  {
			 result = "true"
		}

		return result;

	}

function checkBox(a,b,c,move) {
	var result = false;
	if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
		 result = true;
	}

	return result;
}

function getBox(number) {
	return document.getElementById("s" + number).innerText
}

// function clearBox(number) {
// 	document.getElementById("s" + number).innerText = "";
// }