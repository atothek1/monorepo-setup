import React, { useMemo } from "react";

import { Context } from "./context";

interface ServiceProviderProps {
    readonly children: React.ReactNode;
}

export function ServiceProvider( props: ServiceProviderProps ){
    const { children } = props;
    const contextValue = useMemo( () => {
        return {};
    }, [] );

    return (
        <Context.Provider value={ contextValue }>{ children }</Context.Provider>
    );
}
