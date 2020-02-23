const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    alias: {
      framework: path.resolve(__dirname, "public/assets/framework/"),
      templates: path.resolve(__dirname, "src/templates/")
    }
  },
  context: path.join(__dirname, "src"),

  entry: {
    vendor: ["framework"],
    main: ["./index.js"],
    homePage: "./components/pages/homePage/index.js",
    aboutPage: "./components/pages/aboutPage/index.js",
    itemsPage: "./components/pages/itemsPage/index.js",
    notFoundPage: "./components/pages/notFoundPage/index.js"
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
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
    }),
    new MiniCssExtractPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
