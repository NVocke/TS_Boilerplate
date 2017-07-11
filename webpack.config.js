module.exports = {
  context: __dirname + "/src/typescript/impl/",
  entry: "./index.ts",
  output: {
    path: __dirname + "/build/javascript/",
    filename: "index.js"
  }
};
