const CopyPlugin = require("copy-webpack-plugin")
const path = require("path")
module.exports = {
    configureWebpack: {
        plugins: [
            new CopyPlugin(
                [
                    {
                        from: path.resolve(__dirname, 'src/assets/img/products'),
                        to: path.resolve(__dirname, 'dist/img/products')
                    },
                    {
                        from: path.resolve(__dirname, 'src/assets/img/models'),
                        to: path.resolve(__dirname, 'dist/img/models')
                    },
                ]
            ),
        ]
    }
}

