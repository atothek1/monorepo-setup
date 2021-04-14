const { merge } = require( "webpack-merge" );
const { resolve } = require("path");

module.exports = ( rootPath, packagePath ) => {
    const baseConfig = require( resolve( rootPath, "config", "./webpack.base.js" ) );
    return merge( { ...baseConfig( rootPath, packagePath ) }, {} );
};
