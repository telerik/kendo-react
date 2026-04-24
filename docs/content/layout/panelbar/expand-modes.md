---
title: Expand Modes
description: "Use and configure the expand modes of the KendoReact PanelBar in React projects."
components: ["panelbar"]
slug: expandmodes_panelbar
position: 5
---

# Expand Modes

The PanelBar supports two different expand modes.

These modes are:

- `"single"`&mdash;Enables you to expand only one item at a time. If you expand an item, the previously expanded item is collapsed.
- `"multiple"`&mdash;This is the default expand mode of the PanelBar. It enables you to expand tow or more items at a time. Items can also be toggled.

To configure the expand modes, use the [`expandMode`]({% slug api_layout_panelbarprops %}#toc-expandmode) property of the PanelBar.



{% meta height:880 %}
{% embed_file panelbar/expand/func/app.tsx preview %}
{% embed_file panelbar/expand/func/main.tsx %}
{% embed_file panelbar/expand/func/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
