const NUM_ELLIPSES = 150;
const DIAMETER = 20;
let ellipses = [];

function setup() {
    createCanvas(500, 400);
    makeEllipses();
}

function draw() {
    background(200);
    for (let e of ellipses) {
        fill(e.colour);
        ellipse(e.x, e.y, DIAMETER, DIAMETER);
    }
}

function mouseClicked() {
    for (let e of ellipses) {
        if (mouseX >= e.x - DIAMETER / 2 && mouseX <= e.x + DIAMETER / 2
            && mouseY >= e.y - DIAMETER / 2 && mouseY <= e.y + DIAMETER / 2) {
            e.colour = getRandomColour();
        }
    }
}

/**
 * Fills the ellipses array with random ellipses
 */
function makeEllipses() {
    for (let i = 0; i < NUM_ELLIPSES; i++) {
        ellipses.push({
            x: random(DIAMETER / 2, width - DIAMETER / 2),
            y: random(DIAMETER / 2, height - DIAMETER / 2),
            colour: getRandomColour()
        })
    }
}

/**
 * Gets a random colour.
 * @returns {p5.Color} An RGB colour.
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}
