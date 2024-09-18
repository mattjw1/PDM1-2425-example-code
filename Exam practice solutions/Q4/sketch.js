let colours = [];

function setup() {
    createCanvas(500, 500);
    populateColours();
}

function draw() {
    background(255);
    for (let i = width; i > 0; i -= 50) {
        fill(colours[i / 50 - 1]);
        circle(width / 2, height / 2, i);
    }
}

function mousePressed() {
    populateColours();
}

/**
 * Populates the colours array with random color objects.
 */
function populateColours() {
    for (let i = 0; i < 10; i++) {
        colours[i] = color(random(255), random(255), random(255));
    }
}