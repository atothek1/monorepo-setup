import { ResolverFunction, ServiceFactory, ServiceRequest } from "@mono/service-engine";

export interface ServiceContextValue {
    readonly services: Record<string, ServiceFactory<any>>;
}

export interface UseServiceOptions<TResponse> {
    readonly service: ServiceFactory<TResponse>;
    readonly resolver: ResolverFunction<TResponse>;
    readonly isLazy?: boolean;
}

export type ExecuteFunction = <TRequestBody>( request: ServiceRequest<TRequestBody> ) => void;

export interface MemoizedRequestProxy<TResponse> {
    readonly state: UseServiceReturn<TResponse>;
    readonly execute: ExecuteFunction
    updateState( result: UseServiceReturn<TResponse> ): void;
    dispose(): void;
}

export interface UseServiceReturn<TResponse> {
    readonly data: TResponse | null;
    readonly error: Error | null;
    readonly isError: boolean;
    readonly isPending: boolean;
    readonly request?: Request;
    readonly response?: Response;

    reexecute(): void;
    abort(): void;
}

export type UseLazyServiceReturn<TResponse> = [ UseServiceReturn<TResponse>, ExecuteFunction ];
