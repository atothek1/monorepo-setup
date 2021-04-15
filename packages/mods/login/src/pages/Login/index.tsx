import React from "react";
import {Box} from "@mono/example-lib";
import {RouteChildrenProps} from "react-router";

interface LoginProps extends RouteChildrenProps {

}

export function Login(props: LoginProps) {
    const {location} = props;
    return (
        <Box>
            Login Page: {location.pathname}
        </Box>
    );
}