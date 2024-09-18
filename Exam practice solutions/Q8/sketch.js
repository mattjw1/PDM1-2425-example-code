

function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
    drawSquares();
}

function draw() {
    
}

function keyPressed() {
    if (key === "r") {
        drawSquares();
    }
}

/**
 * Draws the squares.
 */
function drawSquares() {
    background(255);
    for (let squareW = 400; squareW >= 100; squareW -= 100) {
        fill(getRandomColour());
        square(width / 4, height / 2, squareW);
        square(width * 0.75, height / 2, squareW);
    }
}

/**
 * Gets a random colour.
 * @returns {p5.Color} An RGB colour.
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}
