---
title: Chart Integration
description: 'Learn how to use the KendoReact Chart Wizard with the KendoReact Data Grid and integrate the two components.'
components: ["datagrid"]
slug: grid_integration_with_chart
position: 240
subject: Data Grid Chart Integration option
tier: premium
---

# KendoReact Data Grid Chart Integration

Integrating charts within the Grid provides a visual representation of the data, making trends, patterns, and outliers more clear compared to raw table data.

<CtaPanelOverview></CtaPanelOverview>

Use the [KendoReact Chart Wizard](slug:overview_chart-wizard) to quickly create charts from the Grid data.

The following example demonstrates how to launch the Chart Wizard from a [Context Menu](slug:overview_contextmenu).

{% meta height:650 %}
{% embed_file chart-integration/context-menu/app.tsx preview %}
{% embed_file chart-integration/context-menu/main.tsx %}
{% endmeta %}

## Generating Chart from Grid Selection

You can create charts from the Grid row and cell selection. Use one of the following methods to set up the [Chart Wizard](slug:overview_chart-wizard) component:

-   [Using Data-Binding](#toc-using-data-binding)&mdash;Reduce the repetitive boilerplate code when creating charts from the Grid data.
-   [Using Grid Selected Keys](#toc-using-grid-selected-keys)&mdash;Create charts from the Grid `selectedKeys` property collection.

### Using Data-Binding

To bind the Chart Wizard component and create charts based on the Grid selection:

1. Set the Chart Wizard's [`data`](slug:api_chart-wizard_chartwizardprops) prop to the `chartWizardData` array:

```jsx
<ChartWizard data={chartWizardData} />
```

The following example demonstrates how to bind the Chart Wizard to the selection of the Grid:

{% meta height:650 %}
{% embed_file chart-integration/data-binding/app.tsx preview %}
{% embed_file chart-integration/data-binding/main.tsx %}
{% endmeta %}

### Using Selected Keys

The Chart Wizard component expects data of type [`ChartWizardDataRow`](slug:api_chart-wizard_chartwizarddatarow). To map the `selectedKeys` array to the supported format, use the built-in [`getWizardDataFromGridSelection`](slug:api_chart-wizard_getwizarddatafromgridselection) method.

```jsx
import {
    ChartWizard,
    ChartWizardDataRow,
    getWizardDataFromGridSelection,
} from '@progress/kendo-react-chart-wizard';
...
const onOpen = React.useCallback(() => {
    setWizardData(
        getWizardDataFromGridSelection({
            grid: gridRef.current,
            data: sampleData,
            selectedState,
            dataItemKey: DATA_ITEM_KEY,
        })
    );

    setVisible(true);
}, [selectedState]);

```

The following example demonstrates the `getWizardDataFromGridSelection` helper method in action.

{% meta height:660 %}
{% embed_file chart-integration/helper-methods/app.tsx preview %}
{% embed_file chart-integration/helper-methods/main.tsx %}
{% endmeta %}

## Plot Any Data

To allow users to create charts without selecting cells, create a `selectedKeys` collection on the fly and use the
[`getWizardDataFromGridSelection`](slug:api_chart-wizard_getwizarddatafromgridselection) helper method as shown above.

You can bind the [Chart Wizard](slug:overview_chart-wizard) component without selecting any Grid rows or cells by providing a custom collection to the `selectedKeys` field of the [`getWizardDataFromGridSelection`](slug:api_chart-wizard_getwizarddatafromgridselection) helper method.

The following example demonstrates how plot all data of the Grid through a floating button:

{% meta height:660 %}
{% embed_file chart-integration/all-data/app.tsx preview %}
{% embed_file chart-integration/all-data/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Chart Wizard Overview](slug:overview_chart-wizard)
-   [API Index of the Grid](slug:api_grid)
-   [API Index of the Chart Wizard](slug:api_chart-wizard)
-   [KendoReact Data Grid Context Menu](slug:context_menu_grid)
