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

    // move(occupiedBlocks) {
    //     this.col =
    //         Math.floor(Math.random() * (Config.canvas.widthInBlocks - 2)) + 1;
    //     this.row =
    //         Math.floor(Math.random() * (Config.canvas.heightInBlocks - 2)) + 1;

    //     this.position = new Block(this.col, this.row);

    //     for (let i = 0; i < occupiedBlocks.length; i++) {
    //         if (this.position.equal(occupiedBlocks[i])) {
    //             this.move(occupiedBlocks); // Call the move method again
    //             return;
    //         }
    //     }
    // }

    move(occupiedBlocks) {
        do {
            this.col =
                Math.floor(Math.random() * (Config.canvas.widthInBlocks - 2)) +
                1;
            this.row =
                Math.floor(Math.random() * (Config.canvas.heightInBlocks - 2)) +
                1;
            this.position = new Block(this.col, this.row);
        } while (occupiedBlocks.some((block) => this.position.equal(block)));
    }

    draw() {
        this.position.drawCircle("Blue");
    }
}
