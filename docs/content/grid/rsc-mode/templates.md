---
title: Templates
page_title: 'React Data Grid Overview - KendoReact Docs & Demos'
description: 'The React Data Grid provides everything from paging, sorting and filtering to editing, grouping and more.'
components: ["datagrid"]
subject: RSC Mode Templates feature of the Grid
slug: templates_rsc_grid
position: 20
---

# RSC Mode Templates Overview

The server templates in the RSC mode of the KendoKendoReact Data Grid can be defined similarly to [custom cells in the client mode](slug:cells_grid), but their behavior depends on whether they are defined in a **server-rendered page** or a **client-rendered page**. This hybrid approach allows developers to choose between server-rendered templates for performance optimization or client-side templates for interactive functionality.

<CtaPanelOverview></CtaPanelOverview>

## RSC Mode Server Templates

You can define a **custom server template** in the sample page where the RSC Grid is configured - it must not contain `'use client'` at the top. These templates are rendered and function entirely on the server, making them ideal for scenarios where performance and static content rendering are prioritized.

If the custom cell performs any server actions, the developer is responsible for handling the state updates accordingly.

```tsx
//app.tsx

const CustomCell = (props: GridCustomCellProps) => {
    return (
        <td {...props.tdProps}>
            <div>{props.children} (Processed on Server)</div>
        </td>
    );
};

export default function ServerGrid() {
    return (
        <Grid data={data}>
            <GridColumn field="userName" title="User Name" />
            <GridColumn field="userID" title="Activity" cells={{ data: CustomCell }} />
        </Grid>
    );
}
```

Take a look at the demo below, where we showcase how a custom cell template is rendered and functioning entirely on the server for optimized performance.

{% meta height:510 %}
{% embed_file server-components/customcells-basic/app.tsx preview %}
{% endmeta %}

## RSC Mode Client Templates

In case you have [an already implemented custom cell template](slug:cells_grid) working with Native client events or just want to use React hooks to handle the cell state, you can still use it with the server Grid by defining it on a separate page that includes `'use client'` at the top.

In this way you will utilize the hybrid capabilities of the Grid, having custom cells rendered on the server but functioning on the client-side. To do so you should:

1. Define a custom template on a page running on the client-side:

    ```tsx
    //clientcomponents.tsx
    'use client';

    export const CustomCell = (props: GridCustomCellProps) => {
        return (
            <td
                {...props.tdProps}
                colSpan={1}
                style={{
                    color: props.children == 'true' ? 'green' : 'crimson'
                }}
            >
                {props.children}
            </td>
        );
    };
    ```

2. Import the template on the server-side page where the Grid is defined:

    ```tsx
    //app.tsx

    import { CustomCell } from './clientcomponents';

    export default function ServerGrid() {
        return (
            <Grid data={data}>
                <GridColumn field="userName" title="User Name" />
                <GridColumn field="Discontinued" cells={{ data: CustomCell }} />
            </Grid>
        );
    }
    ```

Below, you will find a demo illustrating how a custom client cell template can be seamlessly integrated with the RSC mode of KendoKendoReact Data Grid.

{% meta height:510 %}
{% embed_file server-components/customcells-basic/client/app.tsx preview %}
{% endmeta %}

## Suggested Links

-   [KendoKendoReact Data Grid Custom Cells Documentation](slug:cells_grid)
-   [KendoKendoReact Data Grid RSC Mode Data Operations](slug:data_operations_rsc_grid)
-   [KendoKendoReact Data Grid RSC Mode Server Actions](slug:server_actions_rsc_grid)
-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
