const path = require('path');

const entry = [
    './server/server.js'
  ];

  const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  };

  module.exports = {
    mode: process.env.NODE_ENV,
    devServer : {
      publicPath: '/build',
      compress: true,
      port: 8080,
      hot:true
    },
    entry,
    output,
    devtool: "eval-source-map",
    module: {
      rules:[
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        },
        {
          test: /\.s?css/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ]
    },
  };