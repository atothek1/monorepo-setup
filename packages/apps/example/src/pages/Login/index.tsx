import React from "react";
import { Module as LoginModule } from "@mono/login";

// exception from named exports
// as this is a lazy loaded/imported component
// it must be an default export to work properly
// with React.lazy(...)
export default function Auth(): JSX.Element {
  const api = {
    basePath: "/login",
  };
  return ( <LoginModule api={ api } /> );
}
