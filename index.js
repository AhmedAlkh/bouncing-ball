var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;
var paddleHeight = 12;
var paddleWidth = 72;
var paddleX = (canvas.width - paddleWidth)/2;


function drawBall() {
    ctx.beginPath();
    // Create the ball
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    // Create the paddle
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx
    } 
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy
    }
    x +=dx;
    y +=dy;
}
setInterval(draw, 10);