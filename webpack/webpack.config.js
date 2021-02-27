const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: "./src/popup.ts",
    options: "./src/options.ts",
    background: "./src/background.ts",
    content: "./src/content.ts",
  },
  output: {
    path: path.resolve(__dirname,'../', 'dist'),
    filename: "[name].js",
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(
     {
     patterns: [
        {
            from: '.',
            to:'../dist',
            context: 'public'
          },
      ]
    }
    ),
  ],
};