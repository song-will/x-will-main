const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')


module.exports = merge(common, {
    mode: 'development',
    cache: { // 缓存, 二次快速启动
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    },
    devServer: {
        port: 33900,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})