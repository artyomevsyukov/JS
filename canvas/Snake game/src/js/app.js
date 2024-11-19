import "../scss/main.scss";
import { Config } from "./config";
import { Canvas } from "./canvas";
import { Snake } from "./snake";
import { Apple } from "./apple";
import { Block } from "./block";

class App {
    constructor(canvas) {
        Config.init(canvas, canvas.blockSize);

        this.canvas = canvas;

        this.init();
    }
    init() {
        const snake = new Snake();
        let head = new Block(11, 11);
        let apple = new Apple(10, 10);

        head.drawSquare("Blue");
        apple.drawCircle("Green");

        console.log("equal: ", head.equal(apple));

        const intervalId = setInterval(() => {
            // this.canvas.clear();
            this.canvas.drawScore();
            // this.canvas.render();
            // snake.move();
            // this.canvas.increaseScore();
            snake.draw();

            // apple.draw();
            this.canvas.drawBorder();
        }, 1000);
    }
}

const canvas = new Canvas(400, 400);

new App(canvas);
