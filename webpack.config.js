const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        // crea una carpeta nueva al lado de src, desde donde hasta donde copiar
        path: path.join(__dirname, 'dist'),
        //conjunto de archivos que leera
        filename: 'bundle.js'
    },
    // especificar servidor de desarrollo
    devServer: {
        port: 8081
    },
    module: {
        rules: [{
            //testear todos los archivos css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //especificar donde estar el archivo html que va a copiar
            template: './src/index.html'
        })
    ]
}