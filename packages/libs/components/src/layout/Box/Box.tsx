import React, { ForwardedRef } from "react";
import { getClassName } from "@mono/styled";
import { BoxProps } from "./types";
import { StyledBox } from "./styled";

function InnerBox( props: BoxProps, ref: ForwardedRef<HTMLElement> ): JSX.Element {
    const {
        children,
        as = "div",
        column = false,
        width = "100%",
        height = "100%",
        onClick,
        id,
        testId,
        justifyContent,
        alignItems,
        padding,
        css,
    } = props;

    return (
        <StyledBox
            ref={ ref as ForwardedRef<HTMLDivElement> }
            as={ as }
            id={ id }
            data-testid={ testId }
            onClick={ onClick }
            column={ column }
            justifyContent={ justifyContent }
            alignItems={ alignItems }
            $width={ width }
            $height={ height }
            padding={ padding }
            className={ getClassName( props ) }
            css={ css }
        >
            { children }
        </StyledBox>
    );
}

export const Box = React.forwardRef( InnerBox );
