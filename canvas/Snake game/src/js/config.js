export class Config {
    static canvas = null;
    static blockSize = null;

    static init(canvas, blockSize) {
        Config.canvas = canvas;
        Config.blockSize = blockSize;
    }
}
