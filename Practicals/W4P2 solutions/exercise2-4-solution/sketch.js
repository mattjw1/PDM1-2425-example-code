const SQUARE_SIZE = 50;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    for (let x = 0; x < width; x += SQUARE_SIZE) {
        for (let y = 0; y < height; y += SQUARE_SIZE) {
            if (x % 100 === y % 100) {
                fill(0);
            } else {
                fill(255);
            }
            square(x, y, SQUARE_SIZE);
        }
    }
}
