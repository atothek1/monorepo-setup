import React from "react";
import { Route } from "@mono/navigation";
import { RouteIds } from "@res/ids";
import { Home } from "@pages/Home";

const Login = React.lazy( () => import( /* webpackChunkName: "login-module" */ "@pages/Login" ) );

export const routes: ReadonlyArray<Route<RouteIds>> = [
  {
    id: RouteIds.HOME, component: Home, exact: true, path: [ "/", "/home" ],
  },
  {
    id: RouteIds.LOGIN, component: Login, exact: true, path: "/login",
  },
];
