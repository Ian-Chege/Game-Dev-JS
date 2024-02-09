// Asteroid basic shape drawing
function draw_asteroid(ctx, radius, segments, options) {
    // Set default values
    options = options || {};
    ctx.strokeStyle = options.stroke || "white";
    ctx.fillStyle = options.fill || "black";

    // Draw the asteroid
    // Save the context - this allows the function to modify the context and then restore it to its original state later
    ctx.save();
    ctx.beginPath();

    // the for loop rotates the context by 2PI/segments each time and adds a line to the path
    for (let i = 0; i < segments; i++) {
        ctx.rotate(2 * Math.PI / segments);
        ctx.lineTo(radius, 0);
    }

    // Close the path and stroke/fill it
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    if (options.guide) {
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    // Restore the context to its original state - ensuring that any changes made to the context does not affect other parts of the code
    ctx.restore();
}