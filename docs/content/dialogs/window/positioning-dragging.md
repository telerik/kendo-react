---
title: Positioning and Dragging
description: 'Set the position of the KendoReact Window and move it by dragging.'
components: ['window']
slug: positioningdragging_window
position: 70
---

# Positioning and Dragging

The Window enables you to [set its position](#toc-positioning) and [move it by dragging](#toc-dragging).

## Positioning

To specify the position of the Window, use its [`initialTop`]({% slug api_dialogs_windowprops %}#toc-initialtop) and [`initialLeft`]({% slug api_dialogs_windowprops %}#toc-initialleft) properties. If `initialTop` and `initialLeft` are not provided, the Window will be initially positioned at the center of the viewport.

{% meta height:650 %}
{% embed_file window/positioning/func/app.tsx preview %}
{% embed_file window/positioning/func/main.tsx %}
{% endmeta %}

## Dragging

By default, the Window enables you to move it by dragging. To control this behavior, use the [`draggable`]({% slug api_dialogs_windowprops %}#toc-draggable) property.

{% meta height:650 %}
{% embed_file window/dragging/func/app.tsx preview %}
{% embed_file window/dragging/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the Window]({% slug api_dialogs_windowprops %})
