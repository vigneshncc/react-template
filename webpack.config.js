const path = require('path');
var config = {
	mode: 'development',
	context: path.resolve(__dirname),
   entry: './src/index.js',
   devtool: 'inline-source-map',
   output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
   devServer: {
	  contentBase: path.join(__dirname, 'public'),
		compress: true,
      port: 8000
   },
     resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;