# `@mono/service-context`

## desired usage/interface

### Hook usage
```tsx
const params = {
    orderBy: [ "firstName", "created" ], // valid field/property names
    order: ASC,
    fields: [ "images", [ "posts", [""]] ], // custom logic which fields to include
    where: { "fieldName": string | boolean | number | string[] } // field based filter, only entries where fielName with value
};
const options = {
    baseUrl: string | Url,
    networkPolicy: "cache-first" | "cache-only" | "no-cache" | "cache-and-network" | "network-only",
    pagination: {
        limit: 20,
        page: 1,
        offset: 0
    }
};

// the hook itself will contain the path, also the logic
// which params belongs where, like path params query params, body etc
const { isPending, data, isError, error, execute, pagination } = useGetProducts( params, options );

const { nextPage, prevPage, gotoPage, firstPage, lastPage, total, limit, page, offset } = pagination;

<ServiceStatus isPending={isPending} hasData={!isEmpty(data)} isError={isError} error={error}>
    <ProductList data={data} />
</ServiceStatus>
```

### Component usage
```tsx
// use getProductsService service factory and render ProductList component
<Service component={ProductsList} service={getProductsService} parameters={params} options={options} />

// with children render prop
<Service component={ProductsList} service={getProductsService} parameters={params} options={options}>
    {(data: Product[]) => {
        <ProductList data={data} />
    }}
</Service>

```
