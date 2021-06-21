const { resolve } = require( "path" );
const webpack = require( "webpack" );
const { getEnvironment, isDevelopmentBuild, isProductionBuild } = require( "./webpack.utils" );

const babelConfigFile = resolve( "./", "config", "babel.base.js" );

module.exports = {
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          configFile: babelConfigFile,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin( {
      process: { env: {} },
      __IS_PRODUCTION__: JSON.stringify( isProductionBuild() ),
      __IS_DEVELOPMENT__: JSON.stringify( isDevelopmentBuild() ),
      __NAME__: JSON.stringify( "Styleguide" ),
      __VERSION__: JSON.stringify( "1.0.0" ),
      __ENVIRONMENT__: JSON.stringify( getEnvironment() ),
      __CONFIG__: JSON.stringify( {} ),
      "process.env.NODE_ENV": JSON.stringify( isProductionBuild() ? "production" : "development" ),
    } ),
  ],
};
