const path = require("path");

module.exports = {
    mode: "development",
    entry: "./js/script.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"),
        },
    },
    watch: true,

    devtool: "source-map",
    module: {},
};
