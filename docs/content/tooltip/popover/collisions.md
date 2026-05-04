---
title: Collisions
description: 'Change the collision options of the KendoReact Popover.'
components: ['tooltip', 'popover']
slug: collisions_popover
position: 4
---

# Collisions

The Popover allows you to control the collision behavior when it's not fully visible. The available options for the [`collision`]({% slug api_tooltip_popoverprops %}#toc-collision) property are:

-   `fit`&mdash;Moves the Popover horizontally until it is fully displayed in the viewport.
-   `flip`&mdash;Flips the Popover position based on the origin and the position properties.
-   `none`&mdash;The Popover is rendered at its original position. Usable when the Popover is focused on open and the page is scrolled to it.

{% meta height:300 %}
{% embed_file popover/collisions/func/app.tsx preview %}
{% embed_file popover/collisions/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

*   [API Reference of the Tooltips]({% slug api_tooltip %})
