# `@mono/SERVICE-ENGINE`

> TODO: description

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
};

const { name, execute, abort } = createService( request, { name: "fetchTicketsByUserId" } );
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

export function fetchTicketsByUserId( parameters: FetchTicketsByUserIdParameters, options?: ServiceOptions ) {
    const { id, page, limit, orderBy } = parameters;
    const request = {
        url: "https://api.example.com/v1/user-management/users/{id}",
        method: "GET",
        parameters: {
            query: { page, limit, orderBy },
            path: { id }
        },
    }
    return createService( request, { ...options, name: "fetchTicketsByUserId" } ).execute();
}
//
const response = await fetchTicketsByUserId( { id: "123", page: 1, limit: 100, orderBy: "created" } );
```

## generated usage

```ts
// generated code
import { ServiceOptions } from "@mono/service-engine";

interface FetchTicketsByUserIdParameters {
    readonly id: string;
    readonly page: number,
    readonly limit: number;
    readonly orderBy: string;
}

export function fetchTicketsByUserId( parameters: FetchTicketsByUserIdParameters, options?: ServiceOptions ) {
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
    return createService( request, { ...options, name: "fetchTicketsByUserId" } ).execute();
}

// usage of generated code
const response = await fetchTicketsByUserId( { id: "123", page: 1, limit: 100, orderBy: "created" } );
```
