import React from "react";
import { Box } from "@mono/components";
import { RouteChildrenProps } from "react-router";

type LoginProps = RouteChildrenProps;

export function Login( props: LoginProps ): JSX.Element {
    const { location } = props;
    return (
        <Box>
            Login Page: {location.pathname}
        </Box>
    );
}
