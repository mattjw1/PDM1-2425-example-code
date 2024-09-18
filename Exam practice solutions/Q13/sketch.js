function setup() {
    createCanvas(600, 600);
    fill(255, 0, 0);
}

function draw() {
    background(255);
    triangle(100, 500, 300, 100, 500, 500);
}

function keyPressed() {
    if (key === "r") {
        fill(255, 0, 0);
    } else if (key === "g") {
        fill(0, 255, 0);
    } else if (key === "b") {
        fill(0, 0, 255);
    }
}