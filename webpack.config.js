const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  // "style-loader",
  "css-loader",
];

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[hash].js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      // Meant for SCSS
      {
        test: /\.scss$/,
        use: [...cssLoaders, "sass-loader"],
      },
    ],
  },
};
