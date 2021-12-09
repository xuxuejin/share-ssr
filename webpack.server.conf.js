const path = require("path");
const { merge } = require("webpack-merge");
const WebpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.conf");

module.exports = merge(baseConfig, {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  externals: [WebpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.less$/i,
        // 服务端缺少 dom, style-loader 无效
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              // 天坑
              esModule: false,
              modules: {
                localIdentName: "[name]-[local]-[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
});
