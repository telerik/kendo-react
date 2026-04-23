---
title: Sorting
page_title: 'Sorting in React Data Grid RSC Mode'
description: 'Implement powerful sorting features in the RSC mode of KendoReact Data Grid to arrange and analyze data efficiently with ease.'
components: ["datagrid"]
subject: RSC Mode of the Grid
slug: sorting_rsc_grid
position: 50
---

# RSC Mode Sorting Overview

When the Grid is used in server mode, sorting is configured and behaves like the [sorting in the client mode of the Grid](slug:sorting_grid), but it relies on [server actions](slug:server_actions_rsc_grid). When a user sorts a column, the server handles storing and processing the sorting rules.

<CtaPanelOverview></CtaPanelOverview>

Each time a sorting action is performed, the [`onSortChange`](slug:api_grid_gridprops#onsortchange) and the [`onDataStateChange`](slug:api_grid_gridprops#ondatastatechange) callbacks are triggered. In the RSC mode of the Grid, this callback must be marked as `async` and include `'use server'` at the top to ensure proper execution on the server.

The sorting state has to be managed on the server (for example, in cookies) therefore you should persist the sorting state correctly to maintain the user’s preferences across page reloads.

```tsx
const onSortChange = async (event: ServerEvent<GridSortChangeEvent>) => {
    'use server';
    const sortState = event.sort;

    cookies().set(TAG, JSON.stringify(sortState)); // Store the current sorting state
};

return <Grid onSortChange={onSortChange} sortable={true} dataItemKey={dataItemKey}></Grid>;
```

Here is an example demonstrating how to manage sorting state on the server for consistent user experience.

{% meta height:630 %}
{% embed_file server-components/sorting/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [KendoKendoReact Data Grid Sorting Documentation](slug:sorting_grid)
-   [KendoKendoReact Data Grid RSC Mode Server Actions](slug:server_actions_rsc_grid)
-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
