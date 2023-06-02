module.exports = {
    "roots": [
        "/home/adrien/Projects/dockerProject/www/assets/js"
    ],
    testMatch: ['**/__tests__/**/*.+(js|jsx)', '**/?(*.)+(spec|test).+(js|jsx)'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(axios|@fullcalendar))/'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'png'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
        "\\.(css|less)$": "identity-obj-proxy",

    },
    testEnvironment: "jsdom"
};