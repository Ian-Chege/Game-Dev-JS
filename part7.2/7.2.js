let context = document.getElementById("asteroids").getContext("2d");

// asteroid shape
// -> object literal
// complete the missing values
let asteroid = {
  segments: 24,
  shape: [],
  radius: 50,
  noise: 0.5,
  // x:
  // y:
  // angle:
  // x_speed:
  // y_speed:
  // rotation_speed:
};

// let segments = 24;
// let shape = [];
// for (let i = 0; i < segments; i++) {
//   shape.push(Math.random() - 0.5);
// }
// // let radius = choose an appropriate radius eg 50
// let noise = 0.2;

// // asteroid state
// let x = context.canvas.width * Math.random();
// let y = context.canvas.height * Math.random();
// let angle = 0;

// asteroid movement
// let x_speed = context.canvas.width * (Math.random() - 0.5);
// let y_speed = context.canvas.height * (Math.random() - 0.5);
// let rotation_speed = 2 * Math.PI * (Math.random() - 0.5);

for (var i = 0; i < asteroid.segments; i++) {
  asteroid.shape.push(Math.random() - 0.5);
}

// function to update the asteroid variables
// wrapping the asteroid
function update(elapsed) {
  if (
    asteroid.x - asteroid.radius + elapsed * asteroid.x_speed >
    context.canvas.width
  ) {
    asteroid.x = -asteroid.radius;
  }
  if (asteroid.x + asteroid.radius + elapsed * asteroid.x_speed < 0) {
    asteroid.x = context.canvas.width + asteroid.radius;
  }
  if (
    asteroid.y - asteroid.radius + elapsed * asteroid.y_speed >
    context.canvas.height
  ) {
    asteroid.y = -asteroid.radius;
  }
  if (asteroid.y + asteroid.radius + elapsed * asteroid.y_speed < 0) {
    asteroid.y = context.canvas.height + asteroid.radius;
  }
  asteroid.x += elapsed * asteroid.x_speed;
  asteroid.y += elapsed * asteroid.y_speed;
  asteroid.angle =
    (asteroid.angle + elapsed * asteroid.rotation_speed) % (2 * Math.PI);
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
