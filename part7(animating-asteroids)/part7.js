let context = document.getElementById("asteroids").getContext("2d");

// let asteroid = new Asteroid(24, 50, 0.3);

// the number of asteroid you want to create
let asteroids = [
  new Asteroid(24, 50, 0.2),
  new Asteroid(24, 50, 0.5),
  new Asteroid(5, 50, 0.2),
  new Asteroid(5, 50, 0.2),
  new Asteroid(5, 50, 0.2),
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
