import { Config } from "./config";
import { Block } from "./block";

export class Snake extends Block {
    segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];

    constructor() {
        super(Config.blockSize, Config.canvas);
        this.direction = "right";
        this.nextDirection = "right";
    }

    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            i === 0
                ? this.segments[i].drawSquare("Red")
                : this.segments[i].drawSquare("Green");
        }
    }
}
