export type ResolverFunction<TResponse> = ( response: Response ) => Promise<TResponse>;
export type PipeResolverFunction<TResponse> = ( data: unknown ) => Promise<TResponse>;

export type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ValidParameterValue = string | undefined | null | boolean | number;
export interface ServiceParameters<TRequestBody> {
    readonly path?: Record<string, ValidParameterValue>;
    readonly query?: Record<string, ValidParameterValue>;
    readonly headers?: Record<string, string>;
    readonly body?: TRequestBody;
}

export interface ServiceRequest<TRequestBody> {
    readonly url: string;
    readonly method: RequestMethod;
    readonly credentials?: RequestCredentials;
    readonly parameters?: ServiceParameters<TRequestBody>;
}

export interface ServiceResponse<TResponse> {
    readonly url: string;
    readonly isError: boolean;
    readonly data: TResponse | null;
    readonly error: Error | null;
    readonly request: RequestInit;
    readonly response: Response | Error;
    readonly serviceName: string;
}

export interface ServiceOptions<TResponse> {
    readonly name: string;
    readonly resolver?: ResolverFunction<TResponse>;
}

export interface ServiceFactory<TResponse, TRequestBody = unknown> {
    readonly name: string;
    readonly controller: AbortController;
    abort(): void;
    execute( request?: Partial<ServiceRequest<TRequestBody>>, resolver?: ResolverFunction<TResponse> ): Promise<ServiceResponse<TResponse>>;
}
