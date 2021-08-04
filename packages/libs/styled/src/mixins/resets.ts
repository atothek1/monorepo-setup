import { css, FlattenSimpleInterpolation } from "styled-components";

export function listReset(): FlattenSimpleInterpolation {
    return css`
    list-style: none;
    margin: 0;
    padding: 0;
    `;
}
