import { ServiceRequest } from "@mono/service-engine";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MemoizedRequestProxy, UseServiceOptions, UseServiceReturn } from "./types";
import { getInitialUseServiceState } from "./utils";

export function useService<TResponse, TRequestBody>( request: ServiceRequest<TRequestBody>, options: UseServiceOptions<TResponse> ): UseServiceReturn<TResponse> {
    const { service, isLazy = false, resolver } = options;
    const [ state, updateState ] = useState<UseServiceReturn<TResponse>>( getInitialUseServiceState( isLazy ) );
    const memoizedRequestReference = useRef<MemoizedRequestProxy<TResponse> | null>( null );

    const createMemoizedRequestProxy = useCallback( (): MemoizedRequestProxy<TResponse> => {
        if( memoizedRequestReference.current === null ) {
            memoizedRequestReference.current = {
                state,
                updateState,
                async execute<T>( req: ServiceRequest<T> ) {
                    service.abort();
                    const response = await service.execute( req, resolver );
                    if ( response.isError && response.error && response.error.name === "AbortError" ) {
                        // this is triggered by the unmount or refetch, no further setState needed
                        // as this would result in a memory leak
                        return;
                    }
                    memoizedRequestReference.current?.updateState( {
                        isPending: false,
                        isError: response.isError,
                        error: response.error,
                        data: response.data,
                        request: response.request,
                        abort(){ service.abort(); },
                        reexecute: () => memoizedRequestReference.current?.execute( req )
                    } );
                },
                dispose() {
                    service.abort();
                    memoizedRequestReference.current = null;
                }
            };
        }
        return memoizedRequestReference.current;
    }, [ service, resolver ] );

    const proxy = createMemoizedRequestProxy();

    useEffect( () => {
        if( options.isLazy ) {
            proxy.execute( request );
        }
        return proxy.dispose;
    }, [ proxy, request, options.isLazy ] );
    return state;
}

