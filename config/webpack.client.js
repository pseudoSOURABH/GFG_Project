import path from "path"

module.exports = {
  entry: "./src/client/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "../dist"),
    hot:true,
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
