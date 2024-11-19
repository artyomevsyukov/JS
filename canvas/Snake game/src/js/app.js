import "../scss/main.scss";
import { Canvas } from "./canvas";
// import instanseCanvas from "./canvas";
import { Snake } from "./snake";
import { Apple } from "./apple";

class App {
    constructor(canvas) {
        // this.canvas = new Canvas();
        this.canvas = canvas;
        this.init();
    }
    init() {
        let head = new Snake(11, 11, this.canvas.blockSize, this.canvas);
        let apple = new Apple(10, 10, this.canvas.blockSize, this.canvas);

        head.drawSquare("Blue");
        apple.drawCircle("LightGreen");

        console.log("equal: ", head.equal(apple));

        const intervalId = setInterval(() => {
            // this.canvas.clear();
            this.canvas.drawScore();
            // this.canvas.render();
            // snake.move();
            // this.canvas.increaseScore();
            // snake.draw();

            // apple.draw();
            this.canvas.drawBorder();
        }, 1000);
    }
}

const canvas = new Canvas(400, 400);

new App(canvas);
