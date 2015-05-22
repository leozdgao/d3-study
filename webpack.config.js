module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './src/main.js']
	},
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	external: {
		d3: 'd3'
	}
};