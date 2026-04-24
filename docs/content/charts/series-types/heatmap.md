---
title: Heatmap
description: 'Basic usage of the KendoReact Heatmap charts in React projects.'
components: ["chart"]
subject: Heatmap Chart
slug: heatmap_seriestypes_charts
---

# Heatmap

Heatmap charts use colors to indicate the relative value of data points in two dimensions.

Heatmap charts, also known as "cluster heat map", are suitable for visualizing the magnitude of a value over two dimensions. The X and Y values are discrete and can be set in any order.

<CtaPanelOverview></CtaPanelOverview>

## Basic Usage

The following example demonstrates the Heatmap chart in action.

{% meta height:300 %}
{% embed_file series-types/heatmap/basic/func/app.tsx preview %}
{% embed_file series-types/heatmap/basic/func/main.tsx %}
{% endmeta %}

## Data Binding

You can bind the Heatmap series to an array that contains:

-   Arrays which represent `[X category, Y category, value]` tuples.
-   Objects which are also referred to as models.

To bind the Heatmap to objects, specify the field names for each dimension.

| Model binding | Data type             | Required | Description                          |
| ------------- | --------------------- | -------- | ------------------------------------ |
| `field`       | `number \| undefined` | Yes      | The value of the data point, if any. |
| `xField`      | `string \| number`    | Yes      | The X category of the data point.    |
| `yField`      | `string \| number`    | Yes      | The Y category of the data point.    |

The source objects are available as `dataItem` in templates and callback functions, for example in the tooltip template.

The following example demonstrates how to bind the Heatmap to objects with custom fields.

{% meta height:460 %}
{% embed_file series-types/heatmap/binding-objects/func/app.tsx preview %}
{% embed_file series-types/heatmap/binding-objects/func/main.tsx %}
{% endmeta %}

### Category Binding

The Heatmap binds the X and Y categories in the order they appear in the source data. To use a different order or bind categories before the data is available, set the `categories` array of each axis:

{% meta height:300 %}
{% embed_file series-types/heatmap/binding-categories/func/app.tsx preview %}
{% embed_file series-types/heatmap/binding-categories/func/main.tsx %}
{% endmeta %}

For more information on how to configure the data-binding mode, refer to the article on [binding the Kendo UI Chart to data]({% slug databinding_chart_charts %}).

## Color Scales

The built-in color scale of the Heatmap changes the lightness of the series depending on the point value. The point with the greatest value is shown in the main series color while lighter shades indicate lower values. The point with the minimal value is set to 5% lightness of the main series color.

To define a custom color scheme, pass a callback function as the [series color]({% slug api_charts_chartseriesitemprops %}#toc-color). The function receives a single argument with the following fields:

-   `value`&mdash;The point value object with `x`, `y`, and `value` fields.
-   `dataItem`&mdash;The original data item.
-   `min`&mdash;The minimum value for the series.
-   `max`&mdash;The maximum value for the series.
-   `series`&mdash;The series configuration object.

The function returns a color value as a string—either `#rrggbb`, `rgb(r, g, b, a)` &mdash;or a CSS color name.

The following example demonstrates how to use a color scheme from [d3-scale-chromatic](https://observablehq.com/@d3/color-schemes?collection=@d3/d3-scale-chromatic) to color the Heatmap:

{% meta height:460 %}
{% embed_file series-types/heatmap/custom-color-scale/func/app.tsx preview %}
{% embed_file series-types/heatmap/custom-color-scale/func/main.tsx %}
{% endmeta %}

## Marker Shapes

The Heatmap supports the following shapes for each point (marker):

-   `rect`&mdash;Rectangular markers.
-   `roundedRect`&mdash;Rounded rectangles with a configurable [border radius]({% slug api_charts_chartseriesmarkersprops %}#toc-borderradius).
-   `circle`&mdash;Circle markers.
-   `triangle`&mdash;Triangle markers.

{% meta height:600 %}
{% embed_file series-types/heatmap/marker-shapes/func/app.tsx preview %}
{% embed_file series-types/heatmap/marker-shapes/func/main.tsx %}
{% endmeta %}

Normally, the distance between the markers is fixed and the size of each marker is determined by the available space. To use a fixed marker size and variable distance instead, set the [marker size]({% slug api_charts_chartseriesmarkersprops %}#toc-size) to a value in pixels:

{% meta height:600 %}
{% embed_file series-types/heatmap/marker-size/func/app.tsx preview %}
{% embed_file series-types/heatmap/marker-size/func/main.tsx %}
{% endmeta %}

## Panning and Zooming

The following example demonstrates how to configure the [Panning and Zooming]({% slug panzoom_chart_charts %}) features for the Heatmap chart:

{% meta height:500 %}
{% embed_file series-types/heatmap/pan-zoom/func/app.tsx preview %}
{% embed_file series-types/heatmap/pan-zoom/func/main.tsx %}
{% endmeta %}

## Tooltips

The following example demonstrates how to configure [series tooltips]({% slug tooltips_chart_charts %}) for the Heatmap chart:

{% meta height:500 %}
{% embed_file series-types/heatmap/tooltips/func/app.tsx preview %}
{% embed_file series-types/heatmap/tooltips/func/main.tsx %}
{% endmeta %}

The following fields are available in the tooltip template:

-   `value`&mdash;The point value object with `x`, `y`, and `value` fields.
-   `dataItem`&mdash;The original data item.
-   `series`&mdash;The series configuration object.

## Crosshairs

The following example demonstrates how to configure [axis crosshairs]({% slug crosshairs_chart_charts %}) for the Heatmap chart:

{% meta height:500 %}
{% embed_file series-types/heatmap/crosshairs/func/app.tsx preview %}
{% embed_file series-types/heatmap/crosshairs/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
