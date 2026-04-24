---
title: Persisting State
description: 'Get started with the KendoKendoReact Data Grid which supports the option to persist the current Grid state'
components: ["datagrid"]
slug: persist-state_grid
position: 20
---

# Persisting State

A common requirement for web apps is to save the user customization and settings when interacting with your app, and then restore them once the user comes back at some point in the future. The KendoKendoReact Data Grid exposes the capability to save and restore settings that were previously applied.

The following example demonstrates how to persist the Grid state.

{% meta height:780 %}
{% embed_file persist-state/func/app.tsx preview %}
{% embed_file persist-state/func/main.tsx %}
{% endmeta %}

## Setup

To persist the state of the Grid:

1. Keep the initial skip, take and sort settings inside the `dataState`:

    ```jsx-no-run
    const [dataState, setDataState] = React.useState<GridState>({
        data: formattedOrders,
        total: formattedOrders.length,
        filter: { logic: 'and', filters: [] },
          skip: 0,
          take: 20,
          sort: [{ field: 'orderDate', dir: 'desc' }]
        });
    ```

1. Define the column configuration and restore the column state from `localStorage`:

    ```jsx-no-run
    const [columns] = React.useState([
        { field: 'customerID', width: 200 },
        { field: 'orderDate', width: 200 },
        { field: 'shipName', width: 200 },
        { field: 'freight', width: 200 },
        { field: 'shippedDate', width: 200 },
        { field: 'employeeID', width: 200 },
        { field: 'orderID', width: 200 }
    ]);

    const [columnsState, setColumnsState] = React.useState(() => {
        const loadedColumns = localStorage.getItem('gridColumns');
        return loadedColumns ? JSON.parse(loadedColumns) : null;
    });
    ```

1. Create a `saveStateToLocalStorage` function that retrieves the current state and sets it in the localStorage:

    ```jsx-no-run
        const saveStateToLocalStorage = () => {
            const state = {
            dataState,
            columns
            };
            localStorage.setItem('gridState', JSON.stringify(state));
         };
    ```

1. Create a `loadStateFromLocalStorage` function that retrieves the saved state from localStorage and sets the new data to the Grid:

    ```jsx-no-run
        const loadStateFromLocalStorage = () => {
            const savedState = localStorage.getItem('gridState');
        if (savedState) {
            const { dataState: savedDataState, columns: savedColumns } =
            JSON.parse(savedState)
            setDataState(savedDataState);
            setColumns(savedColumns);
            }
        };
    ```

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
