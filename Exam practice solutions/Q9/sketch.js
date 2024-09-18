const DIAMETER = 100;
let mode = "c";
let fillColour;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    fillColour = getRandomColour();
    drawGrid();
}

function draw() {
    
}

function keyPressed() {
    if (key === "a") {
        fillColour = getRandomColour();
        drawGrid();
    } else if (key === "s" || key === "c") {
        mode = key;
        drawGrid();
    }
}

/**
 * Draws the grid.
 */
function drawGrid() {
    background(255);
    fill(fillColour)
    for (let x = 0; x <= width; x += 100) {
        for (let y = 0; y <= height; y += 100) {
            if (mode === "c") {
                circle(x, y, DIAMETER);
            } else if (mode === "s") {
                square(x, y, DIAMETER);
            }
        }
    }
}

/**
 * Gets a random colour.
 * @returns {p5.Color} An RGB colour.
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}
