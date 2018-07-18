const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/backboneJS.js',
  output: {
    filename: 'backboneJS2.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'webpack-test',
    libraryTarget: 'umd'
  },
  externals: {
    underscore: {
      commonjs: 'underscore',
      commonjs2: 'underscore',
      amd: 'underscore',
      root: '_'
    },
    "jQuery": {
      commonjs: 'jQuery',
      commonjs2: 'jQuery',
      amd: 'jQuery',
      root: '$'
    }
  }
};
