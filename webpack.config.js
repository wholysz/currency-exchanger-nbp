const path = require("path");

module.exports = {
    entry: "./app/scripts/index.js",
    output: {
        path: path.resolve("./dist"),
        filename: "app.js"
    }
};
