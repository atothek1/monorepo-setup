const { resolve } = require( "path" );
const path = require( "path" );

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
  getComponentPathLine: ( pathname ) => {
    const pathParts = pathname.split( "/" );
    const packageName = pathParts[ 3 ];
    const componentName = pathParts[ pathParts.length - 2 ];
    return `import { ${ componentName } } from "@mono/${ packageName }"`;
  },
  compilerConfig: {
    objectAssign: "Object.assign",
    transforms: {
      moduleImport: false,
      dangerousTaggedTemplateString: true,
    },
  },
  sections: [
    {
      name: "Introduction",
      content: "../packages/libs/components/docs/introduction.md",
    },
    {
      name: "Common components",
      content: "../packages/libs/components/src/common/readme.md",
      components: "../packages/libs/components/src/common/**/index.tsx",
    },
    {
      name: "Forms components",
      content: "../packages/libs/components/src/forms/readme.md",
      components: "../packages/libs/components/src/forms/**/index.tsx",
    },
    {
      name: "Layout components",
      content: "../packages/libs/components/src/layout/readme.md",
      components: "../packages/libs/components/src/layout/**/index.tsx",
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
