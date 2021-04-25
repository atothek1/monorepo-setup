import React from "react";
import { Route as ReactRoute, Switch } from "react-router";
import { Route } from "../types";

interface RoutesProps<TId extends string> {
  readonly routes: ReadonlyArray<Route<TId>>;
}

export function Routes<TId extends string>( props: RoutesProps<TId> ): JSX.Element {
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
