import { Block } from "./block";

export class Snake extends Block {
    // segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
    constructor(col, row, blockSize, canvas) {
        super(col, row, blockSize, canvas);
        this.direction = "right";
        this.nextDirection = "right";
    }
}
