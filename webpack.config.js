const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
 "mode": "none",
 "entry": "./src/favorites.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "favorites.js"
 },
devServer: {
   contentBase: path.join(__dirname, 'dist')
 }
 ,
 module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  , plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: "src/index.html", to: "index.html" },
          ],
        }),
],
  
}