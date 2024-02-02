var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, 400, 400);

draw_grid(context);

// Working with Paths
context.beginPath();
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#00FF00";
context.lineWidth = 2;
context.moveTo(50, 50);
context.lineTo(150, 250);
context.lineTo(250, 170);
context.stroke();
context.fillText("(50, 50)", 30, 40);
context.fillText("(150, 250)", 130, 260);
context.fillText("(250, 170)", 255, 175);
