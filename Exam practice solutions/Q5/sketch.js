let x = 100;
let y = 100;
let count = 0;
const DIAMETER = 200;

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(255);
    setFill();
    circle(x, y, DIAMETER);
    updateCircle();
}

function mouseClicked() {
    count++;
}

/**
 * Sets the fill colour of the circle according to the number 
 * of clicks.
 */
function setFill() {
    if (count % 3 === 0) {
        fill(255, 0, 0);
    } else if (count % 3 === 1) {
        fill(0, 255, 0);
    } else if (count % 3 === 2) {
        fill(0, 0, 255);
    }
}

/**
 * Moves the circle if an arrow key is pressed.
 */
function updateCircle() {
    if (keyIsPressed) {
        if (keyCode === UP_ARROW && y > DIAMETER / 2) {
            y--;
        } else if (keyCode === DOWN_ARROW && y < height - DIAMETER / 2) {
            y++;
        } else if (keyCode === LEFT_ARROW && x > DIAMETER / 2) {
            x--;
        } else if (keyCode === RIGHT_ARROW && x < width - DIAMETER / 2) {
            x++;
        }
    }
}