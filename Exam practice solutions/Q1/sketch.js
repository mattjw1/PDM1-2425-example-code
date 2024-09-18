let circ;

function setup() {
    createCanvas(300, 300);
    circ = new MovingCircle(width / 2, height / 2, -1);
}

function draw() {
    background(255);
    circ.draw();
    circ.move();
}

function mouseClicked() {
    if (circ.isMouseOver()) {
        circ.reverse();
    }
}

function keyPressed() {
    if (key === " ") {
        circ.reset();
    }
}

/**
 * Represents the moving circle.
 */
class MovingCircle {
    #DIAMETER = 50;
    #startX;
    #startY;
    #startSpeed;
    #x;
    #y;
    #ySpeed;

    /**
     * Creates a new MovingCircle
     * @param {number} x The x coordinate of the circle
     * @param {number} y The y coordinate of the circle
     * @param {number} ySpeed The speed and direction of the circle on the y axis
     */
    constructor(x, y, ySpeed) {
        this.#startX = x;
        this.#startY = y;
        this.#startSpeed = ySpeed;
        this.reset();
    }

    /**
     * Resets the circle to its starting position and direction
     */
    reset() {
        this.#x = this.#startX;
        this.#y = this.#startY;
        this.#ySpeed = this.#startSpeed;
    }

    /**
     * Draws the circle
     */
    draw() {
        fill(235, 52, 210);
        circle(this.#x, this.#y, this.#DIAMETER);
    }

    /**
     * Moves the circle
     */
    move() {
        this.#y += this.#ySpeed;
        if (this.#y <= this.#DIAMETER / 2 || this.#y >= height - this.#DIAMETER / 2) {
            this.reverse();
        }
    }

    /**
     * Reverses the direction of the circle
     */
    reverse() {
        this.#ySpeed *= -1;
    }

    /**
     * Checks if the mouse is over the circle (its bounding box)
     * @returns {boolean} True if the mouse is over the circle.
     */
    isMouseOver() {
        return mouseX >= this.#x - this.#DIAMETER / 2 && mouseX <= this.#x + this.#DIAMETER / 2
            && mouseY >= this.#y - this.#DIAMETER / 2 && mouseY <= this.#y + this.#DIAMETER / 2;
    }
}