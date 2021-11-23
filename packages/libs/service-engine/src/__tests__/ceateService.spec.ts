import { createMockServer, rest, sleep } from "@mono/testing";
import { GET_WITH_BODY_ERROR_MESSAGE } from "../constants";
import { createService } from "../createService";
import { ServiceRequest, ServiceResponse } from "../types";

// Setup of mocked api backend endpoints
const mockServer = createMockServer(
    rest.get( "/test/simple/:id", async ( req, res, ctx ) => {
        await sleep( 1000 );
        const { id } = req.params as { id: string };
        // const query = req.url.searchParams;
        // const id = query.get( "id" );
        return res( ctx.json( {
            id,
            status: "success" } ) );
    } ),
);

// Enable API mocking before tests.
beforeAll( () => mockServer.listen() );

// Disable API mocking after the tests are done.
afterAll( () => mockServer.close() );

interface TestResponse {
    readonly id: string;
    readonly status: string;
}

describe( "service-engine/createService()", () => {
    const mockedRequest: ServiceRequest<TestResponse> = {
        url: "/test/simple/{id}",
        method: "GET"
    };
    const mockedServiceName = "testService";

    it( "should create prepared and simple service factory", () => {
        const testService = createService( mockedRequest, { name: mockedServiceName } );
        expect( testService ).toBeDefined();
        expect( testService.name ).toBe( mockedServiceName );
    } );

    it( "should execute request and return success response", async () => {
        const testService = createService( mockedRequest, { name: mockedServiceName } );
        expect( testService ).toBeDefined();

        const result = await testService.execute();
        expect( result ).toBeDefined();
    } );

    it( "should execute request and throw error", () => {
        expect.assertions( 2 );

        const request = {
            ...mockedRequest,
            parameters: { body: { message: "shall log an error" } } };
        const testService = createService( request, { name: mockedServiceName } );
        expect( testService ).toBeDefined();

        expect( () => {
            void testService.execute();
        } ).toThrowError( GET_WITH_BODY_ERROR_MESSAGE );
    } );

    it( "should execute request, abort and return error response", async () => {
        const testService = createService( mockedRequest, { name: mockedServiceName } );
        expect( testService ).toBeDefined();

        const result = testService.execute();
        testService.abort();
        const final = await result.then( ( response ) => {
            expect( response ).toBeDefined();
            return response;
        } );
        expect( final ).toBeDefined();
    } );

    it( "should execute multiple times same request, abort and return error response", async () => {
        const testService = createService( mockedRequest, { name: mockedServiceName } );
        expect( testService ).toBeDefined();

        const res1 = testService.execute().then( response => Promise.resolve( response ) );
        const res2 = testService.execute().then( response => Promise.resolve( response ) );
        const res3 = testService.execute().then( response => Promise.resolve( response ) );

        const results: ServiceResponse<TestResponse>[] = await Promise.all( [ res1, res2, res3 ] ) as ServiceResponse<TestResponse>[];

        expect( results ).toBeInstanceOf( Array );
        expect( results ).toHaveLength( 3 );
    } );

    it( "should execute multiple request, and return success responses", async () => {
        const testService = createService( mockedRequest, { name: mockedServiceName } );
        expect( testService ).toBeDefined();

        const res1 = testService.execute( {
            ...mockedRequest,
            parameters: { path: { id: "1" } } }
        );
        const res2 = testService.execute( {
            ...mockedRequest,
            parameters: { path: { id: "2" } } }
        );
        const res3 = testService.execute( {
            ...mockedRequest,
            parameters: { path: { id: "3" } } }
        );

        const results: ServiceResponse<TestResponse>[] = await Promise.all( [ res1, res2, res3 ] ) as ServiceResponse<TestResponse>[];

        expect( results ).toBeInstanceOf( Array );
        expect( results ).toHaveLength( 3 );

        for( let i = 0; i < results.length; i++ ) {
            const res = results[ i ]!;
            const id = ( i + 1 ).toString();
            const expectedUrl = "/test/simple/" + id;
            expect( res.isError ).toBeFalsy();
            expect( res.error ).toBeNull();
            expect( res.url ).toBe( expectedUrl );
            expect( res.data ).toEqual(
                {
                    status: "success",
                    id
                } );
        }
    } );
} );
