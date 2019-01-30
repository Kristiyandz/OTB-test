
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');


module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    
};