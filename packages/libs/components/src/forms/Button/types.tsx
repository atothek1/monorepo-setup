import React from "react";

export type ButtonAllowedTypeValues = "submit" | "reset" | "button";

export interface ButtonProps extends TestIdProps {
    readonly children: React.ReactNode;
    readonly id?: string;
    readonly isDisabled?: boolean;
    readonly type?: ButtonAllowedTypeValues;
    readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
    readonly css?: string;
}

export type StyledButtonProps = ButtonProps;
