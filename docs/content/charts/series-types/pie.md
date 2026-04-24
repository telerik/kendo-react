---
title: Pie
page_title: 'React Pie Chart - KendoReact Docs & Demos'
description: 'React Pie charts are circular charts that display data in the form of single-series sectors of a two-dimensional circle.'
components: ["chart"]
subject: Pie Chart
slug: pie_seriestypes_charts
---

# Pie

The pie charts are circular charts which display data in the form of single-series sectors from a two-dimensional circle and are useful for rendering data as part of a whole.

<CtaPanelOverview></CtaPanelOverview>

## Basic Usage

The following example demonstrates how to create a Pie chart in React and see it in action.

{% meta height:465 %}
{% embed_file series-types/pie/basic/func/app.tsx preview %}
{% embed_file series-types/pie/basic/func/main.tsx %}
{% endmeta %}

## Data Binding

You can bind the series of the pie chart to an array that contains:

-   Numbers.
-   Arrays which represent `[value, category]` tuples.
-   Objects which are also referred to as models.

When the series of the pie chart is bound to objects (models), the user selects the relevant fields through the available bindings:

| Model binding   | Data type                       | Required | Description                                 |
| --------------- | ------------------------------- | -------- | ------------------------------------------- |
| `field`         | `number`/`null`                 | Yes      | The value of the data point, if any.        |
| `categoryField` | `string`/`date`/`number`/`null` | No       | The category of the data point, if any.     |
| `colorField`    | `string`                        | No       | The color of the data point, if overridden. |

For more information on how to configure each data-binding mode, refer to the article on [binding the KendoReact Chart to data]({% slug databinding_chart_charts %}).

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [Donut Charts]({% slug donut_seriestypes_charts %})
