let context = document.getElementById("asteroids").getContext("2d"); // Complete this part

// asteroid shape
let segments = 24;
let shape = [];
for (let i = 0; i < segments; i++) {
  shape.push(Math.random() - 0.5);
}
let radius = 50;
let noise = 0.2;

// asteroid state
let x = context.canvas.width * Math.random();
let y = context.canvas.height * Math.random();
let angle = 0;

// asteroid movement
let reductionFactor = 0.2;
// If you want to reduce the speed of the asteroid, you can change the value of the reductionFactor variable to a value between 0 and 1.
// For example, if you want to reduce the speed of the asteroid by half, you can set the reductionFactor to 0.5.
// then -> reductionFactor * context.canvas.width * (Math.random() - 0.5); and so on
let x_speed = context.canvas.width * (Math.random() - 0.5); // measured in pixels per second (px/s)
let y_speed = context.canvas.height * (Math.random() - 0.5); // measured in pixels per second (px/s)
let rotation_speed = 2 * Math.PI * (Math.random() - 0.5);

// function to update the asteroid variables
// wrapping the asteroid
function update(elapsed) {
  if (x - radius + elapsed * x_speed > context.canvas.width) {
    x = -radius;
  }
  if (x + radius + elapsed * x_speed < 0) {
    x = context.canvas.width + radius;
  }
  if (y - radius + elapsed * y_speed > context.canvas.height) {
    y = -radius;
  }
  if (y + radius + elapsed * y_speed < 0) {
    y = context.canvas.height + radius;
  }
  x += elapsed * x_speed;
  y += elapsed * y_speed;
  angle = (angle + elapsed * rotation_speed) % (2 * Math.PI);
}

let previous, elapsed;
function frame(timestamp) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  if (!previous) previous = timestamp;
  elapsed = timestamp - previous;
  update(elapsed / 1000);
  draw(context, true);
  previous = timestamp;
  window.requestAnimationFrame(frame);
}
window.requestAnimationFrame(frame);
