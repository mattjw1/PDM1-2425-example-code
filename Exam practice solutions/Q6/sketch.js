let ellipseW = 200;
let ellipseH = 100;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, ellipseW, ellipseH);
}

function keyPressed() {
    if (key === " ") {
        let temp = ellipseW;
        ellipseW = ellipseH;
        ellipseH = temp;
    }
}
