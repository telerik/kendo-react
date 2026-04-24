---
title: Third-Party Library Integration
description: 'Learn how to integrate the KendoReact DataSource hooks with popular third-party data fetching libraries.'
components: ["filter", "pager"]
slug: third_party_datasource
position: 70
---

# Third-Party Library Integration

The KendoReact DataSource hooks can be seamlessly integrated with popular data fetching libraries. This guide demonstrates integration patterns with TanStack Query (formerly React Query) and SWR:

-   [Integration with TanStack Query](#integration-with-tanstack-query)
-   [Integration with SWR](#integration-with-swr)

## Key Integration Points

When integrating with third-party data fetching libraries, consider these key points:

1. **Initialize Reads Collection**: Set the `reads` property of useRemoteDataSource with the data from your third-party library to ensure the DataSource starts with the correct initial state.

2. **Cache Management**: Use the `onSuccess` callbacks in the transport configuration to update the third-party library's cache.

3. **Loading States**: Leverage the third-party library's loading states (`isFetching`, `isLoading`) for better UX.

4. **Cache Invalidation**: Consider when to invalidate or revalidate the cache:
    - TanStack Query: Use `queryClient.invalidateQueries()`
    - SWR: Use `mutate()` with the revalidate flag

Here's how these points work together:

-   The third-party library fetches the initial data
-   The reads collection is initialized with this data
-   Transport operations update both the DataSource and the third-party cache
-   Loading states are synchronized between both libraries

## Integration with TanStack Query

[TanStack Query](https://tanstack.com/query) provides powerful tools for managing, caching, and synchronizing server state. Here's how to integrate it with useRemoteDataSource:

```tsx
const queryClient = new QueryClient();

const { data, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => dataSource.read()
});

const dataSource = useRemoteDataSource<Post>({
    // Initialize reads collection from TanStack Query data
    reads: data?.reduce((acc, item) => {
        acc.set(item.id!, item);
        return acc;
    }, new Map<number, Post>()),
    transport: {
        read: {
            url: 'https://api.example.com/posts',
            onSuccess: (data) => {
                queryClient.setQueryData(['posts'], data);
                return data;
            }
        },
        update: {
            onSuccess: (dataItem) => {
                queryClient.setQueryData(['posts'], dataSource.data);
                return dataItem;
            }
        }
    }
});
```

Here's a complete example showing all CRUD operations with TanStack Query integration:

{% meta height:470 %}
{% embed_file datasource/remote/query/app.tsx preview %}
{% endmeta %}

## Integration with SWR

[SWR](https://swr.vercel.app/) is a React Hooks library for data fetching that provides features like caching, revalidation, and real-time updates. Here's how to integrate it with useRemoteDataSource:

```tsx
const { data, isLoading } = useSWR('posts', fetcher);

const dataSource = useRemoteDataSource<Post>({
    // Initialize reads collection from SWR data
    reads: data?.reduce((acc, item) => {
        acc.set(item.id!, item);
        return acc;
    }, new Map<number, Post>()),
    transport: {
        read: {
            url: 'https://api.example.com/posts',
            onSuccess: (data) => {
                mutate('posts', data, false);
                return data;
            }
        },
        update: {
            onSuccess: (dataItem) => {
                mutate('posts', dataSource.data, false);
                return dataItem;
            }
        }
    }
});
```

Here's a complete example showing all CRUD operations with SWR integration:

{% meta height:470 %}
{% embed_file datasource/remote/swr/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [TanStack Query Documentation](https://tanstack.com/query)
-   [SWR Documentation](https://swr.vercel.app/)
