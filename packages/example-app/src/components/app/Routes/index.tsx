import React, {Suspense} from "react";
import {Route, Routes as NavigationRoutes} from "@mono/navigation";
import {Home} from "@pages/Home";
import {RouteIds} from "@res/ids";

const Auth = React.lazy(() => import( /* webpackChunkName: "auth-module" */ "@pages/Auth"));

const routes: ReadonlyArray<Route<RouteIds>> = [
    {id: RouteIds.HOME, component: Home, exact: true, path: ["/", "/home"]},
    {id: RouteIds.AUTH, component: Auth, exact: false, path: "/auth"},
];

export function Routes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavigationRoutes routes={routes}/>
        </Suspense>
    );
}