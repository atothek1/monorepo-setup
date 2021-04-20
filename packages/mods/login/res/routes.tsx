import { Route } from "@mono/navigation";
import { RouteIds } from "./ids";
import { Login } from "../src/pages/Login";

export function getRoutes( basePath: string ): ReadonlyArray<Route<RouteIds>> {
    return [
        {
            id: RouteIds.LOGIN, path: `${ basePath }`, exact: true, component: Login,
        },
    ];
}
