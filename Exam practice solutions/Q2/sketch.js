const SQUARE_W = 200;
let squareX = 0;
let squareY = 0;
let moveAmt = 1;
let colour;

function setup() {
    createCanvas(200, 400);
    colour = getRandomColour();
}

function draw() {
    background(0);
    fill(colour);
    square(squareX, squareY, SQUARE_W);
    moveSquare();
}

function mouseClicked() {
    colour = getRandomColour();
}

function keyPressed() {
    if (key === "u" || key === "U") {
        moveAmt = -1;
    } else if (key === "d" || key === "D") {
        moveAmt = 1;
    }
}

/**
 * Moves the square as long as it won't go out of bounds.
 */
function moveSquare() {
    if ((moveAmt > 0 && squareY < height - SQUARE_W) || (moveAmt < 0 && squareY > 0)) {
        squareY += moveAmt;
    }
}

/**
 * Gets a random colour.
 * @returns {color} A p5.js color object
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}
