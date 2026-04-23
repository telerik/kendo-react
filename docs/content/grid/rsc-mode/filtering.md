---
title: Filtering
page_title: 'Filtering in React Data Grid RSC Mode'
description: 'Leverage powerful filtering capabilities in the RSC mode of KendoReact Data Grid to refine datasets dynamically and enhance data exploration.'
components: ["datagrid"]
subject: RSC Mode of the Grid
slug: filtering_rsc_grid
position: 40
---

# RSC Mode Filtering Overview

In server-side scenarios, filtering is enabled the same as in [the client mode of the Grid](slug:filtering_grid), but it relies on [server actions](slug:server_actions_rsc_grid). When users apply filters, the server takes responsibility for maintaining and processing the filter criteria.

<CtaPanelOverview></CtaPanelOverview>

Each time a filter is changed, the [`onFilterChange`](slug:api_grid_gridprops#onfilterchange) callback is fired. In the RSC mode of the Grid, this callback must be declared as `async` and must start with `'use server'`. This ensures the filtering logic executes on the server.

Since filters are managed on the server (for example, using cookies), it is important to persist the filtering state correctly to maintain consistency across page reloads.

```tsx
const onFilterChange = async (event: ServerEvent<GridFilterChangeEvent>) => {
    'use server';
    const filterState = event.filter;

    cookies().set(TAG, JSON.stringify(filterState)); // Store the current filter state
};

return <Grid onFilterChange={onFilterChange} filterable={true}></Grid>;
```

You can see how to handle filtering changes on the server for consistent state persistence in the demo below.

{% meta height:510 %}
{% embed_file server-components/filtering/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [KendoKendoReact Data Grid Filtering Documentation](slug:filtering_grid)
-   [KendoKendoReact Data Grid RSC Mode Server Actions](slug:server_actions_rsc_grid)
-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
