const proxyObj = {}
proxyObj['/'] = {
    target: 'http://124.222.25.150',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
}
module.exports = {
    lintOnSave: false,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}