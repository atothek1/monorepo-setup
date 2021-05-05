const { resolve } = require( "path" );
const webpack = require( "webpack" );
const CaseSensitivePathsPlugin = require( "case-sensitive-paths-webpack-plugin" );
const HtmlPlugin = require( "html-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const TerserPlugin = require( "terser-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const { getEnvironment, isDevelopmentBuild, isProductionBuild } = require( "../build/webpack.utils" );

module.exports = ( rootPath, packagePath ) => {

  const outputDir = resolve( packagePath, "dist" );
  const packageInfo = require( resolve( packagePath, "package.json" ) );
  const mainEntryPoint = resolve( packagePath, packageInfo.main );
  const babelConfigFile = resolve( packagePath, "config", "babel.config.js" );

  const appConfig = packageInfo.config.app;

  return {
    mode: getEnvironment(),
    context: packagePath,
    target: "web",
    entry: {
      main: mainEntryPoint,
    },
    output: {
      filename: "[name].[contenthash].js",
      path: outputDir,
      publicPath: "/",
    },
    resolve: {
      extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
      mainFields: [ "browser", "main", "module" ],
      alias: {
        "@components": `${ packagePath }/src/components`,
        "@containers": `${ packagePath }/src/containers`,
        "@pages": `${ packagePath }/src/pages`,
        "@services": `${ packagePath }/src/services`,
        "@store": `${ packagePath }/src/store`,
        "@utils": `${ packagePath }/src/utils`,
        "@res": `${ packagePath }/res`,
      },
    },
    module: {
      rules: [
        // babel-loader
        {
          test: /\.tsx?$/,
          include: /(src|res)/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              configFile: babelConfigFile,
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        },
        // sass loader
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
    optimization: {
      moduleIds: "deterministic",
      minimize: true,
      minimizer: [
        new TerserPlugin( {
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: isProductionBuild(),
            },
          },
        } ),
      ],
      runtimeChunk: "single",
      splitChunks: {
        filename: "[name].[contenthash].js",
        chunks: "initial",
        // enables long time caching for vendor dependencies
        cacheGroups: {
          "vendors.react": {
            priority: 90,
            enforce: true,
            chunks: "all",
            name: "vendors.react",
            test: /node_modules\/(react|react-dom|react-is)/,
            reuseExistingChunk: true,
          },
          "vendors.router": {
            priority: 100,
            enforce: true,
            chunks: "all",
            name: "vendors.router",
            test: /node_modules\/(react-router|react-router-dom|history)/,
            reuseExistingChunk: true,
          },
          "vendors.core": {
            enforce: true,
            chunks: "all",
            name: "vendors.core",
            test: /node_modules\/(core-js)/,
            reuseExistingChunk: true,
          },
          vendors: {
            enforce: true,
            chunks: "all",
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new CleanWebpackPlugin( {
        root: packagePath,
        verbose: true,
      } ),
      new HtmlPlugin( {
        template: resolve( packagePath, "res/index.ejs" ),
        chunksSortMode: "auto",
      } ),
      new webpack.DefinePlugin( {
        __IS_PRODUCTION__: JSON.stringify( isProductionBuild() ),
        __IS_DEVELOPMENT__: JSON.stringify( isDevelopmentBuild() ),
        __NAME__: JSON.stringify( appConfig.name ),
        __VERSION__: JSON.stringify( packageInfo.version ),
        __ENVIRONMENT__: JSON.stringify( getEnvironment() ),
        __CONFIG__: JSON.stringify( appConfig ),
        "process.env.NODE_ENV": JSON.stringify( isProductionBuild() ? "production" : "development" ),
      } ),
      new MiniCssExtractPlugin( {
        filename: isDevelopmentBuild() ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: isDevelopmentBuild() ? "[id].css" : "[id].[contenthash].css",
      } ),
    ],
  };
};
