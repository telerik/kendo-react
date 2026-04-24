---
title: Anchor Elements
description: "Filter the possible target elements and define the anchors which will render a KendoReact Tooltip."
components: ["tooltip"]
slug: filter_elements_tooltip
position: 3
---

# Anchor Elements

You can target specific anchor elements which will render a tooltip.

To determine which anchor elements will display a tooltip, use the [`filter`]({% slug api_tooltip_tooltipprops %}#toc-filter) callback function. `filter` accesses the target elements and enables you to filter the anchors based on various criteria such as titles, classes, id, and so on.

The following example demonstrates how to show a tooltip based on the element type.

{% meta height:150 %}
{% embed_file tooltip/filters/func/app.tsx preview %}
{% embed_file tooltip/filters/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Tooltip]({% slug api_tooltip %})
