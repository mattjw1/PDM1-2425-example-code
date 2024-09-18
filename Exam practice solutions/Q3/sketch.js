const SIZE = 50;
let x, y;
let speed = 1;
let xDir = 1;
let yDir = 1;

function setup() {
    createCanvas(400, 400);
    x = random(width - SIZE);
    y = random(height - SIZE);
}

function draw() {
    background(0);
    fill(255);
    square(x, y, SIZE);
    updateLocation();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        speed++;
    } else if (keyCode === DOWN_ARROW) {
        speed--;
    }
}

/**
 * Update the location of the square, making sure it does not go out of bounds.
 * If the square reaches an edge, it will change direction.
 */
function updateLocation() {
    x += speed * xDir;
    y += speed * yDir;
    if (x <= 0 || x >= width - SIZE) {
        xDir *= -1;
    }
    if (y <= 0 || y >= height - SIZE) {
        yDir *= -1;
    }
}