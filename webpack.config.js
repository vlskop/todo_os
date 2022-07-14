const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: "development",
   entry: {
    main: [
        './index.js', 
        './calc.js', 
        './datetime.js',
        './loading.js',
        './login.js',
        './scrolling.js',
        './switchapps.js',
        './tasks.js',
        './weather.js']
   },
   
   plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin()
   ],

   module: {
    rules: [
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
        {test: /\.(png|jpg|svg|gif)$/, type: 'asset/resource'}
    ]
   },

   output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'docs'),
    assetModuleFilename: 'assets/[name][ext]'
   }

}