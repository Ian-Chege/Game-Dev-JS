// Get the canvas element and its drawing context
let context = document.getElementById("asteroids").getContext("2d");
context.strokeStyle = "white";
context.lineWidth = 1.5;

// Define the initial/starting position of the ball
let x = 0, y = context.canvas.height / 2;

let animation;

// Define a function to update the position of the ball
function update() {
    x += 1;
}

// Define a function to draw the ball and the grid
function draw(ctx) {
    draw_grid(ctx);
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

// Define a function to clear the canvas and draw the next frame
function frame() {
    // Clear the canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // Draw the ball and grid
    draw(context);
    // Update the position of the ball
    update();
    // Request the next animation frame
    animation = window.requestAnimationFrame(frame)
}

// Start the animation
// window.requestAnimationFrame(frame);

// Stop the animation
window.cancelAnimationFrame(animation);