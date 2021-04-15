import cn from "classnames";
import React from "react";
import {Box} from "@mono/components";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

interface FullscreenProps {
    readonly children: React.ReactNode;
}

export function Fullscreen(props:FullscreenProps) {
    const { children } = props;
    return(
        <Box className={cn(styles.root)} column>
            <Box as="header" className={cn(styles.header)}>Header</Box>
            <Box className={styles.content}>
                <Box as="main" className={styles.main}>{children}</Box>
                <Box as="nav" className={styles.nav}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/login"}>Login</Link></li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}