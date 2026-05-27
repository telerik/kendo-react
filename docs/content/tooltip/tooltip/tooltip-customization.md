---
title: Customization
description: 'Customize KendoReact Tooltip behavior by attaching host-level handlers and rendering the Tooltip as a standalone instance.'
components: ['tooltip']
slug: customization_tooltip
position: 7
---

# Customization

You can attach Tooltip handlers to a host element and keep the `Tooltip` instance separate from its targets.
The host forwards events to a `TooltipHandle`, while the standalone `Tooltip` is configured with [`anchorElement="anchor"`](slug:api_tooltip_tooltipprops#anchorElement) and [`parentTitle`](slug:api_tooltip_tooltipprops#parentTitle).

For this setup to work as expected:

-   Attach `onPointerOver` and `onPointerLeave` to the container element.
-   Forward these events to `handleMouseOver` and `handleMouseLeave` through a `TooltipHandle` ref.
-   Keep focusable targets inside the container and add a `title` attribute to each target.

In the following demo the handlers are attached to the highlighted container.

{% meta height:140 %}
{% embed_file tooltip/customization/func/app.tsx preview %}
{% embed_file tooltip/customization/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Tooltip](slug:api_tooltip)
