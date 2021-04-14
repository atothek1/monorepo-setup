const { merge } = require( "webpack-merge" );
const { join, resolve } = require("path");
const { DefinePlugin, HotModuleReplacementPlugin } = require( "webpack" );
const { isDevelopmentBuild, isProductionBuild, DEVELOPMENT_ENV } = require( "../build/webpack.utils" );

module.exports = ( rootPath, packagePath ) => {
    const baseConfig = require( resolve( rootPath, "config", "./webpack.base.js" ) );
    return merge( { ...baseConfig( rootPath, packagePath ) }, {
        devtool: "source-map",
        devServer: {
            compress: true,
            port: 3000,
            hot: true,
            watchContentBase: true,
            contentBase: join(__dirname, "dist"),
            historyApiFallback: true
        },
        plugins: [
            new HotModuleReplacementPlugin(),
            new DefinePlugin( {
                __IS_PRODUCTION__: JSON.stringify( isProductionBuild() ),
                __IS_DEVELOPMENT__: JSON.stringify( isDevelopmentBuild() ),
                "process.env": {
                    NODE_ENV: JSON.stringify( DEVELOPMENT_ENV ),
                },
            } )
        ],
    } );
};
