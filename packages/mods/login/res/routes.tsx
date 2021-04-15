import {RouteIds} from "./ids";
import {Login} from "../src/pages/Login";
import {Route} from "@mono/navigation";

export function getRoutes(basePath: string): ReadonlyArray<Route<RouteIds>> {
    return [
        {id: RouteIds.LOGIN, path: `${basePath}/login`, exact: true, component: Login}
    ];
}