const currentTask = process.env.npm_lifecycle_event; // Select "dev" or "build"
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Remove everything before saving new version
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract CSS out of JS file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-nested'),
	require('postcss-simple-vars'),
	require('autoprefixer'),
	require('postcss-mixins')
];

class RunAfterCompile {
	apply(compiler) {
		compiler.hooks.done.tap('Copy images', function() {
			fse.copySync('./app/assets/images', './docs/assets/images');
		});
	}
}

let cssConfig = {
	test: /\.css$/i,
	use: [ 'css-loader?url=false', { loader: 'postcss-loader', options: { plugins: postCSSPlugins } } ]
};

let config = {
	entry: './app/assets/scripts/app.js',
	plugins: [],
	module: {
		rules: [ cssConfig ]
	}
};

if (currentTask == 'dev') {
	cssConfig.use.unshift('style-loader');
	config.output = {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app')
	};
	config.watch = true;
	config.mode = 'development';
}

if (currentTask == 'build') {
	cssConfig.use.unshift(MiniCssExtractPlugin.loader);
	postCSSPlugins.push(require('cssnano'));
	config.output = {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'docs')
	};
	config.mode = 'production';
	config.optimization = {
		splitChunks: { chunks: 'all' }
	};
	config.plugins.push(
		new HtmlWebpackPlugin({ filename: 'index.html', template: './app/index.html' }),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
		new RunAfterCompile()
	);
}

module.exports = config;
