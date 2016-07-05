'use strict';

import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

let config = {
  entry: {
    app:['./app/scripts/index.js', 'webpack/hot/only-dev-server']
  },
  output: {
    path: path.resolve(__dirname, 'build/scripts'),
    filename: 'main.js',
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel?'+ JSON.stringify({presets: ['react', 'es2015', 'stage-0']})],
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};


gulp.task('dev', function() {
  config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/');
  var compiler = webpack(config);
  var server = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    contentBase: './app/',
    publicPath: '/',
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
  server.listen(8080);
});

gulp.task('default', function() {

});
