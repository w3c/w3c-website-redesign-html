const path = require('path');
module.exports = {
	entry: {
		'/web/dist/assets/js/comments': './apollo/assets/js/comments.js',
		'/web/dist/assets/js/country-autocomplete': './apollo/assets/js/country-autocomplete.js',
		'/web/dist/assets/js/main': './apollo/assets/js/main.js',
		'/web/dist/assets/js/slider': './apollo/assets/js/slider.js',
		'/web/dist/assets/js/working-group-autocomplete': './apollo/assets/js/working-group-autocomplete.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	mode: 'none',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '.')
	},
	optimization: {
		minimize: false
	}
};