const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "swc-loader",
                    options: {
                        sync: true,
                    }
                }
            }
        ]
    }
};