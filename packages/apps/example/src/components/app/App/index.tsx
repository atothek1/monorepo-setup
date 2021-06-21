import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Fullscreen } from "@components/index";
import { Routes } from "@components/app";
import { Route } from "@mono/navigation";
import { RouteIds } from "@res/ids";

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
        <Fullscreen>
          <Routes routes={ routes } />
        </Fullscreen>
      </BrowserRouter>
    </StrictMode>
  );
}
