let context = document.getElementById("asteroids").getContext("2d");

// object that represents an asteroid
// const asteroid = {
//   segments: 24,
//   shape: [],
//   radius: 50,
//   noise: 0.3,
//   x: context.canvas.width * Math.random(),
//   y: context.canvas.height * Math.random(),
//   angle: 0,
//   x_speed: context.canvas.width * (Math.random() - 0.5),
//   y_speed: context.canvas.height * (Math.random() - 0.5),
//   rotation_speed: 2 * Math.PI * (Math.random() - 0.5),
// };

// for (let i = 0; i < asteroid.segments; i++) {
//   asteroid.shape.push(Math.random() - 0.5);
// }

// let asteroid = new Asteroid(24, 50, 0.3);

// function that updates the position and rotation of an asteroid
// function update(elapsed) {
//   if (
//     asteroid.x - asteroid.radius + elapsed * asteroid.x_speed >
//     context.canvas.width
//   ) {
//     asteroid.x = -asteroid.radius;
//   }
//   if (asteroid.x + asteroid.radius + elapsed * asteroid.x_speed < 0) {
//     asteroid.x = context.canvas.width + asteroid.radius;
//   }
//   if (
//     asteroid.y - asteroid.radius + elapsed * asteroid.y_speed >
//     context.canvas.height
//   ) {
//     asteroid.y = -asteroid.radius;
//   }
//   if (asteroid.y + asteroid.radius + elapsed * asteroid.y_speed < 0) {
//     asteroid.y = context.canvas.height + asteroid.radius;
//   }
//   asteroid.x += elapsed * asteroid.x_speed;
//   asteroid.y += elapsed * asteroid.y_speed;
//   asteroid.angle =
//     (asteroid.angle + elapsed * asteroid.rotation_speed) % (2 * Math.PI);
// }

let asteroids = [
  new Asteroid(24, 50, 0.2),
  new Asteroid(24, 50, 0.5),
  new Asteroid(5, 50, 0.2),
];

function draw(ctx, guide) {
  if (guide) draw_grid(ctx);
  asteroids.forEach(function (asteroid) {
    asteroid.draw(ctx, guide);
  });
}

function update(elapsed) {
  asteroids.forEach(function (asteroid) {
    asteroid.update(elapsed);
  });
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
