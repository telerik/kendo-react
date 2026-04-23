---
title: Grouping
page_title: 'React Data Grid RSC Mode & Grouping'
description: 'Learn how to enable the grouping in the RSC mode of the React Data Grid'
components: ["datagrid"]
slug: grouping_rsc_grid
subject: RSC Mode of the Grid
position: 60
---

# RSC Mode Grouping Overview

In server-side scenarios, the grouping logic works similarly to [grouping in the client mode of the Grid](slug:groupingbasics_grid), but with [server actions](slug:server_actions_rsc_grid). When the user modifies the grouping state or expand a group, the server is responsible for saving and managing the grouped data.

<CtaPanelOverview></CtaPanelOverview>

When grouping changes occur, the [`onGroupChange`](slug:api_grid_gridprops#ongroupchange) and the [`onDataStateChange`](slug:api_grid_gridprops#ondatastatechange) callbacks are triggered.

In the RSC mode of the Grid, this callback must be marked as `async` and include `'use server'` at the top. This ensures that grouping state is handled on the server side.

Since the grouping state is stored on the server (such as in cookies), you must ensure proper state management to maintain consistent grouping across page reloads.

```tsx
const onGroupChange = async (event: ServerEvent<GridGroupChangeEvent>) => {
    'use server';
    const groupedState = event.group;

    cookies().set(TAG, JSON.stringify(groupedState)); // Save current grouping state
};

return <Grid onGroupChange={onGroupChange} groupable={true} dataItemKey={dataItemKey}></Grid>;
```

Below you can see an example of handling grouping changes on the server to maintain consistent state across reloads.

{% meta height:630 %}
{% embed_file server-components/grouping/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [KendoKendoReact Data Grid Grouping Documentation](slug:groupingbasics_grid)
-   [KendoKendoReact Data Grid RSC Mode Server Actions](slug:server_actions_rsc_grid)
-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
