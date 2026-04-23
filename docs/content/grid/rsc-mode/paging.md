---
title: Paging
page_title: 'Paging in React Data Grid RSC Mode'
description: 'Implement efficient paging in the RSC mode of KendoReact Data Grid to manage large datasets seamlessly and optimize performance.'
components: ["datagrid"]
subject: RSC Mode of the Grid
slug: paging_rsc_grid
position: 70
---

# RSC Mode Paging Overview

In server-side scenarios, paging in the Grid works similarly to [paging in the client mode](slug:paging_grid), but with [server actions](slug:server_actions_rsc_grid). When the user navigates between pages, the server is responsible for storing and managing the current page state.

<CtaPanelOverview></CtaPanelOverview>

When a paging action occurs, the [`onPageChange`](slug:api_grid_gridprops#onpagechange) and the [`onDataStateChange`](slug:api_grid_gridprops#ondatastatechange) callbacks are triggered.. In the RSC mode of the Grid, this callback must be marked as `async` and include `'use server'` at the top. This ensures that the paging state is handled on the server side.

Since the paging state is stored on the server (such as in cookies), you must ensure proper state management to maintain the user's page selection across page reloads.

```tsx
const onPageChange = async (event: ServerEvent<GridPageChangeEvent>) => {
    'use server';
    const pagingState = event.page;

    cookies().set(TAG, JSON.stringify(pagingState)); // Save current page state
};

return <Grid onPageChange={onPageChange} pageable={true} dataItemKey={dataItemKey}></Grid>;
```

Here is an example of handling paging changes on the server to maintain consistent state across reloads.

{% meta height:560 %}
{% embed_file server-components/paging/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [KendoKendoReact Data Grid Paging Documentation](slug:paging_grid)
-   [KendoKendoReact Data Grid RSC Mode Server Actions](slug:server_actions_rsc_grid)
-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
