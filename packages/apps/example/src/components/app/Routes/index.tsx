import React, { Suspense } from "react";
import { Route, Routes as NavigationRoutes } from "@mono/navigation";
import { Home } from "@pages/Home";
import { RouteIds } from "@res/ids";

const Login = React.lazy( () => import( /* webpackChunkName: "login-module" */ "@pages/Login" ) );

const routes: ReadonlyArray<Route<RouteIds>> = [
    {
        id: RouteIds.HOME, component: Home, exact: true, path: [ "/", "/home" ],
    },
    {
        id: RouteIds.LOGIN, component: Login, exact: true, path: "/login",
    },
];

export function Routes():JSX.Element {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <NavigationRoutes routes={ routes } />
        </Suspense>
    );
}
