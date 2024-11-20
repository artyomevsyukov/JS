import "../scss/main.scss";
import { Config } from "./config";
import { Canvas } from "./canvas";
import { Snake } from "./snake";
import { Apple } from "./apple";

class App {
    constructor(canvas) {
        Config.init(canvas, canvas.blockSize);

        this.init();
    }
    init() {
        const snake = new Snake();
        let apple = new Apple(12, 5);

        const intervalId = setInterval(() => {
            Config.canvas.clear();
            Config.canvas.drawScore();
            // Config.canvas.render();
            snake.move(intervalId, apple);
            snake.draw();
            // apple.draw();
            Config.canvas.drawBorder();

            apple.drawCircle("Green");
        }, 100);

        document.body.addEventListener("keydown", (event) => {
            const newDirection = Config.directions[event.code];
            if (newDirection) {
                snake.setDirection(newDirection);
            }
        });
    }
}

const canvas = new Canvas(400, 400);

new App(canvas);
