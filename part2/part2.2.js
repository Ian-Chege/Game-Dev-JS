var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, 400, 400);

draw_grid(context);

/* SECTION 1 */

// Working with Paths
context.beginPath();
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#00FF00";
context.lineWidth = 2;
context.moveTo(50, 50);
context.lineTo(150, 250);
context.lineTo(250, 170);
// context.lineTo(320, 280);
// If we add a call to context.fill we should be able to fill the shape
/* The path is filled with the shortest possible route from the beginning of 
the path to the end. */
// context.fill();

// One can also close a path programmatically using context.closePath.
/* This will add a line from the current path position to the most recent 
open end. */
// context.closePath();
context.stroke();
context.fillText("(50, 50)", 30, 40);
context.fillText("(150, 250)", 130, 260);
context.fillText("(250, 170)", 255, 175);
// context.fillText("(320,280)", 300, 290);

/* SECTION 2 */

context.beginPath();
context.moveTo(50, 250);
context.lineTo(50, 350);
context.lineTo(150, 350);
context.closePath();
context.moveTo(230, 360);
context.lineTo(270, 360);
context.lineTo(270, 310);
context.closePath();
context.moveTo(250, 50);
context.lineTo(370, 50);
context.lineTo(370, 100);
context.closePath();
context.strokeStyle = "#FFFF00";
context.fillStyle = "#000000";
context.fill();
context.stroke();
