const path = require('path');

module.exports = {
  entry: './src/rendering_server/index.js',
  mode: 'development',
  target: 'node',
  output: {
    filename: 'server_bundle.js',
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