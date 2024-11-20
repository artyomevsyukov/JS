export class Config {
    static canvas = null;
    static blockSize = null;
    static directions = {
        KeyW: "up",
        KeyS: "down",
        KeyA: "left",
        KeyD: "right",
    };

    static init(canvas, blockSize, score) {
        Config.canvas = canvas;
        Config.blockSize = blockSize;
    }
}
