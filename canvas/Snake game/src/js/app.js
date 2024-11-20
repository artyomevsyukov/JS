import "../scss/main.scss";
import { Config } from "./config";
import { Canvas } from "./canvas";
import { Snake } from "./snake";
import { Apple } from "./apple";

class App {
    constructor(canvas) {
        Config.init(canvas, canvas.blockSize);
        this.canvas = canvas;
        this.intervalId = null;
        this.init();
    }
    init() {
        Config.canvas.clear();
        Config.canvas.score = 0;

        const snake = new Snake();
        const apple = new Apple();

        this.intervalId = setInterval(() => {
            Config.canvas.clear();
            Config.canvas.drawScore();
            // Config.canvas.render();
            // console.log("apple: ", apple);

            snake.move(this.intervalId, apple);
            snake.draw();
            // apple.draw();
            Config.canvas.drawBorder();

            // apple.drawCircle("Green");
            apple.draw();
        }, 75);

        document.body.addEventListener("keydown", (event) => {
            const newDirection = Config.directions[event.code];
            if (newDirection) {
                snake.setDirection(newDirection);
            }
        });
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        Config.canvas.clear();
        Config.canvas.drawScore();
    }
}

const canvas = new Canvas(400, 400);

let currentGame = new App(canvas);

document.getElementById("newGameBtn").addEventListener("click", () => {
    if (currentGame) {
        currentGame.stop();
    }
    currentGame = new App(canvas);
});
