import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
    ${ normalize };

    * {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        font-family: ${ ( { theme } ) => theme.typo.fontFamily }, sans-serif;
    }
    body {
        font-size: ${ ( { theme } ) => theme.typo.fontSize };
    }
    p, h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }
    #root {
        display: flex;
        flex-flow: row wrap;
    }
`;
