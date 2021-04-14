import React from "react";
import {Module as AuthModule} from "@mono/example-mod";

// exception from named exports
// as this is a lazy loaded/imported component
// it must be an default export to work properly
// with React.lazy(...)
export default function Auth() {
    const api = {
        basePath: "/auth"
    };
    return (<AuthModule api={api}/>);
}