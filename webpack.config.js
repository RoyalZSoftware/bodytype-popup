const path = require('path');
module.exports = {
	"mode": "none",
	"entry": "./src/index.js",
	"output": {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
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
	}
}
