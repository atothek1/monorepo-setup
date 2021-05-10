import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import React, { ComponentType, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@mono/styled";

export * from "@testing-library/react";

export {
  act as invoke,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from "@testing-library/react-hooks";

function AllProviders( { children }: { readonly children: React.ReactNode } ): JSX.Element {
  return (
    <ThemeProvider theme={ theme }>
      {children}
    </ThemeProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
): RenderResult => render( ui, { wrapper: AllProviders as ComponentType, ...options } );

export { customRender as render };
export { default as userEvent } from "@testing-library/user-event";
