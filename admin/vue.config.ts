const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// 将路径片段用特定分隔符链接起来，规范化生成的路径
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // 基本路径
    publishPath: process.env.NODE_ENV === "production" ? "/" : "./",
    // 构建时的输出目录
    outputDir: "dist",
    // 放置静态资源的目录
    assetsDir: "static",
    // index.html的输出路径
    indexPath: "index.html",
    // 保存时是否使用eslint-loader检查
    lintOnSave: true,
    // 生产环境是否启用sourceMap
    productionSourceMap: false,
    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: true,
    // webpack配置
    configureWebpack: config => {
        config.entry.app = ['babel-polyfill', './src/main.ts']
        // 在生产模式下关闭console.log
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }

    },
    // 开发服务器配置
    devServer: {
        // 端口
        port: 8989,
        // 代理
        proxy: {
            '/api': {
                target: '', // 后端api地址
                changeOrigin: true, // 接口跨域需要配置，用于替换源
                secure: false, // 接受运行在https上，如果是https接口需要配置
                pathRewrite: {
                    '^/api': '/'
                } // 路径替换，如写的接口为/api/list,代理后会变为/list
            }
        }
    },
    // webpack高级配置如使用插件
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
        config.plugin('context').use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]) // 上下文替换
        config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin) // 可视化分析包大小
    },
    css: {
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false
    },
}