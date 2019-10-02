//HTML related
var canvasElement 	= document.querySelector("canvas");
var canvas 			= canvasElement.getContext("2d");
var quantity 		= canvasElement.getAttribute("data-starfield");

//Javascript related
var stars = [];

//Set canvas size
canvasElement.width 	= window.innerWidth;
canvasElement.height 	= window.innerHeight;

window.onresize = function () {
	canvasElement.width 	= window.innerWidth;
	canvasElement.height 	= window.innerHeight;

	//Reposition stars
	for (let i = 0; i < quantity; i++) {
		var positionX 	= canvasElement.width * Math.random();
		var positionY 	= canvasElement.height * Math.random();

		stars[i].x = positionX;
		stars[i].y = positionY;
	}
}

//Class
function Star(x, y, offset, duration = 100, size = 2) {
	//constructor
	this.x 			= x;
	this.y 			= y;
	this.duration 	= duration;
	this.offset 	= offset;
	this.size 		= size;
	this.timer 		= offset % duration;

	//functions
	this.draw = function () {
		//Calculate animations
		if (this.timer > this.duration) {
			this.timer = 0;
		}
		this.timer += 1;

		//Calculate
		var framesize = Math.abs((this.timer / this.duration) - 0.5) * this.size + this.size / 10;

		//Update element
		canvas.beginPath();
		canvas.arc(this.x, this.y, framesize, 0, Math.PI * 2, false);
		canvas.fillStyle = "white";
		canvas.fill();
	}
}

//Spawn stars
for (let i = 0; i < quantity; i++) {
	var positionX 	= canvasElement.width * Math.random();
	var positionY 	= canvasElement.height * Math.random();
	var offset 		= Math.random() * 100;
	var duration 	= Math.random() * 50 + 50;
	var size 		= Math.random() * 2 + 1;

	stars.push(new Star(positionX, positionY, offset, duration, size));
}

//Animate stars
function renderFrame() {
	//Clear canvas
	canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);

	//Call all stars to update their animation
	for (let i = 0; i < quantity; i++) {
		stars[i].draw();
	}

	//Loop function
	setTimeout(renderFrame, 100);
}

//Start animation
renderFrame();
