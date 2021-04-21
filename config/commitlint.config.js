// eslint-disable-next-line import/no-extraneous-dependencies
const lernaScopesConfig = require( "@commitlint/config-lerna-scopes" );

// additional custom scopes
const scopes = [ "release", "monorepo" ];
const jiraPattern = /((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-\d+)/g;
const allowedFooterPrefix = [ "refs", "closes" ];
const missingFooterMessage = "have not found any footer in the commit message. ensure that the the footer starts with a valid prefix and has a JIRA-ID with a leading #. Example: refs: #ID-123";
const missingJiraIdMessage = "have not found an JIRA ID in the footer last line of the commit message should be the JIRA ID. Example: refs: #ID-123";
const invalidFooterPrefixMessage = `have not found a valid prefix in the footer. valid options are: ${ allowedFooterPrefix.join( ", " ) }. Example: refs: #ID-123`;

function validateFooterPrefix( message ) {
  return allowedFooterPrefix.some( prefix => message.toLowerCase().startsWith( prefix ) );
}

function validateContainsJiraId( message ) {
  const matches = message.match( jiraPattern );
  return matches && matches.length >= 1;
}

// get lerna package scopes that are used as allowed scopes in conventional commit messages.
function getScopes( initialEnum = [] ) {
  return ctx => lernaScopesConfig.utils
    .getPackages()
    .then( packageList => initialEnum.concat( packageList ) )
    .then( scopeList => [ 2, "always", scopeList ] );
}

function jiraIdFooterRulePlugin( parsed = undefined ) {
  // there was no footer part detected in the commit message
  if ( parsed === undefined || ( parsed && parsed.footer === null ) ) {
    return [ false, missingFooterMessage ];
  }
  // check for prefix of the footer
  if ( !validateFooterPrefix( parsed.footer ) ) {
    return [ false, invalidFooterPrefixMessage ];
  }
  // check for jira id
  if ( validateContainsJiraId( parsed.footer ) ) {
    return [ true ];
  }
  //
  return [ false, missingJiraIdMessage ];
}

// setup config
module.exports = {
  extends: [ "@commitlint/config-conventional" ],
  plugins: [ {
    rules: {
      // custom rule to find JIRA Issue ID in the footer
      // "jira-id-footer": jiraIdFooterRulePlugin,
    },
  },
  ],
  rules: {
    "footer-leading-blank": [ 2, "always" ],
    "scope-enum": ctx => getScopes( scopes )( ctx ),
    // "jira-id-footer": [ 2, "always" ],
  },
};
