const { resolve } = require( "path" );

const rootPath = resolve( __dirname, "..", "..", "..", ".." );
const packagePath = resolve( __dirname, ".." );
const {
  getEnvironment,
  isValidEnvironment,
  getValidEnvironments,
} = require( resolve( rootPath, "config", "webpack.utils" ) );

const environment = getEnvironment();

// check if a valid environment is set to NODE_ENV
if ( !isValidEnvironment() ) {
  console.error( `NODE_ENV: "${ environment }" is not a valid environment. NODE_ENV must be one of: [ "${ getValidEnvironments().join( "\", \"" ) }" ]` );
  process.exit( 1 );
}

const config = require( resolve( __dirname, `webpack.${ environment }.js` ) );
module.exports = config( rootPath, packagePath );
