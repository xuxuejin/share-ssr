const path = require('path');

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
    ],
  },
  resolve: {
    // 设置别名
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  }   
};
