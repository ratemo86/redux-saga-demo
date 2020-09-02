const { useBabelRc, override, useEslintRc } = require('customize-cra')
const { getBabelLoader } = require("react-app-rewired");

module.exports = override(
  useBabelRc()
  //,useEslintRc()
);

