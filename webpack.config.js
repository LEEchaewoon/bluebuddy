// webpack.config.js

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /(node_modules)/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: [
  //           ['latest', { modules: false }],
  //         ],
  //       },
  //     },
  //   ],
  // },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        cacheDirectory: true,
        presets: [
          ['latest', {
            modules: false
          }]
        ]
      }
    }],
    // externals: {
    //   'react': 'React',
    //   'react-dom': 'ReactDOM',
    //   'react-router-dom': 'ReactRouterDOM',
    //   '@material-ui/core': 'MaterialUI'
    // }
  },


  
};