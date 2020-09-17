const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    // sourceMapFileName: 'bundle.map.js',
  },
  devtool: "#source-map",
  devServer: {
    publicPath: "/build/",
    contentBase: path.resolve(__dirname, "../Iteration Project"),
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["transform-class-properties"],
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: { test: /\.tsx?$/, exclude: /\.test.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".tsx", ".ts", ".fs", ".net"],
  },
};
