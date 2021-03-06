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
              name: "[hash:5]-[name].[ext]",
              publicPath: "http://localhost:8899/",
            },
          },
        ],
      },
      {
        test: /\.css$/i,                                                                                                                                                             
        use: ["style-loader", "css-loader"],                                                                                                                          
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
