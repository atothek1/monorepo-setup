import cn from "classnames";
import React from "react";
import { AsProps } from "../../../types";
import {BoxAllowedAsValues} from "./types";
import styles from "./styles.scss";

interface BoxProps extends AsProps<BoxAllowedAsValues> {
    readonly children: React.ReactNode;
    readonly column?: boolean;
    readonly className?: string;
}

export function Box(props: BoxProps) {
    const {
        children,
        as: Comp = "div",
        column = false,
        className = ""
    } = props;

    const classNames = cn(styles.root, column && styles.column, className);
    return <Comp className={classNames}>{children}</Comp>;
}
