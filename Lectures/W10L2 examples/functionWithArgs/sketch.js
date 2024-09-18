/**
 * Using arrays would be better!
 */
let circle1X = 80;
let circle2X = 200;
let circle3X = 320;
let circle1Colour, circle2Colour, circle3Colour;
const CIRCLE_SIZE = 100;
const CIRCLE_Y = 200;

function setup() {
    createCanvas(400, 400);
    background(0);
    circle1Colour = color(255, 0, 0);
    circle2Colour = color(255, 0, 0);
    circle3Colour = color(255, 0, 0);
}

function draw() {
    /* VERSION SHOWN IN CLASS
    updateColours();

    fill(circle1Colour);
    circle(circle1X, CIRCLE_Y, CIRCLE_SIZE);

    fill(circle2Colour);
    circle(circle2X, CIRCLE_Y, CIRCLE_SIZE);

    fill(circle3Colour);
    circle(circle3X, CIRCLE_Y, CIRCLE_SIZE); */

    fill(getFillColour(circle1X));
    circle(circle1X, CIRCLE_Y, CIRCLE_SIZE);

    fill(getFillColour(circle2X));
    circle(circle2X, CIRCLE_Y, CIRCLE_SIZE);

    fill(getFillColour(circle3X));
    circle(circle3X, CIRCLE_Y, CIRCLE_SIZE);

}

/**
 * Checks if the mouse is over each circle and updates the circle's colour.
 * This is not a clean way to implement this functionality because:
 * - The function has two jobs: checking if the mouse is over a shape AND setting colour
 * - Very similar code is repeated three times
 * 
 * A better solution will:
 * - Use TWO functions: one to check if the mouse is over a shape and one to update the colour of the circles
 * - Not be repetitive
 */
function updateColours() {
    if (mouseX >= circle1X - CIRCLE_SIZE / 2 && mouseX <= circle1X + CIRCLE_SIZE / 2 && mouseY >= CIRCLE_Y - CIRCLE_SIZE / 2 && mouseY <= CIRCLE_Y + CIRCLE_SIZE / 2) {
        circle1Colour = color(0, 0, 255);
    } else {
        circle1Colour = color(255, 0, 0);
    }

    if (mouseX >= circle2X - CIRCLE_SIZE / 2 && mouseX <= circle2X + CIRCLE_SIZE / 2 && mouseY >= CIRCLE_Y - CIRCLE_SIZE / 2 && mouseY <= CIRCLE_Y + CIRCLE_SIZE / 2) {
        circle2Colour = color(0, 0, 255);
    } else {
        circle2Colour = color(255, 0, 0);
    }

    if (mouseX >= circle3X - CIRCLE_SIZE / 2 && mouseX <= circle3X + CIRCLE_SIZE / 2 && mouseY >= CIRCLE_Y - CIRCLE_SIZE / 2 && mouseY <= CIRCLE_Y + CIRCLE_SIZE / 2) {
        circle3Colour = color(0, 0, 255);
    } else {
        circle3Colour = color(255, 0, 0);
    }
}

/**
 * Gets the fill colour of the circle with the given x coordinate.
 * @param {number} x The circle's X coordinate
 * @returns {color} A colour object
 */
function getFillColour(x) {
    if (isMouseOverCircle(x)) {
        return color(0, 0, 255);
    }
    else {
        return color(255, 0, 0);
    }
}

/**
 * Checks if the mouse is over the circle at the given x coordinate.
 * 
 * This function is the simplest solution for the specific task but is 
 * not particularly flexible due to the use of the CIRCLE_Y and CIRCLE_SIZE
 * global variables.
 * @param {number} x The circle's x coordinate
 * @returns {boolean}
 */
function isMouseOverCircle(x) {
    return mouseX >= x - CIRCLE_SIZE / 2 && mouseX <= x + CIRCLE_SIZE / 2 && mouseY >= CIRCLE_Y - CIRCLE_SIZE / 2 && mouseY <= CIRCLE_Y + CIRCLE_SIZE / 2;
}