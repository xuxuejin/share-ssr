const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              publicPath: "http://localhost:8899/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
