var path = require('path');

var HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  entry: {
    app:['./app/scripts/index.js', 'webpack/hot/only-dev-server']
  },
  output: {
    path: path.resolve(__dirname, 'build/scripts'),
    publicPath: 'http://localhost:8080/',
    filename: 'main.js',
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel?'+ JSON.stringify({presets: ['react', 'es2015', 'stage-0']})],
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, loader: 'file?name=[name].[ext]'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};
