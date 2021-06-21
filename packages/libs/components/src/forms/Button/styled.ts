import styled from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
    border: 0;
    outline: none;
    text-align: center;
    color: white;
    background-color: ${ props => ( props.isDisabled ? "lightgray" : "dodgerblue" ) };
    padding: 0.8rem;
    border-radius: 4px;
`;
