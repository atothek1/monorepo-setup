const { merge } = require( "webpack-merge" );
const { resolve } = require( "path" );
const { HotModuleReplacementPlugin } = require( "webpack" );

module.exports = ( rootPath, packagePath ) => {
    const baseConfig = require( resolve( rootPath, "config", "./webpack.base.js" ) );
    return merge( { ...baseConfig( rootPath, packagePath ) }, {
        devtool: "source-map",
        devServer: {
            compress: true,
            port: 3000,
            hot: true,
            watchContentBase: true,
            contentBase: resolve( packagePath, "dist" ),
            historyApiFallback: true,
        },
        plugins: [
            new HotModuleReplacementPlugin(),
        ],
    } );
};
