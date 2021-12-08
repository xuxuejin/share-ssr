const path = require("path");
const { merge } = require("webpack-merge");
const baseConf = require("./webpack.base.conf");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConf, {
  entry: {
    app: ["./src/client/index.js"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
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
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[chunkhash:5].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "document.ejs"),
      inject: "body",
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "dist/")],
    // }),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3399,
    hot: true,
  },
});
