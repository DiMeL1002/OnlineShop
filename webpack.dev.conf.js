const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.path.src,
        // index: 'index.html',
        port: 8081,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api/**': {
                target: 'http://95.181.200.182:8080',
                pathRewrite: {
                    "^/api": ""
                },
                secure: false,
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})

