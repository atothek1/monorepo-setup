import React from "react";
import { Route } from "@mono/navigation";
import { RouteIds } from "@res";
import { Home } from "@pages";

const Login = React.lazy( async () => import( /* webpackChunkName: "js/login-module" */ "@pages/Login" ).then( ( { Login } ) => ( { default: Login } ) ) );

export const routes: ReadonlyArray<Route<RouteIds>> = [
    {
        id: RouteIds.HOME,
        component: Home,
        exact: true,
        path: [ "/", "/home" ],
    },
    {
        id: RouteIds.LOGIN,
        component: Login,
        exact: true,
        path: "/login",
    },
];
