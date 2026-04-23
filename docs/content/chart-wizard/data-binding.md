---
title: Data Binding
description: 'Bind the Kendo UI Chart Wizard to data in React projects'
components: ["chartwizard"]
slug: databinding_chart-wizard
position: 30
---

# Data Binding

The Chart Wizard enables you to bind data of type [`ChartWizardDataRow`]({% slug api_chart-wizard_chartwizarddatarow %}) array.

The following example demonstrates how to bind the Chart Wizard to an array of data.

{% meta height:750 %}
{% embed_file get-started/app.tsx preview %}
{% embed_file get-started/main.tsx %}
{% endmeta %}

## Binding to Grid Selection

The Chart Wizard provides helper directive and methods that can be used to bind the component to the [Grid Selection]({% slug selection_grid %}). For more details, refer to the [Chart Integration](slug:grid_integration_with_chart) article in the Grid documentation.

## Binding to Table-like Data

To bind the Chart Wizard component to table-like data, create a [`DataRow`](slug:api_chart-wizard_datarow) collection and use the [`getWizardDataFromDataRows`]({% slug api_chart-wizard_getwizarddatafromdatarows %}) helper method
to convert it to the format required by the Chart Wizard.

The following example demonstrates how to bind a [`DataRow`](slug:api_chart-wizard_datarow) collection to a Chart Wizard.

{% meta height:750 %}
{% embed_file data-binding/data-row/app.tsx preview %}
{% embed_file data-binding/data-row/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart Wizard](slug:api_chart-wizard)
-   [Grid and Chart Integration](slug:grid_integration_with_chart)
