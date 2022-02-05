const path = require("path");

module.exports = {
  entry: "./src/rendering_server/index.js",

  target: "node",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
          },
        },
      },
    ],
  },
};
