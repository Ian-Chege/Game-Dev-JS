let context = document.getElementById("asteroids").getContext("2d");

let guide = true;
let asteroid = new Asteroid(
  10000,
  Math.random() * context.canvas.width,
  Math.random() * context.canvas.height
);
asteroid.push(Math.random() * 2 * Math.PI, 1000, 60);
asteroid.twist(Math.random() * 100, 60);

let ship = new Ship(
  10,
  15,
  context.canvas.width / 2,
  context.canvas.height / 2,
  1000,
  200
);

let projectiles = []; //new array to hold the projectiles

function draw() {
  if (guide) {
    draw_grid(context);
  }
  asteroid.draw(context, guide);
  projectiles.forEach(function (p) {
    p.draw(context);
  });
  ship.draw(context, guide);
}

function update(elapsed) {
  asteroid.update(elapsed, context);
  ship.update(elapsed, context);
  projectiles.forEach(function (projectile, i, projectiles) {
    projectile.update(elapsed, context);
    if (projectile.life <= 0) {
      projectiles.splice(i, 1);
    }
  });
  if (ship.trigger && ship.loaded) {
    projectiles.push(ship.projectile(elapsed));
  }
}

// implement the key handler function here
function key_handler(e, value) {
  let nothing_handled = false;
  switch (e.key || e.keycode) {
    case "ArrowUp":
    case 37:
      ship.thruster_on = value;
      break;
    case "ArrowLeft":
    case 37:
      ship.left_thruster = value;
      break;
    case "ArrowRight":
    case 39:
      ship.right_thruster = value;
      break;
    case " ":
    case 32:
      ship.trigger = value;
      break;
    case "g":
    case 71:
      if (value) guide = !guide;
    default:
      nothing_handled = true;
  }
  if (!nothing_handled) e.preventDefault();
}

context.canvas.addEventListener(
  "keydown",
  function (e) {
    key_handler(e, true);
  },
  true
);

context.canvas.addEventListener(
  "keyup",
  function (e) {
    key_handler(e, false);
  },
  true
);

context.canvas.focus();

let previous;
function frame(timestamp) {
  if (!previous) previous = timestamp;
  let elapsed = timestamp - previous;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  update(elapsed / 1000);
  draw(context);
  previous = timestamp;
  window.requestAnimationFrame(frame);
}
window.requestAnimationFrame(frame);
