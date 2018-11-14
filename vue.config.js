const path = require("path");
const webpack = require("webpack");

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
            	// path.resolve(__dirname, "./src/assets/styles/setup/*.scss"),
            	// path.resolve(__dirname, "./src/assets/styles/utilities/*.scss"),
            	path.resolve(__dirname, "./src/assets/styles/global.scss")
            ]
        }
    }
}