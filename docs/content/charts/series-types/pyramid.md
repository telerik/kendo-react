---
title: Pyramid
description: 'Use the KendoReact Pyramid charts in React projects.'
components: ["chart"]
subject: Pyramid Chart
slug: pyramid_seriestypes_charts
---

# Pyramid

Pyramid charts are freeform charts, which display a single series of data as pyramid segments, where each segment represents the value for the particular item from the series. The values of the items can also influence the height of the corresponding segments.

<CtaPanelOverview></CtaPanelOverview>

## Basics

Pyramid charts are useful for representing stages in a sales process or displaying revenue for different stages. They are also suitable for identifying potential problem areas in the sales processes of an organization and for displaying several values.

The following example demonstrates the Pyramid chart in action.

{% meta height:480 %}
{% embed_file chart/pyramid/func/app.tsx preview %}
{% embed_file chart/pyramid/func/main.tsx %}
{% embed_file chart/pyramid/func/data.ts %}
{% endmeta %}

## Fixed Height

By default, the height of the pyramid segments is proportional to the value. You can use a fixed height for all segments by setting [`dynamicHeight`]({% slug api_charts_chartseriesitemprops %}#toc-dynamicheight) property to `false`.

The following example demonstrates the `dynamicHeight` property in action.

{% meta height:550 %}
{% embed_file chart/pyramid-dynamic/func/app.tsx preview %}
{% embed_file chart/pyramid-dynamic/func/main.tsx %}
{% embed_file chart/pyramid-dynamic/func/data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
