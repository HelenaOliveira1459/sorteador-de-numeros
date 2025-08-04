const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


module.exports = {
  entry: path.resolve(__dirname, "src", "scripts", "index.js"), //definimos o arquivo e entrada
  output: { //definimos o arquivo onde vai sair o resultado compilado
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "development",
  devServer:{
   static: {
    directory: path.join(__dirname, "dist"),
   },
   port: 1457,
   open: true,
   historyApiFallback: {
    rewrites: [
      { from: /^\/result\.html$/, to: '/index.html' },  
    ]
   },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/html/home.html",
     
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.html$/i, 
        use: 'html-loader', 
      },
    ],
  },
};
