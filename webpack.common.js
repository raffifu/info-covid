const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry:"./src/app.js",
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(jpg|png|svg)$/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: "./src/template.html",
			filename: "index.html"
		})
	]
}
