module.exports = {
  context: __dirname + "/src",
  entry: "./main.js",

  output: {
    filename: "main.js",
    path: __dirname + "/www",
  },
  loaders: [
   {
	  test: /\.js$/,
	  exclude: /node_modules/,
	  loaders: ["babel-loader"],
   }
}
