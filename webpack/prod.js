const path = require('path');
const merge = require('webpack-merge');
const common = require('./config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../prod')
   },
   plugins: [
      new CleanWebpackPlugin({
         root: process.cwd(),
         verbose: true,
         dry: false
      }),
      new CopyWebpackPlugin([
         { from: './src/static', to: 'static' },
         { from: './.env', to: '' },
         { from: './package.json', to: '' },
         { from: './app.yaml', to: '' }
      ])
   ]
});
