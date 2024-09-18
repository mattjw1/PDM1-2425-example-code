const SQUARE_SIZE = 50;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    for (let x = 0; x < width; x += SQUARE_SIZE) {
        for (let y = 0; y < height; y += SQUARE_SIZE) {
            square(x, y, SQUARE_SIZE);
        }
    }
}
