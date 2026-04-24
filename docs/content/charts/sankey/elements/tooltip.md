---
title: Tooltip
description: 'Learn how to add a title to the KendoReact Sankey Chart and customize its appearance and behavior'
components: ["sankey"]
slug: tooltip_sankey
position: 10
---

# Tooltip

The Sankey Chart has built-in tooltips that are displayed for the nodes and links when hovering them. This does not require any configurations and is handled by the component.

{% meta height:320 %}
{% embed_file sankey/tooltip/default/app.tsx preview %}
{% embed_file sankey/tooltip/default/main.tsx %}
{% embed_file sankey/tooltip/default/data.ts %}
{% endmeta %}

## Customize Tooltip Behaviour

You can customize the tooltip behavior using the [`tooltip`]({% slug api_charts_sankeyprops %}#toc-tooltip) property. The following options are available:

-   `offset`&mdash;Set the distance between the pointer and the tooltip.
-   `visible`&mdash;Set whether the tooltip is displayed or not.
-   `followPointer`&mdash;Set whether the tooltip follows the pointer or not.
-   `delay`&mdash;Set the delay until the tooltip is displayed after hovering.

{% meta height:335 %}
{% embed_file sankey/tooltip/custom-behaviour/app.tsx preview %}
{% embed_file sankey/tooltip/custom-behaviour/main.tsx %}
{% embed_file sankey/tooltip/custom-behaviour/data.ts %}
{% endmeta %}

## Render a Custom Tooltip

The [`tooltip`]({% slug api_charts_sankeyprops %}#toc-tooltip) property also provides additional options that allow you to customize the rendering of the tooltip element:

-   `nodeComponent`&mdash;Customize the content of the node tooltip.
-   `linkComponent`&mdash;Customize the content of the link tooltip.

{% meta height:335 %}
{% embed_file sankey/tooltip/custom-render/app.tsx preview %}
{% embed_file sankey/tooltip/custom-render/main.tsx %}
{% embed_file sankey/tooltip/custom-render/data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
