var webpack = require('webpack');
var fs = require('fs');

function MapJsonPlugin() {}

MapJsonPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation) {
    var fileName = compilation.chunks[0].files[0];
    var maps = {
      'res': {}
    };
    maps.res['main.js'] = {
      'uri': fileName
    };
    fs.writeFile('build/map.json', JSON.stringify(maps, null, 2), function(err){
      if(err) {
        console.log(err);
      } else {
        console.log('JSON saved to build/map.json');
      }
    });
  });
};

module.exports = {
  entry: {
    main: './app/scripts/index.jsx'
  },
  output: {
    path: 'build',
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?'+ JSON.stringify({presets: ['react', 'es2015', 'stage-0']})],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loaders: ['style','css','less']
      }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'NODE_ENV'     : JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin('main', 'main.[chunkhash].js'),
      new MapJsonPlugin()
  ]
};
