// var colors = ["rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(255, 0, 255)",
// "rgb(0, 0, 255)"
// ];

var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
//var  pickedColor =colors[3];
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton =document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click", function(){

easyBtn.classList.add("selected")
hardBtn.classList.remove("selected")
numSquares =3;
colors = generateRandomColors(numSquares);
pickedColor =pickColor();
colorDisplay.textContent = pickedColor;
for(var i =0; i<squares.length; i++) {
	if(colors[i]){ //for the first 3 colors, if colors[i] is true
		squares[i].style.backgroundColor=colors[i];
		}
		else
		{
		squares[i].style.display = "none";
		}

}


});

hardBtn.addEventListener("click", function(){

easyBtn.classList.remove("selected")
hardBtn.classList.add("selected")
numSquares=6;
colors = generateRandomColors(numSquares);
pickedColor =pickColor();
colorDisplay.textContent = pickedColor;
for(var i =0; i<squares.length; i++) {
	squares[i].style.display = colors[i];
	squares[i].style.display="block";

}
});

resetButton.addEventListener("click", function() {
//generate all new colors;
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked Color
colorDisplay.textContent = pickedColor;
messageDisplay.textContent ="";
this.textContent = "New Colors" /*use "this" bcuase we aew already inside the event listener of reset button.*/
//Reflecting Colors
for(var i =0; i<colors.length; i++) {
squares[i].style.backgroundColor =colors[i];
}
h1.style.backgroundColor = "steelblue"

});

colorDisplay.textContent = pickedColor;

for(var i =0; i <squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

squares[i].addEventListener("click" , function() {
	var clickedColor = this.style.backgroundColor;
	if(clickedColor === pickedColor) {

	rightColor(clickedColor);
	messageDisplay.textContent = "Correct!"
	resetButton.textContent = "Play Again?"
	h1.style.backgroundColor = clickedColor;
}

else {
	this.style.backgroundColor = "#232323";
	messageDisplay.textContent = "Try Again!"
}
});



}


function rightColor(color) {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor() {
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

function generateRandomColors(num /*6 or 3*/) {
	//take an array
	var arr = [];

	for (i =0 ; i<num; i++) {
		//get randomColor and push into array)
		arr.push(randomColor());

	}
	//return an array
	return arr;
}

function randomColor() {

	var r = Math.floor(Math.random() * 256); 

	var g = Math.floor(Math.random() * 256); 

	var b = Math.floor(Math.random() * 256); 

	//rgb(r, g, b)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//create button 
//select button
//event --click
//function --generateRandomColors