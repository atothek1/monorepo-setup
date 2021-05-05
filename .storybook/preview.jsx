import React from "react";

import styles from "./styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withBorderBoxContainer = ( Story, context ) => (
  <div className={ styles.container }>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Story { ...context } />
  </div>
);

export const decorators = [
  withBorderBoxContainer,
];
