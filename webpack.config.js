const path = require('path');

module.exports = {
  entry: {
	'Product' : './javascript/Product.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};