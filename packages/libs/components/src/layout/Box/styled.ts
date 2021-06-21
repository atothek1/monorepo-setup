import styled from "styled-components";
import { StyledBoxProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    display: flex;
    ${ props => ( props.column ? "flex-direction: column;" : "" ) }
    ${ props => ( props.justifyContent ? `justify-content: ${ props.justifyContent };` : "" ) }
    ${ props => ( props.alignItems ? `align-items: ${ props.alignItems };` : "" ) }
    ${ props => ( props.$width ? `width: ${ props.$width };` : "" ) }
    ${ props => ( props.$height ? `height: ${ props.$height };` : "" ) }
    ${ props => ( props.padding ? `padding: ${ props.padding };` : "" ) }
    ${ props => ( props.backgroundColor ? `background-color: ${ props.backgroundColor };` : "" ) }
`;
