---
title: Events
description: 'Learn how to handle the KendoReact Sankey Chart events for hovering and clicking the nodes and links.'
components: ["sankey"]
slug: events_sankey
position: 50
---

# Events

The KendoReact Sankey diagram emits several events that you can handle. This allows you to tailor the Sankey's behavior to your specific requirements.

-   [`onNodeEnter`]({% slug api_charts_sankeyprops %}#toc-onnodeenter)&mdash;The event fires when the user enters a node.
-   [`onNodeLeave`]({% slug api_charts_sankeyprops %}#toc-onnodeleave)&mdash;The event fires when the user leaves a node.
-   [`onLinkEnter`]({% slug api_charts_sankeyprops %}#toc-onlinkenter)&mdash;The event fires when the user enters a link.
-   [`onLinkLeave`]({% slug api_charts_sankeyprops %}#toc-onlinkleave)&mdash;The event fires when the user leaves a link.
-   [`onNodeClick`]({% slug api_charts_sankeyprops %}#toc-onnodeclick)&mdash;The event fires when the user clicks a node.
-   [`onLinkClick`]({% slug api_charts_sankeyprops %}#toc-onlinkclick)&mdash;The event fires when the user clicks a link.

The following example demonstrates the above events. Test them by entering and leaving the nodes and links with your mouse or with a touch screen input.

{% meta height:335 %}
{% embed_file sankey/events/app.tsx preview %}
{% embed_file sankey/events/main.tsx %}
{% embed_file sankey/events/data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
