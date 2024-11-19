import { Canvas } from "./canvas";

export class Block {
    constructor(col, row, blockSize, canvas) {
        this.col = col;
        this.row = row;
        this.blockSize = blockSize;
        this.ctx = canvas.ctx;
    }

    // Квадрат
    drawSquare(color) {
        let x = this.col * this.blockSize;
        let y = this.row * this.blockSize;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, this.blockSize, this.blockSize);
    }

    // круг
    circle(x, y, radius, fillCircle) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);

        if (fillCircle) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
    }

    drawCircle(color) {
        const centerX = this.col * this.blockSize + this.blockSize / 2;
        const centerY = this.row * this.blockSize + this.blockSize / 2;

        this.ctx.fillStyle = color;
        this.circle(centerX, centerY, this.blockSize / 2, true);
    }

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}
