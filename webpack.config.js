/* globals module */
module.exports = {
	entry: "./src/main.js",
	output: {
		path: "./build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: "babel" }
		]
	}
};
