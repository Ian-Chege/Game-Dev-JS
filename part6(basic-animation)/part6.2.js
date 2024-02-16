let context = document.getElementById("asteroids").getContext("2d");
context.strokeStyle = "white";
context.lineWidth = 1.5;
let x = 0, y = context.canvas.height / 5, radius = 20;
let xspeed = 1.5, yspeed = 0, gravity = 0.1;
let mouth = 0;

let animation;

function frame() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    draw(context);
    update();
    animation = window.requestAnimationFrame(frame);
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
    if (x <= 0 || x >= context.canvas.width) {
        x = (x + context.canvas.width) % context.canvas.width;
    }
    mouth = Math.abs(Math.sin(6 * Math.PI * x / (context.canvas.width)));
}

function draw(ctx) {
    draw_grid(ctx);
    // draw a simple circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

window.requestAnimationFrame(frame);