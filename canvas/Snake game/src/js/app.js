import "../scss/main.scss";
import { Canvas } from "./canvas";

class App {
    constructor() {
        this.canvas = new Canvas();
        this.init();
    }
    init() {
        const intervalId = setInterval(() => {
            this.canvas.clear();
            this.canvas.drawScore();
            // this.canvas.render();
            // snake.move();
            this.canvas.increaseScore();
            // snake.draw();

            // apple.draw();
            this.canvas.drawBorder();
        }, 100);
    }
}

new App();
