let shapes = [];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        shapes.push(new Shape());
    }
}

function draw() {
    background(255);
    for (let shape of shapes) {
        shape.checkAndUpdatePosition();
        shape.draw();
    }
}

/**
 * Represents a random shape
 */
class Shape {
    #x;
    #y;
    #width;
    #height;
    #colour;

    /**
     * Creates a new shape
     */
    constructor() {
        this.#width = random(20, 50);
        this.#height = random(20, 50);
        this.#x = random(0, width - this.#width);
        this.#y = random(0, height - this.#height);
        this.#colour = color(random(255), random(255), random(255));
    }

    /**
     * Checks if the mouse is over the shape and, if so, moves it to 
     * a new location.
     */
    checkAndUpdatePosition() {
        if (mouseX >= this.#x && mouseX <= this.#x + this.#width
            && mouseY >= this.#y && mouseY <= this.#y + this.#height) {
            this.#x = random(0, width - this.#width);
            this.#y = random(0, height - this.#height);
        }
    }

    /**
     * Draws the shape
     */
    draw() {
        fill(this.#colour);
        rect(this.#x, this.#y, this.#width, this.#height);
    }
}