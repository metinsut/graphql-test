const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./config.js');

module.exports = merge(common, {
   mode: 'development',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../dev')
   },
   plugins: [
      new CleanWebpackPlugin({
         root: process.cwd(),
         verbose: true,
         dry: false
      })
   ]
});
