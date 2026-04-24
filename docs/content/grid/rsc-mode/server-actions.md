---
title: Server Actions
page_title: 'React Data Grid Overview - KendoReact Docs & Demos'
description: 'The React Data Grid provides everything from paging, sorting and filtering to editing, grouping and more.'
components: ["datagrid"]
slug: server_actions_rsc_grid
position: 15
---

# RSC Mode Server Actions

The [RSC](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components) architecture introduces [`server actions`](https://react.dev/reference/react/use-server), which are seamlessly integrated in the server mode of the KendoKendoReact Data Grid.

Server-actions compatibility allows passing functions to the component's callbacks, such as `onDataStateChange` or `onItemChange`, enabling the execution of custom server-side logic.

## Available Server Actions

In the server mode of the Grid, the events fall into two categories:

1. Data state change related events:
    - [`onFilterChange`](slug:api_grid_gridprops#onfilterchange)
    - [`onSortChange`](slug:api_grid_gridprops#onsortchange)
    - [`onPageChange`](slug:api_grid_gridprops#onpagechange)
    - [`onGroupChange`](slug:api_grid_gridprops#ongroupchange)
    - [`onDataStateChange`](slug:api_grid_gridprops#ondatastatechange)&mdash;triggered when either one of the `onFilterChange`, `onSortChange`, `onPageChange` or `onGroupChange` events occurs.
2. Grid state operation related events:
    - [`onSelectionChange`](slug:api_grid_gridprops#onselectionchange)
    - [`OnGroupExpandChange`](slug:api_grid_gridprops)
    - [`OnDetailExpandChange`](slug:api_grid_gridprops)
    - [`OnEditChange`](slug:api_grid_gridprops)

## Server Actions Configuration

To use event handlers on a server page, you can use the same setup as you would for a Grid on a client page. The key differences are:

-   Event handlers must be marked as `async` and include `'use server'` at the top.
-   Non-serializable event arguments should be wrapped inside a `ServerEvent<T>` type to ensure compatibility.

> Client event arguments such as `nativeEvent`, `syntheticEvent`, `target`, `targetEvent`, and `focusElement` cannot be serialized to the server and will always be `undefined`.

Here is an example of a server action managing the Grid’s data state:

```tsx
const onDataStateChange = async (event: ServerEvent<GridDataStateChangeEvent>) => {
    'use server';

    cookies().set(TAG, JSON.stringify(event.dataState)); //save state
};

return <Grid onDataStateChange={onDataStateChange} dataItemKey={dataItemKey}></Grid>;
```

{% meta height:400 %}
{% embed_file server-components/server-actions/app.tsx preview %}
{% endmeta %}

## Limitations

### Client-only Events

There are some current events of the Grid that only make sense in a client scenario. As a result, the following events will not be triggered when the Grid is used as a server component:

-   [`onScroll`](slug:api_grid_gridprops),
-   [`onKeyDown`](slug:api_grid_gridprops),
-   [`onContextmenu`](slug:api_grid_gridprops),
-   [`onNavigationAction`](slug:api_grid_gridprops),
-   [`onClipboard`](slug:api_grid_gridprops)
-   [`OnColumnResize`](slug:api_grid_gridprops)

## Suggested Links

-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
