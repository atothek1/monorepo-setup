import React from "react";
import { render } from "react-dom";
import { getRootElement } from "@utils/dom";
import { App } from "./app";

render(
    <App
        name={ __APP_NAME__ }
        version={ __VERSION__ }
        environment={ __ENVIRONMENT__ }
    />,
    getRootElement(),
);
