import React, { Suspense } from "react";
import { Route, Routes as NavigationRoutes } from "@mono/navigation";

interface RoutesProps<TIds extends string> {
  readonly routes: ReadonlyArray<Route<TIds>>;
}

export function Routes<TIds extends string>( props: RoutesProps<TIds> ): JSX.Element {
  const { routes } = props;
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <NavigationRoutes routes={ routes } />
    </Suspense>
  );
}
