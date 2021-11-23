import { ABORT_ERROR_MESSAGE } from "./constants";
import { PipeResolverFunction, ResolverFunction, ServiceParameters, ValidParameterValue } from "./types";

export function getDefaultResolver<TResponse>(): ResolverFunction<TResponse> {
    return ( response: Response ): Promise<TResponse> => response.json() as Promise<TResponse>;
}

export function getAbortError(): Error {
    return {
        name: "AbortError",
        message: ABORT_ERROR_MESSAGE
    };
}

function isValidParameterValue( value: ValidParameterValue ): value is string | number | boolean {
    return value !== "" && value !== undefined && value !== null;
}

function sanitizeQueryParameters( queryParams: Record<string, ValidParameterValue> ): Record<string, string> {
    return  Object.entries( queryParams ).reduce( ( result, [ key, value ] ) => {
        if( !isValidParameterValue( value ) ) {
            return result;
        }
        result[ key ] = value.toString();
        return result;
    }, {} as Record<string, string> ) ;
}

export function getUrl( baseUrl: string, parameters: ServiceParameters<any> = {} ): string {
    const { path: pathParams = {}, query: queryParams = {} } = parameters;
    const sanitizedQueryParams = sanitizeQueryParameters( queryParams );
    const query = new URLSearchParams( sanitizedQueryParams ).toString();
    const url = Object.entries( pathParams ).reduce( ( result, [ key, value ] ) => {
        if( !isValidParameterValue( value ) ) {
            return result;
        }
        return result.split( `{${ key }}` ).join( value.toString() );
    }, baseUrl );

    return url + ( query.length > 0 ? "?" + query : "" );
}

/**
 * Creates a resolver pipeline from left to right, feeding the return of the preceding function as input to the next.
 * The first resolver is called with the Response of a request and expecting the last resolver in the list to return TResponse.
 *
 * This method can be helpful to transform the raw response body with different operations.
 * for example converting property keys from snake_case to camelCase. camelize lib
 * @param resolvers
 */
export function createResolverPipe<TResponse>( resolver: ResolverFunction<TResponse>, ...resolvers: PipeResolverFunction<TResponse>[] ): ResolverFunction<TResponse> {
    const mergedResolvers = [ resolver, ...resolvers ];

    return mergedResolvers.reduceRight(
        ( a, b ) => ( ...args: any[] ) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return a( b( ...args ) );
        } );
}
