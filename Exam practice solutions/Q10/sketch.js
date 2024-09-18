const NUM_SQUARES = 5;
const SIZE = 100;
let colours;
let circColour;

function setup() {
    createCanvas(500, 400);
    colours = [
        color(0), color(255), color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)
    ];
    circColour = color(0);
}

function draw() {
    background(255);
    for (let i = 0; i < colours.length; i++) {
        fill(colours[i]);
        square(i * SIZE, 0, SIZE);
    }
    fill(circColour);
    circle(mouseX, mouseY, SIZE);
}

function mouseClicked() {
    if (mouseY >= 0 && mouseY <= SIZE && mouseX >= 0 && mouseX <= width) {
        let i = floor(mouseX / SIZE);
        circColour = colours[i];
    }
}
