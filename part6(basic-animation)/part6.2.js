let context = document.getElementById("asteroids").getContext("2d");
context.strokeStyle = "white";
context.lineWidth = 1.5;
let x = 0, y = context.canvas.height / 5, radius = 20;
let xspeed = 1.5, yspeed = 0, gravity = 0.1;

let animation;

function draw(ctx) {
    draw_grid(ctx);
    // draw a simple circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function update() {
    x += xspeed;
    y += yspeed;
    yspeed += gravity;
    if (y >= context.canvas.height - radius) {
        y = context.canvas.height - radius;
        yspeed *= -0.6;
        xspeed *= 0.95;
    }
    // Wrapping the ball
    if (x <= 0 || x >= context.canvas.width) {
        x = (x + context.canvas.width) % context.canvas.width;
    }
}

function frame() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    draw(context);
    update();
    animation = window.requestAnimationFrame(frame);
}


window.requestAnimationFrame(frame);