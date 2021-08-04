const { resolve } = require( "path" );
const webpack = require( "webpack" );
const CaseSensitivePathsPlugin = require( "case-sensitive-paths-webpack-plugin" );
const HtmlPlugin = require( "html-webpack-plugin" );
const TerserPlugin = require( "terser-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const { getEnvironment, isDevelopmentBuild, isProductionBuild } = require( "./webpack.utils" );

module.exports = ( rootPath, packagePath ) => {

    const minimize = isProductionBuild() && !( process.env.NO_MINIMIZE === "true" );

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
            clean: true,
            // assetModuleFilename: "images/[contenthash][ext][query]"
        },
        resolve: {
            extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
            mainFields: [ "browser", "main", "module" ],
            // setup aliases used in application packages
            alias: {
                "@components": `${ packagePath }/src/components`,
                "@containers": `${ packagePath }/src/containers`,
                "@hooks": `${ packagePath }/src/hooks`,
                "@pages": `${ packagePath }/src/pages`,
                "@services": `${ packagePath }/src/services`,
                "@store": `${ packagePath }/src/store`,
                "@typings": `${ packagePath }/src/typings`,
                "@utils": `${ packagePath }/src/utils`,
                "@res": `${ packagePath }/res`,
            },
        },
        module: {
            rules: [
                // babel-loader, transform TypeScript with babel
                {
                    test: /\.(ts|tsx)?$/,
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
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "images/[name].[contenthash][ext][query]"
                    }
                }
            ],
        },
        // configure bundle optimization
        optimization: {
            moduleIds: "deterministic",
            minimize,
            minimizer: [
                minimize && new TerserPlugin( {
                    parallel: true,
                    terserOptions: {
                        compress: {
                            drop_console: true
                        },
                    },
                } ),
            ].filter( Boolean ),
            // webpack own scrips to be bundled into own single file
            runtimeChunk: {
                name: entrypoint => `js/runtime.${ entrypoint.name }`,
            },
            splitChunks: {
                filename: "js/[name].[contenthash].js",
                chunks: "all",
                // enables long time caching for vendor dependencies
                cacheGroups: {
                    // bundle react router packages into own chunk
                    // must have higher prio then the chunk config that has react in it
                    "vendors.router": {
                        priority: 100,
                        enforce: true,
                        chunks: "all",
                        name: "vendors.router",
                        test: /node_modules\/(react-router|react-router-dom|history)/,
                        reuseExistingChunk: true,
                    },
                    // bundle react core packages into one chunk
                    "vendors.react": {
                        priority: 90,
                        enforce: true,
                        chunks: "all",
                        name: "vendors.react",
                        test: /node_modules\/(react|react-dom|react-is)/,
                        reuseExistingChunk: true,
                    },
                    // bundle core-js into own chunk
                    "vendors.core": {
                        enforce: true,
                        chunks: "all",
                        name: "vendors.core",
                        test: /node_modules\/(core-js)/,
                        reuseExistingChunk: true,
                    },
                    // bundle remaining vendor packages into one chunk
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
        ],
    };
};
