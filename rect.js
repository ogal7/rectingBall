/*
html
	The only requirement is that it contain a canvas, you can be as minimalist or opulent as you'd like after meeting that requirement.
	Oh wait, you also a need a clear drawing button, that's important, but that's it.
	You'll also need this paddle game.
javascript
	Your javascript code should be able to to do, at a minimum 2 things
	1. Draw a rectangle on the canvas as the user clicks inside it.
		The rectangle location should be based on the click location
	2. Clear the canvas when the user clicks the clear button.
		put your html and canvas files in the workshop under canvas

Connect the dots, la la la

Create the page demonstrated in class today. You Should use the same html/javascript files that you had from yesterday.

javascript
Your javascript code should be able to to do, at a minimum 2 things
1. Draw a connected series of dots inside the canvas as the user clicks inside it.
2. Clear the canvas when the user clicks the clear button.


*/

var canvas = document.getElementById("miley");
var context = canvas.getContext('2d');
var button = document.getElementById("og");

context.fillStyle = "red";

var clear = function(event){
	context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
	context.beginPath();
}



var drawSomethin = function() {
	var x = event.clientX - 8;
    var y = event.clientY - 80;
    context.lineTo(x,y);
    context.stroke();
    context.beginPath();
    context.arc(x,y,15,0, 2*Math.PI);
    context.fill();
    context.moveTo(x,y);
    context.stroke();
}

var drawRect = function(){
	var x = event.clientX;
	var y = event.clientY - 60;
	context.fillRect(x,y,100,200);
}


button.addEventListener("click",clear);
canvas.addEventListener('click', drawSomethin);

