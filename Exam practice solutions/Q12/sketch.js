

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
}

function draw() {
    background(255);
    if (frameCount % 50 === 0) {
        fill(getRandomColour());
    }
    for (let x = 50; x < width; x += 100) {
        for (let y = 50; y < width; y += 100) {
            if (mouseIsPressed) {
                circle(x, y, 100);
            } else {
                square(x, y, 100);
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
