const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      framework: path.resolve(__dirname, "src/vendors/framework/"),
      templates: path.resolve(__dirname, "src/templates/")
    }
  },
  context: path.join(__dirname, "src"),

  entry: {
    vendor: ["framework"],
    main: ["./index.js"]
  },
  mode: "development",

  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },

  devtool: "eval",

  devServer: {
    port: 4200
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "ejs-webpack-loader",
            options: {
              htmlmin: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.ejs"
    })
  ]
};
