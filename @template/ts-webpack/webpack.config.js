const path = require('path')
const {CheckerPlugin} = require('awesome-typescript-loader')

var config = {
	entry: './source/소스스크립트명',
	mode: 'production',
	devtool: 'none',
	target: 'web',
	output: {
		filename: '출력될 스크립트명',
		path: path.resolve(__dirname, 'build'),
		publicPath: './',

		library: '지칭될 클래스명',
		libraryTarget: 'this',
		libraryExport: 'default'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new CheckerPlugin()
	],

	module: {
		unsafeCache: true,
		rules: [{
			test: /\.js$/,
			include: path.join(__dirname),
			exclude: /(node_modules)|(dist)/,
			use: {
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env'],
					plugins: []
				}
			}
		}]
	},

	optimization: {
		minimize: false
	},

	node: {
		console: false,

		global: true,
		process: true,
		setImmediate: false,
	
		path: true,
		url: false,

		Buffer: true,
		__filename: false,
    	__dirname: false,

		fs: 'empty',
		net: 'empty',
		dns: 'empty',
		dgram: 'empty',
		tls: 'empty'
	}
}

module.exports = [config]