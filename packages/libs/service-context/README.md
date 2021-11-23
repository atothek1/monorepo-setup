# `@mono/service-context`

## Direct usage
```ts
const request = {
    url: "https://api.example.com/v1/user-management/users/{id}",
    method: "GET",
    parameters: {
        query: {
            page: 1,
            limit: 100,
            orderBy: "created"
        },
        path: {
            id: "123"
        }
    }
}
const { name, execute, abort } = createService( "fetchTicketsByUserId", request );
const response = await execute();
```

## Capsulated usage
```ts
interface FetchTicketsByUserIdParameters {
    readonly id: string;
    readonly page: number,
    readonly limit: number;
    readonly orderBy: string;
}
export function fetchTicketsByUserId( parameters: FetchTicketsByUserIdParameters ) {
    const { id, page, limit, orderBy } = parameters;
    const request = {
        url: "https://api.example.com/v1/user-management/users/{id}",
        method: "GET",
        parameters: {
            query: { page, limit, orderBy },
            path: { id }
        },
    }
    return createService( "fetchTicketsByUserId", request);
}
//
const response = await fetchTicketsByUserId( { id: "123", page: 1, limit: 100, orderBy: "created" } );
```

## generated usage
```ts
// generated code
interface FetchTicketsByUserIdParameters {
    readonly id: string;
    readonly page: number,
    readonly limit: number;
    readonly orderBy: string;
}
export function fetchTicketsByUserId( parameters: FetchTicketsByUserIdParameters ) {
    const request = {
        url: "https://api.example.com/v1/user-management/users/{id}",
        method: "GET",
        parameters: {
            path: {
                id: paramters.id
            },
            query: {
                page: parameters.page,
                limit: parameters.limit,
                oderby: parameters.orderBy
            }
        },
    }
    return createService("fetchTicketsByUserId", request);
}
// usage of generated code
const response = await fetchTicketsByUserId( { id: "123", page: 1, limit: 100, orderBy: "created" } );
```
