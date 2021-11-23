const baseConfig = require( "../../../../config/babel.base" );

module.exports = ( ...args ) => ( { ...baseConfig( ...args ) } );
