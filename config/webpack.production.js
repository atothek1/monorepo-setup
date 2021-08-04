const { merge } = require( "webpack-merge" );
const { mkdirSync: mkdir, existsSync: exists } = require( "fs" );
const { resolve } = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const StatoscopePlugin = require( "@statoscope/webpack-plugin" ).default;

module.exports = ( rootPath, packagePath ) => {
    const baseConfig = require( resolve( rootPath, "config", "./webpack.base.js" ) );
    const tempPath = resolve( packagePath, "temp" );
    if( !exists( tempPath ) ) {
        mkdir( tempPath );
    }
    return merge( { ...baseConfig( rootPath, packagePath ) }, {
        plugins: [
            new BundleAnalyzerPlugin( {
                analyzerMode: "static",
                generateStatsFile: true,
                openAnalyzer: true,
                logLevel: "error",
                reportFilename: `${ tempPath }/report.html`,
                statsFilename: `${ tempPath }/stats.html`,
            } ),
            new StatoscopePlugin( {
                saveTo: `${ tempPath }/report-[name]-[hash].html`,
                saveStatsTo: `${ tempPath }/stats-[name]-[hash].html`,
                watchMode: false,
                name: "example-app",
                open: "file",
            } ),
        ],
    } );
};
