---
title: Funnel
description: 'Basic usage of the KendoReact Funnel charts in React projects.'
components: ["chart"]
subject: Funnel Chart
slug: funnel_seriestypes_charts
---

# Funnel

Funnel charts are freeform charts which display a single series of data in progressively decreasing or increasing proportions that are organized in segments, where each segment represents the value for the particular item from the series.

<CtaPanelOverview></CtaPanelOverview>

Funnel charts are useful for representing stages in a sales process or displaying revenue for different stages. They are also suitable for identifying potential problem areas in the sales processes of an organization and for displaying several values.

## Basic Usage

The following example demonstrates the Funnel chart in action.

{% meta height:500 %}
{% embed_file chart/funnel/func/app.tsx preview %}
{% embed_file chart/funnel/func/main.tsx %}
{% endmeta %}

## Controlling the Funnel Shape

You can influence the form of the funnel by setting the "neck ratio". The neck ratio is the ratio between the width of the base and the width of the funnel top. The default value of the neck ratio is `0.3`. This means that the width of the base is 30% of the width of the top. If you set the neck ratio to values that are larger than `1`, then the funnel will reverse and turn into a pyramid.

{% meta height:600 %}
{% embed_file chart/funnel-ratio/func/app.tsx preview %}
{% embed_file chart/funnel-ratio/func/main.tsx %}
{% endmeta %}

## Dynamic Slope and Height

By default, the slope and height of the funnel segments is linear. You can change the rendering of the slope and height based on the value of the specific segment.

{% meta height:600 %}
{% embed_file chart/funnel-dynamic/func/app.tsx preview %}
{% embed_file chart/funnel-dynamic/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
