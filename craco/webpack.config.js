const path = require("path");

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
  resolve: {
    alias: {
      "@": resolvePath("../src")
    }
  }
};