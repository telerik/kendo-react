---
title: Data Binding
description: 'Get started with the KendoReact OrgChart and learn how to bind its data to an array of objects'
components: ["orgchart"]
slug: data_binding_orgchart
position: 2
---

# Data Binding

The KendoReact OrgChart allows you to bind its data to either flat data or tree data. In both cases, it is required to set the [`titleField`]({% slug api_orgchart_orgchartprops %}#toc-titleField) property.

## Tree Data

The following approach demonstrates how to bind the OrgChart data to tree data.

{% meta height:680 %}
{% embed_file data-binding/tree-data/app.tsx preview %}
{% embed_file data-binding/tree-data/main.tsx %}
{% endmeta %}

## Flat Data

This is demonstrated in the below example that uses the [`createDataTree`]({% slug api_treelist_createdatatree %}) method in order transform the flat data to tree data.

{% meta height:680 %}
{% embed_file data-binding/flat-data/app.tsx preview %}
{% embed_file data-binding/flat-data/main.tsx %}
{% embed_file data-binding/flat-data/flat-data.js %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/try/kendo-react-ui)
-   [API Reference of the KendoReact OrgChart]({% slug api_orgchart %})
-   [KendoReact End User License Agreement](https://www.telerik.com/purchase/license-agreement/progress-kendoreact)
