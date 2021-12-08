const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
module.exports = merge(baseConfig, {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]-[local]-[hash:base64:5]",
              },
              esModule: true,
            },
          },
          "less-loader",
        ],
      },
    ],
  },
});
