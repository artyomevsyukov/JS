import { Config } from "./config";
import { Block } from "./block";

export class Apple extends Block {
    constructor(col, row) {
        super(col, row, Config.blockSize, Config.canvas);
    }

    move() {
        console.log("apple move");
    }
    draw() {}
}

// const apple = new Apple();
// export default apple;
