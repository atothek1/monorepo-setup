const { resolve } = require( "path" );
const baseConfig = require( "../../../../config/jest.base" );

module.exports = async () => {
    const conf = baseConfig( resolve( __dirname, ".." ) );
    return {
        ...conf,
    };
};
