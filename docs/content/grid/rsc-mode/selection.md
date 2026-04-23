---
title: Selection
page_title: 'Selection in React Data Grid RSC Mode'
description: 'Enable intuitive selection features in the RSC mode of KendoReact Data Grid to facilitate user interactions and streamline workflows.'
components: ["datagrid"]
subject: RSC Mode of the Grid
slug: selection_rsc_grid
position: 30
---

# RSC Mode Selection Overview

In server-side scenarios, the selection logic works similarly to the selection in [the client mode of the Grid](slug:selection_grid), but with [server actions](slug:server_actions_rsc_grid). After the selection changes, the server is responsible for saving the state and managing the logic for the selected rows.

<CtaPanelOverview></CtaPanelOverview>

When the user selects rows, the [`onSelectionChange`](slug:api_grid_gridprops#onselectionchange) callback is triggered. In RSC mode of the Grid, it is important that this callback is marked as `async` and includes `'use server'` on top. This ensures that the selection state is handled on the server side.

Since the selection state is stored on the server (such as in cookies), you must ensure that the server's state management is handled correctly to maintain the user’s selection across page reloads.

```tsx
const onSelectionChange = async (event: ServerEvent<GridSelectionChangeEvent>) => {
    'use server';
    const selectedRows = event.select;

    cookies().set(TAG, JSON.stringify(event.select)); //save current selection state
};

return <Grid onSelectionChange={onSelectionChange} selectable={true} dataItemKey={dataItemKey}></Grid>;
```

Here is an example of handling the selection change on the server, ensuring that the selection is consistent across page reloads.

{% meta height:630 %}
{% embed_file server-components/selection/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [KendoKendoReact Data Grid Selection Documentation](slug:selection_grid)
-   [KendoKendoReact Data Grid RSC Mode Server Actions](slug:server_actions_rsc_grid)
-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
