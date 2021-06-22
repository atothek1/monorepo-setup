// eslint-disable-next-line import/no-extraneous-dependencies
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";

interface Props {
  readonly children?: ReactNode
}

const StyleguideWrapper = ( { children }: Props ) : JSX.Element => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
    </Helmet>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
);
export default StyleguideWrapper;
