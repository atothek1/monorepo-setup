const { resolve } = require( "path" );

const parserOptions = {};

module.exports = {
  pagePerSection: true,
  exampleMode: "expand",
  // usageMode: "expand",
  propsParser: require( "react-docgen-typescript" ).withCustomConfig(
    "./tsconfig.json",
    parserOptions,
  ).parse,
  webpackConfig: require( "./webpack.styleguide" ),
  styleguideComponents: {
    Wrapper: resolve( __dirname, "../packages/libs/styled/src/StyleguideWrapper" ),
  },
  sections: [
    {
      name: "Components",
      content: "../packages/libs/components/docs/introduction.md",
      components: "../packages/libs/components/**/index.tsx",
    },
    /* {
      name: "Introduction",
      content: "docs/introduction.md",
    },
    {
      name: "Documentation",
      sections: [
        {
          name: "Installation",
          content: "docs/installation.md",
          description: "The description for the installation section",
        },
        {
          name: "Configuration",
          content: "docs/configuration.md",
        },
        {
          name: "Live Demo",
          external: true,
          href: "http://example.com",
        },
      ],
    },
    {
      name: "UI Components",
      content: "docs/ui.md",
      components: "lib/components/ui/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    },
    */
  ],
};
