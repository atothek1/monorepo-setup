const { merge } = require( "webpack-merge" );
const { resolve } = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const StatoscopePlugin = require( "@statoscope/ui-webpack" );

module.exports = ( rootPath, packagePath ) => {
  const baseConfig = require( resolve( rootPath, "config", "./webpack.base.js" ) );
  return merge( { ...baseConfig( rootPath, packagePath ) }, {
    plugins: [
      new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        generateStatsFile: true,
        openAnalyzer: true,
        logLevel: "error",
      } ),
      new StatoscopePlugin( {
        saveTo: "./temp/report-[name]-[hash].html",
        saveStatsTo: "./temp/stats-[name]-[hash].json",
        watchMode: false,
        name: "example-app",
        open: "file",
      } ),
    ],
  } );
};
