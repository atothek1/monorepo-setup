import React from "react";
import { Box } from "@mono/components";
import { Link } from "react-router-dom";

interface FullscreenProps {
  readonly children: React.ReactNode;
}

export function Fullscreen( props:FullscreenProps ): JSX.Element {
  const { children } = props;
  return (
    <Box column>
      <Box as="header">Header</Box>
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
