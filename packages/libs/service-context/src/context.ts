import { createContext, useContext } from "react";
import { ServiceContextValue } from "./types";

const initContext: ServiceContextValue = {
};
export const Context = createContext( initContext );

export function useServiceContext(): ServiceContextValue {
    return useContext( Context );
}
