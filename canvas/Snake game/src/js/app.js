import "../scss/main.scss";
import { Config } from "./config";
import { Canvas } from "./canvas";
import { Snake } from "./snake";
import { Apple } from "./apple";

class App {
    constructor(canvas) {
        Config.init(canvas, canvas.blockSize);
        Config.appInstance = this; // Сохраняем ссылку на текущий экземпляр App
        this.canvas = canvas;
        this.intervalId = null;
        this.speed = Config.speed;
        this.isGameRunning = false; // Флаг состояния игры
        this.init();
    }
    init() {
        this.stop(); // Завершаем все, что было до этого
        Config.canvas.clear();
        Config.canvas.score = 0;

        const snake = new Snake();
        const apple = new Apple();

        this.isGameRunning = true; // Устанавливаем игру как запущенную

        const gameLoop = () => {
            if (!this.intervalId) return;
            Config.canvas.clear();
            Config.canvas.render();
            snake.move(this.intervalId, apple);

            if (!this.isGameRunning) return; // Двойная проверка на случай завершения игры

            snake.draw();
            apple.draw();

            this.intervalId = setTimeout(gameLoop, Config.speed);
        };

        this.intervalId = setTimeout(gameLoop, Config.speed);

        // this.intervalId = setInterval(() => {
        //     Config.canvas.clear();
        //     Config.canvas.render();
        //     snake.move(this.intervalId, apple);
        //     snake.draw();
        //     apple.draw();
        // }, Config.speed);

        document.body.addEventListener("keydown", (event) => {
            if (!this.isGameRunning) return; // Игнорируем действия, если игра завершена
            const newDirection = Config.directions[event.code];
            if (newDirection) {
                snake.setDirection(newDirection);
            }
        });
    }

    stop() {
        if (this.intervalId) {
            // clearInterval(this.intervalId);
            clearTimeout(this.intervalId);
            this.intervalId = null;
            Config.speed = 100;
        }
        this.isGameRunning = false; // Ставим флаг, что игра завершена
        Config.canvas.clear();
        Config.canvas.render();
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
