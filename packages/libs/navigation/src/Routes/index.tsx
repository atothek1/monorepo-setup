import React from "react";
import { Route as ReactRoute, Switch } from "react-router";
import { Route } from "../types";

interface RoutesProps<TIds extends string> {
  readonly routes: ReadonlyArray<Route<TIds>>;
}

export function Routes<TIds extends string>( props: RoutesProps<TIds> ): JSX.Element {
  const { routes } = props;
  const routeElements = routes.map( ( route ) => {
    // extract non react-router props, will be used later
    const {
      id, roles, routes: subRoutes, ...rest
    } = route;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return ( <ReactRoute key={ id } { ...rest } /> );
  } );
  return (
    <Switch>
      {routeElements}
    </Switch>
  );
}
