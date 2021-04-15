import React from "react";
import {Route as ReactRoute, Switch} from "react-router";
import {Route} from "../types";

interface RoutesProps<TId extends string> {
    readonly routes: ReadonlyArray<Route<TId>>;
}

export function Routes<TId extends string>(props: RoutesProps<TId>) {
    const routeElements = props.routes.map(route => {
        // extract non react-router props, will be used later
        const {id, roles, routes, ...rest} = route;
        return (<ReactRoute key={id} {...rest} />);
    });
    return (
        <Switch>
            {routeElements}
        </Switch>
    );
}