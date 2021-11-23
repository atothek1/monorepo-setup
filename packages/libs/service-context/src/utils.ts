import { UseServiceReturn } from "./types";

const noop = (): void => void 0;
export function getInitialUseServiceState<TResponse>( isLazy = false ): UseServiceReturn<TResponse>{
    return {
        isError: false,
        isPending: !isLazy,
        error: null,
        data: null,
        abort: noop,
        reexecute: noop
    };
}
