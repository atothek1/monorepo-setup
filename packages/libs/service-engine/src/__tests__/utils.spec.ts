import { getUrl } from "../utils";

describe( "service-engine/utils/getUrl()", () => {

    const mockedUrl = "/test/{namespace}/{id}";

    it( "should substitute path params", () => {
        const parameters = {
            path: {
                namespace: "test-ns",
                id: "test-id"
            }
        };
        const expected = "/test/test-ns/test-id";
        const actual = getUrl( mockedUrl, parameters );
        expect( actual ).toBe( expected );
    } );

    it( "should create url with query param string", () => {
        const parameters = {
            path: {
                namespace: "test-ns",
                id: "test-id"
            },
            query: {
                search: "test-ns",
                fields: "field1,field2,field3",
                isActive: true,
                limit: 1000
            }
        };
        const expected = "/test/test-ns/test-id?search=test-ns&fields=field1%2Cfield2%2Cfield3&isActive=true&limit=1000";
        const actual = getUrl( mockedUrl, parameters );
        expect( actual ).toBe( expected );
    } );

    it( "should not substitute path params that has undefined values", () => {
        const parameters = {
            path: {
                namespace: undefined,
                id: "test-id"
            }
        };
        const expected = "/test/{namespace}/test-id";
        const actual = getUrl( mockedUrl, parameters );
        expect( actual ).toBe( expected );
    } );

    it( "should not substitute path params that has empty string values", () => {
        const parameters = {
            path: {
                namespace: "",
                id: "test-id"
            }
        };
        const expected = "/test/{namespace}/test-id";
        const actual = getUrl( mockedUrl, parameters );
        expect( actual ).toBe( expected );
    } );

    it( "should not substitute path params that has null values", () => {
        const parameters = {
            path: {
                namespace: null,
                id: "test-id"
            }
        };
        const expected = "/test/{namespace}/test-id";
        const actual = getUrl( mockedUrl, parameters );
        expect( actual ).toBe( expected );
    } );
} );
