module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    // 使用 html-loader 解决 html文件无法使用插值字符串问题
                    test: /\.html$/i,
                    exclude: /node_modules/,
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            ]
        }
    }
}
