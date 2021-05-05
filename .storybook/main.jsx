module.exports = {
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
  },
  stories: [
    "../packages/libs/components/stories/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async ( config, { configType } ) => {

    config.module.rules.push( {
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[folder]__[local]",
              exportLocalsConvention: "camelCase",
            },
          },
        },
        "sass-loader",
      ],
    } );
    return config;
  },
};
