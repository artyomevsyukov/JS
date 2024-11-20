import { Config } from "./config";
import { Block } from "./block";
import { Apple } from "./apple";

export class Snake extends Block {
    segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];

    constructor() {
        super(Config.blockSize, Config.canvas);
        this.head = this.segments[0];
        this.newHead = null;
        this.direction = "right";
        this.nextDirection = "right";
    }

    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            // i === 0
            //     ? this.segments[i].drawSquare("Red")
            //     : this.segments[i].drawSquare("Green");
            this.segments[i].drawSquare(i === 0 ? "Red" : "Green");
        }
    }

    checkCollision(head) {
        const leftCollision = head.col === 0;
        const topCollision = head.row === 0;

        const rightCollision = head.col === Config.canvas.widthInBlocks - 1;
        const bottomCollision = head.row === Config.canvas.heightInBlocks - 1;

        const wallCollision =
            leftCollision || topCollision || rightCollision || bottomCollision;

        let selfCollision = false;

        for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    }

    move(intervalId, apple) {
        this.direction = this.nextDirection;

        if (this.direction === "right") {
            this.newHead = new Block(this.head.col + 1, this.head.row);
        } else if (this.direction === "down") {
            this.newHead = new Block(this.head.col, this.head.row + 1);
        } else if (this.direction === "left") {
            this.newHead = new Block(this.head.col - 1, this.head.row);
        } else if (this.direction === "up") {
            this.newHead = new Block(this.head.col, this.head.row - 1);
        }

        if (this.checkCollision(this.newHead)) {
            this.gameOver(intervalId);
            return;
        }
        this.segments.unshift(this.newHead);

        this.head = this.newHead;

        // fix
        if (this.newHead.equal(apple)) {
            Config.canvas.score++;
            apple.move();
        } else {
            this.segments.pop();
        }
    }

    setDirection(direction) {
        let newDirection = direction;

        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }
        this.nextDirection = direction;
    }

    gameOver(intervalId) {
        clearInterval(intervalId);
        Config.canvas.ctx.font = "60px Courier";
        Config.canvas.ctx.fillStyle = "Black";
        Config.canvas.ctx.textAlign = "center";
        Config.canvas.ctx.textBaseline = "middle";
        Config.canvas.ctx.fillText(
            "Конец игры",
            Config.canvas.canvas.width / 2,
            Config.canvas.canvas.height / 2
        );
    }
}
