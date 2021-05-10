import styled from "styled-components";
import { textNormal, textNormalBold } from "@mono/styled";
import { TextProps } from "./types";

export type StyledTextProps = TextProps;

export const StyledText = styled.span<StyledTextProps>`
  ${ ( { bold, color } ) => ( bold ? textNormalBold( color ) : textNormal( color ) ) };
`;
