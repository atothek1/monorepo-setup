import {
  css, DefaultTheme, FlattenInterpolation, ThemedStyledProps,
} from "styled-components";
import "../styled.d";

function textBase( color?: string, bold = false ): FlattenInterpolation<ThemedStyledProps<any, DefaultTheme>> {
  return css<DefaultTheme>`
    font-family: ${ ( { theme } ) => theme.typo.fontFamily };
    font-weight: ${ ( { theme } ) => ( bold ? theme.typo.fontWeightBold : theme.typo.fontWeight ) };
    color: ${ ( { theme } ) => ( color || theme.colors.colorTextDark ) };
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    `;
}

export function textNormal( color?: string ): FlattenInterpolation<ThemedStyledProps<any, DefaultTheme>> {
  return css<DefaultTheme>`
    ${ textBase( color, false ) };
    font-size: ${ ( { theme } ) => theme.typo.fontSize };
    line-height: ${ ( { theme } ) => theme.typo.lineHeight };
    `;
}

export function textNormalBold( color?: string ): FlattenInterpolation<ThemedStyledProps<any, DefaultTheme>> {
  return css<DefaultTheme>`
    ${ textBase( color, true ) };
    font-size: ${ ( { theme } ) => theme.typo.fontSize };
    line-height: ${ ( { theme } ) => theme.typo.lineHeight };
    `;
}
