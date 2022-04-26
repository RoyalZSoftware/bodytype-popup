const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	"mode": "none",
	"entry": "./src/index.js",
	"output": {
		path: path.resolve(__dirname, 'dist'),
		filename: 'rzspopups.min.js',
		library: 'RzsPopups',
		libraryTarget: "var"
	},
	devServer: {
		liveReload: true,
		host: '0.0.0.0',
		devMiddleware: {
			writeToDisk: true
		}
	},
	"module": {
		"rules": [
			{
				"test": /\.css$/,
				"use": [
					"style-loader",
					"css-loader"
				]
			},
			{
				"test": /\.(png)$/i,
				type: 'asset/resource'
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new UglifyJsPlugin({
			include: /\.js$/
		})]
	}
}
