import React, {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./components";
import {Fullscreen} from "@components/index";
import "@res/styles.scss";

interface AppProps {
    readonly name: string;
    readonly version: string;
    readonly environment: string;
}

export function App(props: AppProps) {
    const {name, version, environment} = props;

    console.log(`Starting app: "${name}" v${version}; env: ${environment}`);

    return (
        <StrictMode>
            <BrowserRouter>
                <Fullscreen>
                    <Routes/>
                </Fullscreen>
            </BrowserRouter>
        </StrictMode>
    );
}
