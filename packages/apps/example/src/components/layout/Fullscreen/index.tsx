import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@mono/components";
import { images } from "@res";

interface FullscreenProps {
    readonly children: React.ReactNode;
}

export function Fullscreen( props:FullscreenProps ): JSX.Element {
    const { children } = props;
    return (
        <Box column>
            <Box as="header">
                <img src={ images.Logo } alt="company logo" />
                <Text>xZited</Text>
            </Box>
            <Box>
                <Box as="aside">
                    <Box as="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </Box>
                </Box>
                <Box as="main">{children}</Box>
            </Box>
        </Box>
    );
}
