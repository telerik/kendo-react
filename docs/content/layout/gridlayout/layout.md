---
title: Layout
description: "Get started with the KendoReact GridLayout and set its row, columns, alignment and gaps."
components: ["gridlayout"]
slug: layout_gridlayout
position: 2
---

# Layout

The GridLayout component provides options for controlling its appearance.

To customize the layout of the GridLayout, use any of the following configuration options:

* [Rows and columns](#toc-rows-and-columns)
* [Gaps](#toc-gaps)
* [Horizontal alignment](#toc-horizontal-alignment)
* [Vertical alignment](#toc-vertical-alignment)

## Rows and columns

To configure the GridLayout, use the [`rows`]({% slug api_layout_gridlayoutprops %}#toc-rows) and [`cols`]({% slug api_layout_gridlayoutprops %}#toc-cols) properties.

{% meta height:650 %}
{% embed_file gridlayout/layout/rows-cols/func/app.tsx preview %}
{% embed_file gridlayout/layout/rows-cols/func/main.tsx %}
{% embed_file gridlayout/layout/rows-cols/func/styles.css %}
{% endmeta %}

## Gaps

To set the GridLayout gaps, use the [`gap`]({% slug api_layout_gridlayoutprops %}#toc-gap) property.

By default, the GridLayout does not apply a gap.

{% meta height:650 %}
{% embed_file gridlayout/layout/gaps/func/app.tsx preview %}
{% embed_file gridlayout/layout/gaps/func/main.tsx %}
{% embed_file gridlayout/layout/gaps/func/styles.css %}
{% endmeta %}

## Horizontal alignment

To set the GridLayout horizontal alignment, use the [`align`]({% slug api_layout_gridlayoutprops %}#toc-align) property. The `horizontal` key controls the alignment of the inner elements based on the X axis.

The available values are:
- `start`&mdash;Uses the start point of the container.
- `center`&mdash;Uses the central point of the container.
- `end`&mdash;Uses the end point of the container.
- (Default)`stretch`&mdash;Stretches the items to fill the width of the container.

{% meta height:620 %}
{% embed_file gridlayout/layout/horizontalalign/func/app.tsx preview %}
{% embed_file gridlayout/layout/horizontalalign/func/main.tsx %}
{% embed_file gridlayout/layout/horizontalalign/func/styles.css %}
{% endmeta %}

## Vertical alignment

To set the GridLayout horizontal alignment, use the [`align`]({% slug api_layout_gridlayoutprops %}#toc-align) property. The `vertical` key controls the alignment of the inner elements based on the Y axis.

The available values are:
- `top`&mdash;Uses the top point of the container.
- `middle`&mdash;Uses the middle point of the container.
- `bottom`&mdash;Uses the bottom point of the container.
- (Default)`stretch`&mdash;Stretches the items to fill the height of the container.

{% meta height:620 %}
{% embed_file gridlayout/layout/verticalalign/func/app.tsx preview %}
{% embed_file gridlayout/layout/verticalalign/func/main.tsx %}
{% embed_file gridlayout/layout/verticalalign/func/styles.css %}
{% endmeta %}

## Suggested Links

* [API Reference of the GridLayout]({% slug api_layout_gridlayout %})
* [API Reference of the GridLayoutProps]({% slug api_layout_gridlayoutprops %})
