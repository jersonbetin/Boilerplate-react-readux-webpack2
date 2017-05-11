var webpack = require('webpack')
const path = require('path')
const dirSource = path.resolve(__dirname, 'src')
const port = process.env.PORT || 3000
const nodeEnv = process.env.NODE_ENV || 'dev'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: dirSource,
  entry: {
    app:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:'+port,
      'webpack/hot/only-dev-server',
      './app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
     //configuracion del babel loaders
      {
        //tipos de archivos en donde el loader va a trabajar js, jsx
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        //nombre de los loaders que se va a cargar
        use: [ 
          'babel-loader'
        ],
        //archivos que no van a ser tomados encuenta
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      //loader sass, style y css para cargar las hojas de estilo
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader"}, // creates style nodes from JS strings
          { loader: "css-loader" },// translates CSS into CommonJS
          { loader: "sass-loader" }// compiles Sass to CSS          
        ]
      },
      { 
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=fonts/[name].[ext]']
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirSource, 'index.html')
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv
    })
  ],
  devServer: {
    //carpeta que contiene el proyecto
    contentBase: dirSource,
    //host del servidor
    host:'0.0.0.0',
    //puerto del servidor por defecto 8080
    port: port,
    compress: false,
    //se insertará script en su paquete para que se ocupe de la recarga en tiempo real, y los mensajes de compilación aparecerán en la consola del navegad
    inline: true,
    //habilitar el hot module replecement
    hot: true,
    //controlamos que se muestra en el server
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
  }
}