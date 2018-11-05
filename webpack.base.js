const path = require('path')
module.exports = {
	module: {
		rules: [{
			test: /.js?$/,
			include: [
				path.resolve(__dirname, 'src')
			],
			exclude: [
				path.resolve(__dirname, 'node_modules'),
			],
			loader: 'babel-loader',
			options: {
				presets: ['react', 'stage-0', ['env', {
					targets: {
						browers: ['last 2 versions']
					}
				}]]
			}
		}]
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.css']
	},
	devtool: 'source-map',
}