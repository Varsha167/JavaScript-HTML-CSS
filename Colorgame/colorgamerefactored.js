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
///var hardBtn = document.querySelector("#hardbtn");
var modeBtn = document.querySelectorAll(".mode");

for (var i=0; i < modeBtn.length; i++) {

	modeBtn[i].addEventListener("click" , function(){

		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");//remove from both and add selection to the one we clicked on

		this.textContent === "Easy" ? numSquares =3 : numSquares =6;
		// if (this.textContent === "Easy") this -- button that was clicked on
		// {
		// 	numSquares =3;

		// } else {

		// 	numSquares =6;

		// }
		//figure out how many squares to show
		//pick a new color
		//pick a new picked color
		//update page to reflect changes
		reset();
	});

}


function reset() {

colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked Color
colorDisplay.textContent = pickedColor;
messageDisplay.textContent ="";
resetButton.textContent = "New Colors" 
//Reflecting Colors
for(var i =0; i<squares.length; i++) {
if(colors[i]){ //"If there is a color"
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block"; //unhiding the bottom 3.
		}
		else
		{
		squares[i].style.display = "none";
		}
}
h1.style.backgroundColor = "steelblue"
}


resetButton.addEventListener("click", function() {
//generate all new colors;
reset();

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