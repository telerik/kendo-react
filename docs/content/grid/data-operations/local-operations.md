---
title: Local Data Operations
description: 'Get started with the KendoKendoReact Data Grid allowing you to sort, filter, or page local data by using the KendoReact Data Query component.'
components: ["datagrid"]
slug: localoperations_grid
position: 10
tier: free
---

# Local Data Operations

The KendoKendoReact Data Grid enables you to page, filter, sort and group the data locally, or utilize its built-in data-processing mechanism:

-   [Manual Data Operations](#manual-data-operations)
-   [Auto-Processing the Data](#auto-processing-the-data)

## Manual Data Operations

To setup local data operations:

1. Set a value inside the state that will hold the current paging, filtering, sorting and grouping parameters. Not all are required, only the ones used in the Grid instance.

    ```jsx-no-run
    const initialDataState: State = {
        sort: [{ field: "code", dir: "asc" }],
        take: 10,
        skip: 0,
        group: [{
            field: "CategoryID"
        }]
    };
    ...
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    ```

1. Pass the current data state to the Grid.

    ```jsx-no-run
    <Grid
        {...dataState}
    ```

1. Use the [`onDataStateChange`](slug:api_grid_gridprops#toc-ondatastatechange) event to handle all data operations from a single place. The event data provides the combined state of the Grid including paging, sorting, filtering and grouping parameters. With server operations, these parameters can be sent to the server to process the data there.

    ```jsx-no-run
    onDataStateChange={(e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
        setDataResult(process(products, e.dataState));
    }}
    ```

1. Use the `process` method of the [`DataQuery`]({% slug overview_dataquery %}) library which will automatically process the data based on the current data state.

    ```jsx-no-run
    const [dataResult, setDataResult] = React.useState<DataResult>(process(products, dataState));
    ...
    <Grid
        data={dataResult}
    ```

The following example shows the Grid with paging, sorting and filtering enabled:

{% meta height:480 %}
{% embed_file data-operations-overview/func/app.tsx preview %}
{% embed_file data-operations-overview/func/main.tsx %}
{% endmeta %}

When the data state from the `onDataStateChange` event or the initial state is set to the Grid, no further values for `skip`, `take`, `filter`, `sort` or `group` should be added, because they will already be included in the State. When the `data` property of the Grid is populated through the `process` helper method, the `total` property should not be set manually, because it will be part of the returned object.

## Auto-Processing the Data

The KendoReact Data Grid provides a mechanism to enable built-in data-processing which takes care of the `filter`, `sort`, `page` and `group` operations internally. To enable this feature, set the [`autoProcessData`](slug:api_grid_gridprops#toc-autoprocessdata) property to `true`.

```jsx
<Grid data={products} autoProcessData={true} />
```

{% meta height:480 %}
{% embed_file data-operations-auto/app.tsx preview %}
{% embed_file data-operations-auto/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
