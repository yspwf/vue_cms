const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'app.js'
    },
    module:{
       rules:[
           {test:/\.js$/, loader:'babel-loader',exclude:/node_modules/,query:{
                    presets:['env','stage-2'],
                    plugins:['transform-runtime']
                }
           },
           {test:/\.vue$/, loader:'vue-loader'},
           {test:/\.css$/, loader:'style-loader!css-loader'},
           {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file-loader'},
       ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    devServer:{
        port:8080,
        historyApiFallback: true
    }

}