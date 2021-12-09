import { GET_WITH_BODY_ERROR_MESSAGE } from "./constants";
import { ResolverFunction, ServiceFactory, ServiceOptions, ServiceRequest, ServiceResponse } from "./types";
import { getDefaultResolver, getError, getUrl } from "./utils";

export function createService<TResponse, TRequestBody = null>(
    initRequest: ServiceRequest<TRequestBody>,
    options: ServiceOptions<TResponse>
): ServiceFactory<TResponse, TRequestBody> {

    const { name: serviceName, resolver = getDefaultResolver<TResponse>() } = options;
    const controller = new AbortController();

    const serviceFactory =  {
        controller,
        name: serviceName,
        abort(){
            controller.abort();
        },
        execute( req?: ServiceRequest<TRequestBody>, resolverOverride?: ResolverFunction<TResponse> ): Promise<ServiceResponse<TResponse>> {

            const mergedRequest = {
                ...( initRequest ?? {} ),
                ...( req ?? {} ),
            };
            const url = getUrl( mergedRequest.url, mergedRequest.parameters );

            // TODO: FormData support incl File Uploads
            const body = mergedRequest.parameters?.body;

            if( ( mergedRequest.method === "GET" && !!body ) ) {
                throw new Error( GET_WITH_BODY_ERROR_MESSAGE );
            }

            // TODO: normalize all needed data, check body depending on method: POST, PUT, PATCH

            const request = {
                ...mergedRequest,
                url,
                headers: ( mergedRequest.parameters?.headers ?? {} ),
                signal: controller.signal
            };

            const resolve = resolverOverride !== undefined ? resolverOverride : resolver;

            return fetch( request.url, request )
                .then( async ( response ) => {
                    // TODO: check for HttpStatus that we might want to end as an error
                    try{
                        const data = await resolve( response );
                        return {
                            isError: false,
                            data,
                            error: null,
                            url,
                            request,
                            response,
                            serviceName
                        };
                    } catch( error ){
                        return Promise.reject( error );
                    }
                } )
                .catch( ( reason: any ) => {
                    const error = getError( reason );
                    return {
                        isError: true,
                        data: null,
                        error,
                        url,
                        request,
                        response: error,
                        serviceName: serviceName
                    };
                } );
        },
    };
    return serviceFactory;
}
