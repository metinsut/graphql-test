const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
   target: 'node',
   entry: './src/index.ts',
   module: {
      rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   externals: [webpackNodeExternals()]
};
