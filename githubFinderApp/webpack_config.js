const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "main.js"
    },
    devServer: {
        contentPath: path.resolve(__dirname, "dist"),
        publicPath: ''
    },
    module: {
        rules = [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};
