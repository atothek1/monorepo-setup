import React, { ForwardedRef, forwardRef } from "react";
import { getClassName } from "@mono/styled";
import { StyledText } from "./styled";
import { TextProps } from "./types";

function InnerText( props: TextProps, ref: ForwardedRef<HTMLElement> ): JSX.Element {
  const {
    children,
    as = "span",
    testId,
    bold = false,
    color,
    css,
  } = props;

  return (
    <StyledText
      ref={ ref }
      data-testid={ testId }
      as={ as }
      bold={ bold }
      color={ color }
      className={ getClassName( props ) }
      css={ css }
    >
      { children }
    </StyledText>
  );
}

export const Text = forwardRef( InnerText );
