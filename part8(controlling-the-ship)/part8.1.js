let context = document.getElementById("asteroids").getContext("2d");

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
  1000
);

function draw() {
  draw_grid(context);
  ship.draw(context, true);
  asteroid.draw(context, true);
}

function update(elapsed) {
  asteroid.update(elapsed, context);
  ship.update(elapsed, context);
}

// implement the key_handler function here
function key_handler(e, value) {
  let nothing_handled = false;
  switch (e.key || e.keycode) {
    case "ArrowUp":
    case 37:
      ship.thruster_on = value;
      break;
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

var previous;
function frame(timestamp) {
  if (!previous) previous = timestamp;
  var elapsed = timestamp - previous;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  update(elapsed / 1000);
  draw(context);
  previous = timestamp;
  window.requestAnimationFrame(frame);
}
window.requestAnimationFrame(frame);
