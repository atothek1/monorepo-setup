import React from "react";
import {ModuleApi} from "./types";
import {Routes} from "@mono/navigation";
import {getRoutes} from "../res/routes";

const name = "example-mod";
const version = "1.0.0";

interface ModuleProps {
    readonly api: ModuleApi;
}

export function Module(props: ModuleProps) {
    console.log(`Initialize Module: "${name}" v.${version}`);
    return (<Routes routes={getRoutes(props.api.basePath)}/>);
}