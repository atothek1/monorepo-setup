const { resolve } = require( "path" );
const webpack = require( "webpack" );
const CaseSensitivePathsPlugin = require( "case-sensitive-paths-webpack-plugin" );
const HtmlPlugin = require( "html-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const TerserPlugin = require( "terser-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
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
      // sass loader
      // is applied bottom to top,
      {
        test: /\.scss$/,
        use: [
          isDevelopmentBuild() && "style-loader",
          isProductionBuild() && {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[folder]-[name]__[local]--[hash:base64:8]",
                localIdentHashPrefix: "mono",
              },
              sourceMap: isDevelopmentBuild(),
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopmentBuild(),
            },
          },
        ].filter( Boolean ),
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
    new MiniCssExtractPlugin( {
      filename: isDevelopmentBuild() ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: isDevelopmentBuild() ? "[id].css" : "[id].[contenthash].css",
    } ),
  ],
};
