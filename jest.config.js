module.exports={
    verbose: true,
    testURL: "http://localhost/",
    setupTestFrameworkScriptFile: "<rootDir>/config/scripts/jest/setup.js",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    }
}