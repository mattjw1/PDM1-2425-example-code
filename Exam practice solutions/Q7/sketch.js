let currentWidth = 0;
let fillColour;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    if (currentWidth > 0) {
        fill(fillColour);
        square(0, 0, currentWidth);
    }
}

function mouseClicked() {
    currentWidth += 100;
    if (currentWidth > width) {
        currentWidth = 100;
    }
    setRandomColour();
}

/**
 * Sets the fill to a random colour.
 */
function setRandomColour() {
    fillColour = color(random(255), random(255), random(255));
}
