import styled from "styled-components";
import { textNormal, textNormalBold } from "@mono/styled";
import { StyledTextProps } from "./types";

export const StyledText = styled.span<StyledTextProps>`
  ${ ( { bold, color } ) => ( bold ? textNormalBold( color ) : textNormal( color ) ) };
`;
