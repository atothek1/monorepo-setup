import React, { ForwardedRef } from "react";
import { getClassName } from "@mono/styled";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled";

function InnerButton( props: ButtonProps, ref: ForwardedRef<HTMLButtonElement> ): JSX.Element {
    const {
        children,
        id,
        testId,
        isDisabled,
        type,
        onClick,
        css,
    } = props;

    return (
        <StyledButton
            ref={ ref }
            id={ id }
            data-testid={ testId }
            type={ type || "button" }
            onClick={ onClick }
            disabled={ isDisabled }
            className={ getClassName( props ) }
            css={ css }
        >
            {children}
        </StyledButton>
    );
}

export const Button = React.forwardRef( InnerButton );
