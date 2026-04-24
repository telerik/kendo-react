---
title: Layout
description: 'Get started with the KendoReact StackLayout and set its orientation, alignment and gaps.'
components: ["stacklayout"]
slug: layout_stacklayout
position: 2
---

# Layout

The StackLayout component provides options for controlling its appearance.

To customize the layout of the StackLayout, use any of the following configuration options:

-   [Orientation](#toc-orientation)
-   [Gaps](#toc-gaps)
-   [Horizontal alignment](#toc-horizontal-alignment)
-   [Vertical alignment](#toc-vertical-alignment)
-   [Nested StackLayouts](#toc-nested-stacklayouts)

## Orientation

To set the StackLayout orientation, use the [`orientation`]({% slug api_layout_stacklayoutprops %}#toc-orientation) property.

By default, `orientation` is set to `horizontal`.

{% meta height:620 %}
{% embed_file stacklayout/orientation/func/app.tsx preview %}
{% embed_file stacklayout/orientation/func/main.tsx %}
{% embed_file stacklayout/orientation/func/styles.css %}
{% endmeta %}

## Gaps

To set the StackLayout gaps, use the [`gap`]({% slug api_layout_stacklayoutprops %}#toc-gap) property.

By default, the StackLayout does not apply a gap.

{% meta height:620 %}
{% embed_file stacklayout/gaps/func/app.tsx preview %}
{% embed_file stacklayout/gaps/func/main.tsx %}
{% embed_file stacklayout/gaps/func/styles.css %}
{% endmeta %}

## Horizontal alignment

To set the StackLayout horizontal alignment, use the [`align`]({% slug api_layout_stacklayoutprops %}#toc-align) property. The `horizontal` key controls the alignment of the inner elements based on the X axis.

The available values are:

-   `start`&mdash;Uses the start point of the container.
-   `center`&mdash;Uses the central point of the container.
-   `end`&mdash;Uses the end point of the container.
-   (Default)`stretch`&mdash;Stretches the items to fill the width of the container.

{% meta height:620 %}
{% embed_file stacklayout/horizontalalign/func/app.tsx preview %}
{% embed_file stacklayout/horizontalalign/func/main.tsx %}
{% embed_file stacklayout/horizontalalign/func/styles.css %}
{% endmeta %}

## Vertical alignment

To set the StackLayout vertical alignment, use the [`align`]({% slug api_layout_stacklayoutprops %}#toc-align) property. The `vertical` key controls the alignment of the inner elements based on the Y axis.

The available values are:

-   `top`&mdash;Uses the top point of the container.
-   `middle`&mdash;Uses the middle point of the container.
-   `bottom`&mdash;Uses the bottom point of the container.
-   (Default)`stretch`&mdash;Stretches the items to fill the height of the container.

{% meta height:620 %}
{% embed_file stacklayout/verticalalign/func/app.tsx preview %}
{% embed_file stacklayout/verticalalign/func/main.tsx %}
{% embed_file stacklayout/verticalalign/func/styles.css %}
{% endmeta %}

## Nested StackLayouts

The component enables you to create a more complex layout that includes both horizontal and vertical items by nesting StackLayout components inside one another.

{% meta height:420 %}
{% embed_file stacklayout/nestedlayouts/func/app.tsx preview %}
{% embed_file stacklayout/nestedlayouts/func/main.tsx %}
{% embed_file stacklayout/nestedlayouts/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the StackLayout]({% slug api_layout_stacklayout %})
-   [API Reference of the StackLayoutProps]({% slug api_layout_stacklayoutprops %})
