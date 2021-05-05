import cn from "classnames";
import React from "react";
import styles from "./styles.scss";
import { ButtonAllowedTypeValues } from "./types";

interface ButtonProps extends TestIdProps {
  readonly children: React.ReactNode;
  readonly isDisabled?: boolean;
  readonly type?: ButtonAllowedTypeValues;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
  readonly className?: string;
}

export function Button( props: ButtonProps ): JSX.Element {
  const {
    children,
    testId,
    isDisabled,
    type,
    onClick = () => {},
    className = "",
  } = props;

  const classNames = cn( styles.root, className );

  return (
    <button
      data-testid={ testId }
      type={ type || "button" }
      className={ classNames }
      onClick={ onClick }
      disabled={ isDisabled }
    >
      {children}
    </button>
  );
}
