import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Fullscreen } from "@components/index";
import { Routes } from "@components/app";
import { Route } from "@mono/navigation";
import { RouteIds } from "@res/ids";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@mono/styled";

interface AppProps {
  readonly name: string;
  readonly version: string;
  readonly environment: string;
  readonly routes: ReadonlyArray<Route<RouteIds>>;
}

export function App( props: AppProps ): JSX.Element {
  const {
    name,
    version,
    environment,
    routes,
  } = props;

  console.log( `Starting app: "${ name }" v${ version }; env: ${ environment }` );

  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <GlobalStyles />
          <Fullscreen>
            <Routes routes={ routes } />
          </Fullscreen>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
