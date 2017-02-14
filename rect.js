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
*/

var canvas = document.getElementById("miley");
var context = canvas.getContext('2d');
var button = document.getElementById("og");

button.addEventListener("click", function(e){
	context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);	
});

var drawSomethin = function() {
	var x = event.clientX;
    var y = event.clientY;
	context.fillRect(x,y,100,200);
}


/*
var clear = function() {

}
*/

canvas.addEventListener('click', drawSomethin);

