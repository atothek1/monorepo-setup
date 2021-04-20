import { RedirectProps, RouteProps } from "react-router";

export interface Route<TId extends string>
    extends Omit<RouteProps, "render" | "location">,
    Partial<Pick<RedirectProps, "to" | "from" | "push">> {
    readonly id: TId;
    readonly roles?: string[];
    readonly routes?: ReadonlyArray<Route<TId>>;
}
