// https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:[ 
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, 
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.hbs$/, 
        loader: "handlebars-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include : path.join(__dirname, './src/images'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
      }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname, '/'),
    inline:true,
    stats:"errors-only",
    publicPath: '/'
 }
}