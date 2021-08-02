const ENVIRONMENT = process.env.NODE_ENV;
const DEVELOPMENT_ENV = "development";
const PRODUCTION_ENV = "production";
const TESTING_ENV = "testing";

const VALID_ENVIRONMENTS = [ DEVELOPMENT_ENV, PRODUCTION_ENV, TESTING_ENV ];

module.exports = {
    DEVELOPMENT_ENV,
    PRODUCTION_ENV,

    /**
     * return the current setted NODE_ENV value
     * @returns {string}
     */
    getEnvironment: () => ENVIRONMENT,

    /**
     * Validates if the setted environment has a valid and supported value
     * @returns {boolean}
     */
    isValidEnvironment: () => VALID_ENVIRONMENTS.includes( ENVIRONMENT ),

    /**
     * returns an array of valid values for the NODE_ENV
     * @returns {[string, string, string]}
     */
    getValidEnvironments: () => VALID_ENVIRONMENTS,

    /**
     * return if a dev build is running
     * @returns {boolean}
     */
    isDevelopmentBuild: () => ENVIRONMENT === DEVELOPMENT_ENV,

    /**
     * return if a prod build is running
     * @returns {boolean}
     */
    isProductionBuild: () => ENVIRONMENT === PRODUCTION_ENV,

};
