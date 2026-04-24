---
title: Data Binding
description: 'Learn how to bind your data to the KendoReact Sankey Chart by using the provided data property.'
components: ["sankey"]
slug: data_binding_sankey
position: 20
---

# Data Binding

You can bind the Sankey Chart to data by using the component's [`data`]({% slug api_charts_sankeyprops %}#toc-data) property. This property requires your data to match the [`SankeyData`]({% slug api_charts_sankeydata %}) format. However, if your data has a different format, you must process and structure it before feeding it to the component.

## Binding to SankeyData

The following example demonstrates how to set the [`data`]({% slug api_charts_sankeyprops %}#toc-data) property to data with the [`SankeyData`]({% slug api_charts_sankeydata %}) format. The data is located in the `data.ts` file.

{% meta height:310 %}
{% embed_file sankey/overview/app.tsx preview %}
{% embed_file sankey/overview/main.tsx %}
{% embed_file sankey/overview/data.ts %}
{% endmeta %}

## Binding to Flat Data

When the data is present as an array of objects, it needs to be transformed to the `SankeyData` format.

This is achieved in the below example using the `createSankeyData` method. It takes an array of data, `dimensions`, and `measure` as input parameters and returns an object that conforms to the `SankeyData` interface. The `dimensions` refer to the Sankey `nodes` while the `measure` refers to the value that will be used to set the value of the `links`.

{% meta height:310 %}
{% embed_file sankey/data-binding/datasets-of-objects/app.tsx preview %}
{% embed_file sankey/data-binding/datasets-of-objects/main.tsx %}
{% embed_file sankey/data-binding/datasets-of-objects/sankey-data.ts %}
{% endmeta %}

## Customize Nodes from Flat Data

To [customize the element instances]({% slug customization_sankey %}#toc-customizing-element-instances) when the data is an array of objects, transform the `data` that stores the returned value of the `createSankeyData` method.

The following example demonstrates this approach by mapping the `data.nodes` to set the color to `lightblue` for the nodes with an even id, and `lightgreen` for the nodes with an odd id.

{% meta height:310 %}
{% embed_file sankey/data-binding/customize-elements/app.tsx preview %}
{% embed_file sankey/data-binding/customize-elements/main.tsx %}
{% embed_file sankey/data-binding/customize-elements/sankey-data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
