// Installed packages:
//
// ***********
// For webpack initialization
// webpack
// webpack-cli
//
// ************
// For webpack to understand CSS as well
// css-loader = understands and bundles CSS files
// style-loader = applies and uses CSS
//
// ************
// For webpack to understand postCSS syntax
// postcss-loader = loads post CSS with some options set up
// postcss-simple-vars = allows for declaring variables
// postcss-nested = allows for nesting css selectors
// autoprefixer
// postcss-import = not force browsers to download all CSS files
// postcss-mixins =
//
// *************
// normalize.css = For initializing browser configurations

// This is part of Node library
const path = require('path');

// Plugins for post CSS to work as expected
const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-nested'),
	require('postcss-simple-vars'),
	require('autoprefixer'),
	require('postcss-mixins')
];

module.exports = {
	// Entry point of webpack server
	entry: './app/assets/scripts/app.js',
	// saving bundled JS file
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app')
	},
	// Setting up this server for local environment
	mode: 'development',
	watch: true, // watches for changes
	module: {
		// Make webpack understand CSS
		rules: [
			{
				test: /\.css$/i, // Only filenames that end with .css
				use: [
					'style-loader',
					'css-loader?url=false',
					// this line is for post CSS
					{ loader: 'postcss-loader', options: { plugins: postCSSPlugins } }
				]
			}
		]
	}
};
