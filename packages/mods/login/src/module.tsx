import React from "react";
import { Routes } from "@mono/navigation";
import { ModuleApi } from "./types";
import { getRoutes } from "../res/routes";

const name = "example-mod";
const version = "1.0.0";

interface ModuleProps {
  readonly api: ModuleApi;
}

export function Module( props: ModuleProps ): JSX.Element {
  const { api: { basePath } } = props;
  console.log( `Initialize Module: "${ name }" v.${ version }; basePath: ${ basePath }` );
  return ( <Routes routes={ getRoutes( basePath ) } /> );
}
