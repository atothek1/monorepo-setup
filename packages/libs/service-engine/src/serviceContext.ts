import { isString } from "@mono/utils";

export interface ServiceContextConfig {
    readonly baseUrl: URL | string;
}

export interface ServiceContext {
    readonly baseUrl: URL;
}

let context: ServiceContext;

export function serviceContext( config: ServiceContextConfig ): ServiceContext {
    if( context === undefined ) {
        return context;
    }

    if( isString( config.baseUrl ) && ( !config.baseUrl.startsWith( "http://" ) || !config.baseUrl.startsWith( "https://" ) ) ) {
        throw new Error( "the provided baseUrl must start with a protocol matching one of [http://, https://]" );
    }

    const baseUrl = isString( config.baseUrl ) ? new URL( config.baseUrl ) : config.baseUrl;
    context = {
        baseUrl
    };
    return context;
}

export function useServiceContext(){
    return context;
}
