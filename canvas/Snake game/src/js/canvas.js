export class Canvas {
    constructor(width = 400, height = 400) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = width;
        this.canvas.height = height;

        this.blockSize = 10;
        this.widthInBlocks = this.canvas.width / this.blockSize;
        this.heightInBlocks = this.canvas.height / this.blockSize;

        this.score = 0;
    }

    increaseScore() {
        this.score++;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        this.drawScore();
        this.drawBorder();
    }

    drawBorder() {
        this.ctx.fillStyle = "Gray";
        this.ctx.fillRect(
            0,
            this.canvas.height - this.blockSize,
            this.canvas.width,
            this.blockSize
        );
        this.ctx.fillRect(0, 0, this.canvas.width, this.blockSize);
        this.ctx.fillRect(0, 0, this.blockSize, this.canvas.height);
        this.ctx.fillRect(
            this.canvas.width - this.blockSize,
            0,
            this.blockSize,
            this.canvas.height
        );
    }

    drawScore() {
        this.ctx.font = "20px Courier";
        this.ctx.fillStyle = "Black";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";
        this.ctx.fillText(
            "Счет: " + this.score,
            this.blockSize,
            this.blockSize
        );
    }

    gameOver(intervalId) {
        clearInterval(intervalId);
        this.ctx.font = "60px Courier";
        this.ctx.fillStyle = "Black";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(
            "Конец игры",
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }
}

// const canvas = new Canvas();

// export default canvas;
