import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Fullscreen } from "@components/index";
import { Routes } from "@components/app";
import { Route } from "@mono/navigation";
import { RouteIds } from "@res/ids";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Helmet>
      <BrowserRouter>
        <Fullscreen>
          <Routes routes={ routes } />
        </Fullscreen>
      </BrowserRouter>
    </StrictMode>
  );
}
