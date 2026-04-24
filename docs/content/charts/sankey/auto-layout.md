---
title: Auto-Layout
description: 'Learn how to disable the automatic layout of the KendoReact Sankey Chart, which is active by default.'
components: ["sankey"]
slug: autolayout_sankey
position: 40
---

# Auto-Layout

By default, the KendoReact Sankey Chart rearranges the nodes and their corresponding links for better visual appearance and readability.

If you want to display the nodes and links in a specific order, you can disable this feature by setting the [`disableAutoLayout`]({% slug api_charts_sankeyprops %}#toc-disableAutoLayout) property to `true`. In this case, the order of the nodes and links will be determined based on their order in the data that is passed to the [`data`]({% slug api_charts_sankeyprops %}#toc-data) property.

The following example demonstrates how to disable the automatic layout feature by toggling the value of the `disableAutoLayout` property.

{% meta height:360 %}
{% embed_file sankey/auto-layout/app.tsx preview %}
{% embed_file sankey/auto-layout/main.tsx %}
{% embed_file sankey/auto-layout/data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
