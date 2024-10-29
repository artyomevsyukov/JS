export default {
    clearMocks: true, //Все моки перед стартом будут очищаться
    collectCoverageFrom: ["src/**/*.js"], // Откуда собирать отчет по покрытию тестами
    coverageDirectory: "coverage", // Где должен храниться отчет по покрытию тестами
    moduleFileExtensions: ["js"], // Какие расширения файлов будут тестироваться
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"], // Где могут находиться наши тесты в каких папках, файлах
    testPathIgnorePatterns: ["\\\\node_modules\\\\"], // Где не надо искать
    transformIgnorePatterns: ["<rootDir>/node_modules/"], // Где не нужно учитывать файлы для трансформации
    transform: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
            "jest-transform-stub",
        "^.+\\.(js|jsx)?$": "babel-jest",
        //         "^.+\\.jsx?$": "babel-jest",
    },
    testEnvironment: "node",
    // verbose: false, подробный отчет о тестах
};
