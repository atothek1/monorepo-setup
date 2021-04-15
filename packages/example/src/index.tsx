import React from "react";
import {render} from "react-dom";
import {App} from "./app";
import {getRootElement} from "@utils/dom";

render(
    <App
        name={__APP_NAME__}
        version={__VERSION__}
        environment={__ENVIRONMENT__}
    />,
    getRootElement()
);
