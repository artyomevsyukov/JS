import { Config } from "./config";
import { Block } from "./block";

export class Apple extends Block {
    constructor(col, row) {
        super(col, row);

        this.col =
            Math.floor(Math.random() * (Config.canvas.widthInBlocks - 2)) + 1;
        this.row =
            Math.floor(Math.random() * (Config.canvas.heightInBlocks - 2)) + 1;
        this.position = new Block(this.col, this.row);
    }

    move() {
        this.col =
            Math.floor(Math.random() * (Config.canvas.widthInBlocks - 2)) + 1;
        this.row =
            Math.floor(Math.random() * (Config.canvas.heightInBlocks - 2)) + 1;
        this.position = new Block(this.col, this.row);
    }
    draw() {
        this.position.drawCircle("Blue");
    }
}
