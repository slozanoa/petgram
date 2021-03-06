const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
