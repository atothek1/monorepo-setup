import "whatwg-fetch";
import "@testing-library/jest-dom";
import { RequestHandler } from "msw/lib/types/handlers/RequestHandler";
import { setupServer, SetupServerApi } from "msw/node";
import { rest as mswRest } from "msw";
let mockServer: SetupServerApi | null = null;
let orgUse: SetupServerApi["use"] | null = null;

export function createMockServer( ...handlers: RequestHandler[]  ): SetupServerApi {
    if( mockServer === null ) {
        mockServer = setupServer();
        orgUse = mockServer.use.bind( mockServer );
        mockServer.use = () => {
            throw new Error( "register mocked request handlers via the the createMockServer. Adding mocked request handler in test is not possible." );
        };
    }
    if( Array.isArray( handlers ) && handlers.length > 0 ) {
        orgUse!( ...handlers );
    }
    return mockServer;
}

type RestFactoryProxy = typeof mswRest;
export const rest: RestFactoryProxy = mswRest;
