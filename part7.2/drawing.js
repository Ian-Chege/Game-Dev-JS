function draw_grid(ctx, minor, major, stroke, fill) {
  minor = minor || 10;
  major = major || minor * 5;
  stroke = stroke || "#00FF00";
  fill = fill || "#009900";
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  for (var x = 0; x < ctx.canvas.width; x += minor) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ctx.canvas.height);
    ctx.lineWidth = x % major == 0 ? 0.5 : 0.25;
    ctx.stroke();
    if (x % major == 0) {
      ctx.fillText(x, x, 10);
    }
  }
  for (var y = 0; y < ctx.canvas.height; y += minor) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(ctx.canvas.width, y);
    ctx.lineWidth = y % major == 0 ? 0.5 : 0.25;
    ctx.stroke();
    if (y % major == 0) {
      ctx.fillText(y, 0, y + 10);
    }
  }
  ctx.restore();
}

function draw_pacman(ctx, x, y, radius, mouth) {
  angle = 0.2 * Math.PI * mouth;
  ctx.save();
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(x, y, radius, angle, -angle);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function draw_ship(ctx, x, y, radius, options) {
  // Set default options if not provided
  options = options || {};

  // Save the current context state
  ctx.save();

  // If the "guide" option is enabled, draw a guide circle
  if (options.guide) {
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  // Set line width and colors based on options (or use defaults)
  ctx.lineWidth = options.lineWidth || 2;
  ctx.strokeStyle = options.stroke || "white";
  ctx.fillStyle = options.fill || "black";

  // Calculate the angle for the ship's shape
  let angle = (options.angle || 0.5 * Math.PI) / 2;

  // Draw the ship's shape
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(
    x + Math.cos(Math.PI - angle) * radius,
    y + Math.sin(Math.PI - angle) * radius
  );
  ctx.lineTo(
    x + Math.cos(Math.PI + angle) * radius,
    y + Math.sin(Math.PI + angle) * radius
  );
  ctx.closePath(); // close the shape
  ctx.fill(); // fill the shape
  ctx.stroke(); // outline the shape
  ctx.restore(); // restore the original context state
}

// Final Ship Drawing Function
// function draw_ship(ctx, radius, options) {
//   options = options || {};
//   let angle = (options.angle || 0.5 * Math.PI) / 2;
//   // Now we have two curve arguments
//   let curve1 = options.curve1 || 0.25;
//   let curve2 = options.curve2 || 0.75;
//   ctx.save();
//   if (options.guide) {
//     ctx.strokeStyle = "white";
//     ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
//     ctx.lineWidth = 0.5;
//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, 2 * Math.PI);
//     ctx.stroke();
//     ctx.fill();
//   }
//   ctx.lineWidth = options.lineWidth || 2;
//   ctx.strokeStyle = options.stroke || "white";
//   ctx.fillStyle = options.fill || "black";
//   ctx.beginPath();
//   ctx.moveTo(radius, 0);
//   // here we have the three curves
//   ctx.quadraticCurveTo(
//     Math.cos(angle) * radius * curve2,
//     Math.sin(angle) * radius * curve2,
//     Math.cos(Math.PI - angle) * radius,
//     Math.sin(Math.PI - angle) * radius
//   );
//   ctx.quadraticCurveTo(-radius * curve1, 0,
//     Math.cos(Math.PI + angle) * radius,
//     Math.sin(Math.PI + angle) * radius
//   );
//   ctx.quadraticCurveTo(
//     Math.cos(-angle) * radius * curve2,
//     Math.sin(-angle) * radius * curve2,
//     radius, 0
//   );
//   ctx.fill();
//   ctx.stroke();
//   ctx.restore();
// }

function draw_asteroid(ctx, radius, shape, options) {
  options = options || {};
  ctx.strokeStyle = options.stroke || "white";
  ctx.fillStyle = options.fill || "black";
  if (options.noise === undefined) {
    options.noise = 0.4;
  }
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < shape.length; i++) {
    ctx.rotate((2 * Math.PI) / shape.length);
    ctx.lineTo(radius + radius * options.noise * shape[i], 0);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  if (options.guide) {
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 0.25;
    ctx.beginPath();
    ctx.arc(0, 0, radius * (1 + options.noise / 2), 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * (1 - options.noise / 2), 0, 2 * Math.PI);
    ctx.stroke();
  }
  ctx.restore();
}

// update the draw function to use data from the new object
// e.g. -> asteroid.x
function draw(ctx, guide) {
  if (guide) {
    draw_grid(ctx);
  }
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  // call the function to draw the asteroid and pass in the parameters
  // ctx, radius, shape
  ctx.restore();
}
