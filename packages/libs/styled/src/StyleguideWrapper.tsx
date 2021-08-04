import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";

interface Props {
    readonly children?: ReactNode
}

const StyleguideWrapper = ( { children }: Props ) : JSX.Element => (
    <>
        <ThemeProvider theme={ theme }>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    </>
);
// eslint-disable-next-line import/no-default-export
export default StyleguideWrapper;
