---
title: Rendering Modes
description: 'Learn the basic approaches to render a KendoReact Chart component in React projects.'
components: ["chart"]
slug: rendering_chart_charts
position: 5
---

# Rendering Modes

The Chart supports two mode for rendering its data&mdash;Canvas (bitmap) and SVG (vector graphics).

By default, the Chart delivers its data in SVG. You can navigate between the rendering modes and modify them by setting the [`renderAs`]({% slug api_charts_chartprops %}#toc-renderas) property.

{% meta height:610 %}
{% embed_file chart/rendering/func/app.tsx preview %}
{% embed_file chart/rendering/func/main.tsx %}
{% endmeta %}

## When to Use SVG

The default SVG rendering mode is recommended for general use.

Using vector graphics ensures that:

-   The browser zoom does not degrade the image.
-   The prints are crisp regardless of the resolution.

## When to Use Canvas

When performance is critical&mdash;when rendering large dashboards and frequently updated charts&mdash;it is recommended to use Canvas.

The browser does not have to maintain a live DOM tree for the Chart which results in:

-   Quicker screen updates.
-   Lower memory usage.

On the downside, rendering to a fixed resolution bitmap results in:

-   Blurry images on zoom.
-   Poor print quality.

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
-   [Glossary]({% slug glossary_charts %})
