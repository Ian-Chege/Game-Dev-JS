var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, 400, 400);

draw_grid(context);
