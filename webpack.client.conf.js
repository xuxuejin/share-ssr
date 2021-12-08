const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
module.exports = merge(baseConfig, {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [{
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
        }, "less-loader"],
      },
    ],
  },
});
