const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      framework: path.resolve(__dirname, "src/framework/")
    }
  },
  context: path.join(__dirname, "src"),

  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public")
  },

  devtool: "eval",

  devServer: {
    port: 4200
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
