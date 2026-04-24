---
title: Tooltips
description: 'Configure the tooltips of the KendoReact Chart in React projects.'
components: ["chart"]
slug: tooltips_chart_charts
---

# Tooltips

The Chart supports three types of tooltips.

The Chart tooltip types are:

-   [Series tooltip]({% slug tooltips_chart_charts %}#series-tooltip)&mdash;A tooltip displayed for the hovered chart point.
-   [Shared tooltip]({% slug tooltips_chart_charts %}#tooltip)&mdash;A tooltip displayed for the hovered chart category.
-   [Crosshair tooltip]({% slug tooltips_chart_charts %}#crosshair-tooltip)&mdash;A tooltip displayed for the axes crosshairs.

## Series Tooltip

The series tooltip is displayed when the user hovers over a point and is used to show the point values or any additional information. By default, the color of the tooltip matches the color of the point to help associate the tooltip with that point. It is also possible to set it to a specific color by using the [`background`]({% slug api_charts_charttooltipprops %}#toc-background) and [`border`]({% slug api_charts_charttooltipprops %}#toc-border) options.

### Tooltip configuration

To enable and configure the tooltip for all series, use the [`ChartTooltip`]({% slug api_charts_charttooltip %}) component. To enable and configure the tooltip for a specific series, use the [`ChartSeriesItemTooltip`]({% slug api_charts_chartseriesitemtooltip %}) component.

The following example demonstrates how to configure the tooltip globally and to override an option for a specific series.

{% meta height:465 %}
{% embed_file chart/tooltips/overview/func/app.tsx preview %}
{% embed_file chart/tooltips/overview/func/main.tsx %}
{% endmeta %}

### Customizing Content

By default, the content of the tooltip is determined based on the point type. To customize the tooltip content, either:

-   Use the [`format`]({% slug api_charts_charttooltipprops %}#toc-format) prop, or
-   Specify a template through the [`render`]({% slug api_charts_charttooltipprops %}#toc-render) prop.

#### Using the format Option

The following example demonstrates how to customize the content of the tooltip through the `format` configuration.

{% meta height:465 %}
{% embed_file chart/tooltips/customizing/func/app.tsx preview %}
{% embed_file chart/tooltips/customizing/func/main.tsx %}
{% endmeta %}

#### Specifying a Template

To specify a template, use the `render` prop of the [`ChartTooltip`]({% slug api_charts_charttooltip %}) or [`ChartSeriesItemTooltip`]({% slug api_charts_chartseriesitemtooltip %}) components.

The callback passed to the `render` props receives a single parameter - the context of the tooltip. When the `render` prop is defined on the `ChartTooltip` component, the context could be either of type [`SharedTooltipContext`]({% slug api_charts_sharedtooltipcontext %}) or [`TooltipContext`]({% slug api_charts_tooltipcontext %}) depending on whether the tooltip is [`shared`]({% slug tooltips_chart_charts %}#toc-sharedtooltip) or not. The type of of context when defined on the `ChartSeriesItemTooltip` is always of type `TooltipContext`.

The following example demonstrates how to customize the content by using a `render` prop.

{% meta height:465 %}
{% embed_file chart/tooltips/template/func/app.tsx preview %}
{% embed_file chart/tooltips/template/func/main.tsx %}
{% endmeta %}

## Shared Tooltip

### Default Content

The shared tooltip is displayed when the user hovers over a category and is used for Categorical charts. The shared tooltip shows a summary of all points in the hovered category. To enable the shared tooltip, use the `shared` option of the [`ChartTooltip`]({% slug api_charts_charttooltipprops %}#toc-shared) component.

The following example demonstrates how to enable the shared tooltip.

{% meta height:465 %}
{% embed_file chart/tooltips/sharedtooltip/func/app.tsx preview %}
{% embed_file chart/tooltips/sharedtooltip/func/main.tsx %}
{% endmeta %}

### Customizing Content

By default, the shared tooltip displays the category as a title and an item for each point in that category. To customize the content that is displayed for the points of a specific series, use the [`format`]({% slug api_charts_charttooltipprops %}#toc-format) option, or the template for the series. To customize the entire content, add a `render` prop to the [`ChartTooltip`]({% slug api_charts_charttooltip %}) component.

The callback function receives a single parameter of type [`SharedTooltipContext`]({% slug api_charts_sharedtooltipcontext %}).

{% meta height:465 %}
{% embed_file chart/tooltips/series-customization/func/app.tsx preview %}
{% embed_file chart/tooltips/series-customization/func/main.tsx %}
{% endmeta %}

## Crosshair Tooltip

The crosshair tooltips are displayed next to the axes crosshairs and show the current value of the crosshairs. To enable the crosshair tooltip, use the specific axis crosshair-tooltip component.

### Using in Categorical Charts

The following example demonstrates how to enable the crosshair tooltips for the Categorical charts.

{% meta height:465 %}
{% embed_file chart/tooltips/categorical-chart/func/app.tsx preview %}
{% embed_file chart/tooltips/categorical-chart/func/main.tsx %}
{% endmeta %}

### Using in Scatter Charts

The following example demonstrates how to enable the crosshair tooltips for the Scatter charts.

{% meta height:465 %}
{% embed_file chart/tooltips/scatter-chart/func/app.tsx preview %}
{% embed_file chart/tooltips/scatter-chart/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Axes]({% slug axes_chart_charts %})
-   [Chart Area]({% slug chartarea_chart_charts %})
-   [Crosshairs]({% slug crosshairs_chart_charts %})
-   [Error Bars]({% slug crosshairs_chart_charts %})
-   [Labels]({% slug labels_chart_charts %})
-   [Legend]({% slug legend_chart_charts %})
-   [Notes]({% slug notes_chart_charts %})
-   [Panes]({% slug panes_chart_charts %})
-   [Plot Area]({% slug plotarea_chart_charts %})
-   [Plot Bands]({% slug plotbands_chart_charts %})
-   [Selection]({% slug selection_chart_charts %})
-   [Series]({% slug series_chart_charts %})
-   [Title]({% slug title_chart_charts %})
-   [API Reference of the Chart]({% slug api_charts %})
