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
    ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
    ctx.stroke();
    if (x % major == 0) { ctx.fillText(x, x, 10); }
  }
  for (var y = 0; y < ctx.canvas.height; y += minor) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(ctx.canvas.width, y);
    ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
    ctx.stroke();
    if (y % major == 0) { ctx.fillText(y, 0, y + 10); }
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
  ctx.closePath()
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
