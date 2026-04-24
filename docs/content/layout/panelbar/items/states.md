---
title: State
description: 'Manage the state of the KendoReact PanelBar items in React projects.'
components: ["panelbar"]
slug: statesitems_panelbar
position: 3
---

# State

You can manage the state of the PanelBar items and render them as selected, disabled, and expanded.

## Selected Items

You can set the selected state to a PanelBar item by using the [`selected`]({% slug api_layout_panelbaritemprops %}#toc-selected) property.

{% meta height:300 %}
{% embed_file panelbar/items/state/selected/func/app.tsx preview %}
{% embed_file panelbar/items/state/selected/func/main.tsx %}
{% endmeta %}

## Disabled Items

You can disable PanelBar items by setting the [`disabled`]({% slug api_layout_panelbaritemprops %}#toc-disabled) property to `true`.

{% meta height:300 %}
{% embed_file panelbar/items/state/disabled/func/app.tsx preview %}
{% embed_file panelbar/items/state/disabled/func/main.tsx %}
{% endmeta %}

## Expanded Items

By default, all PanelBar items are collapsed. To expand them, set the [`expanded`]({% slug api_layout_panelbaritemprops %}#toc-expanded) property to `true`.

{% meta height:450 %}
{% embed_file panelbar/items/state/expanded/func/app.tsx preview %}
{% embed_file panelbar/items/state/expanded/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
-   [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
