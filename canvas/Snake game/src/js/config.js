export class Config {
    static canvas = null;
    static blockSize = null;
    static speed = 100;
    static directions = {
        KeyW: "up",
        KeyS: "down",
        KeyA: "left",
        KeyD: "right",
    };
    static appInstance = null; // Добавили ссылку на текущий экземпляр App

    static init(canvas, blockSize, score) {
        Config.canvas = canvas;
        Config.blockSize = blockSize;
    }
}
