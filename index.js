var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;

function draw() {
    ctx.beginPath();
    // Create the ball
    ctx.arc(220, 140, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);