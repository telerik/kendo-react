---
title: Local Data Binding
page_title: 'React PivotData Grid Component & Local Data Binding | KendoReact UI'
description: 'Get a free trial of the React PivotGrid UI Component by KendoReact and learn how to bind the widget with local data.'
components: ["pivotgrid"]
slug: localbinding_pivotgrid
position: 3
---

# PivotGrid Local Data Binding

The PivotGrid component allows you to use local data.

## Basic Usage

To get the PivotGrid running using local data, define the following configuration settings:

-   `dimensions`
-   `measures`
-   `defaultRowAxes`
-   `defaultColumnAxes`
-   `defaultMeasureAxes`

The following demo shows how to configure the PivotGrid component. Each field in the `dimensions` object points to a field in the local data.

{% meta height:450 %}
{% embed_file localdata/basic/func/app.tsx preview %}
{% embed_file localdata/basic/func/main.tsx %}
{% embed_file localdata/basic/func/data.ts %}
{% embed_file localdata/basic/func/styles.css %}
{% endmeta %}

## Custom Dimensions

In the following example, the dimensions do not follow the local data strictly. From the `Date` field in the local data are created `Years`, `Quarters`, `Months`, and `Days` dimensions. Rendering and sorting by these fields is adjusted using `displayValue` and `sortValue` dimension configuration callbacks.

{% meta height:570 %}
{% embed_file localdata/custom-dimensions/func/app.tsx preview %}
{% embed_file localdata/custom-dimensions/func/main.tsx %}
{% embed_file localdata/custom-dimensions/func/data.ts %}
{% embed_file localdata/custom-dimensions/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [PivotGrid Sorting]({% slug sorting_pivotgrid %})
-   [API Reference of the KendoReact usePivotOLAPService hook]({% slug api_pivotgrid_usepivotolapservice %})
-   [API Reference of the KendoReact PivotOLAPService HOC]({% slug api_pivotgrid_pivotolapservice %})
