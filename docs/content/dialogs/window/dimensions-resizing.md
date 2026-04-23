---
title: Dimensions and Resizing
description: 'Set the dimensions of the KendoReact Window and manually resize the component by dragging its resize handles.'
components: ["window"]
slug: dimensionsresizing_window
position: 40
---

# Dimensions and Resizing

The Window enables you to [set its initial width and height](#toc-dimensions), and change its dimensions by dragging the [resize handles](#toc-resizing).

## Dimensions

To define the dimensions of the Window, use its [`initialWidth`]({% slug api_dialogs_windowprops %}#toc-initialwidth) and [`initialHeight`]({% slug api_dialogs_windowprops %}#toc-initialheight) properties.

{% meta height:650 %}
{% embed_file window/dimensions/func/app.tsx preview %}
{% embed_file window/dimensions/func/main.tsx %}
{% endmeta %}

## Resizing

By default, the Window enables you to resize it by dragging its edges (resize handles). To control this behavior, use the [`resizable`]({% slug api_dialogs_windowprops %}#toc-draggable) prop.

You can also control the minimum allowed dimensions of the Window by using the [`minWidth`]({% slug api_dialogs_windowprops %}#toc-minwidth) and [`minHeight`]({% slug api_dialogs_windowprops %}#toc-minheight) props.

{% meta height:650 %}
{% embed_file window/resizable/func/app.tsx preview %}
{% embed_file window/resizable/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Window]({% slug api_dialogs_window %})
