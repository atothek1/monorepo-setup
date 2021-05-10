import React, { ForwardedRef, forwardRef } from "react";
import { StyledText } from "./styled";
import { TextProps } from "./types";

function InnerText( props: TextProps, ref: ForwardedRef<any> ): JSX.Element {
  const {
    children,
    as = "span",
    testId,
    bold = false,
    color,
    css,
  } = props;
  // className is used by styled components to forward styles of wrapped components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const className = ( props as any ).className as string || "";
  return (
    <StyledText
      ref={ ref }
      data-testid={ testId }
      as={ as }
      bold={ bold }
      color={ color }
      className={ className }
      css={ css }
    >
      { children }
    </StyledText>
  );
}

export const Text = forwardRef( InnerText );
