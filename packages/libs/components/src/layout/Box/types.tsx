import React, { MouseEventHandler } from "react";
import { AlignItems, JustifyContent } from "@mono/styled";
import { CSSProp } from "styled-components";
import { AsProps } from "../../types";

export type BoxAllowedAsValues =
  | "div"
  | "header"
  | "main"
  | "footer"
  | "aside"
  | "section"
  | "article"
  | "nav"
  | "form";

export interface BoxProps extends TestIdProps, AsProps<BoxAllowedAsValues> {
  readonly children: React.ReactNode;
  readonly onClick?: MouseEventHandler;
  readonly id?: string;
  readonly column?: boolean;
  readonly justifyContent?: JustifyContent;
  readonly alignItems?: AlignItems;
  readonly width?: string;
  readonly height?: string;
  readonly padding?: string;
  readonly css?: CSSProp;
}

// redefine transient props to not be consumed by styled-components
export interface StyledBoxProps extends Omit<BoxProps, "width" | "height"> {
  readonly $width?: string;
  readonly $height?: string;
}
