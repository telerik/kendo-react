---
title: Data Binding
description: "Bind the KendoReact PanelBar to data in React projects."
components: ["panelbar"]
slug: databinding_panelbar
position: 2
---

# Data Binding

The [`PanelBarUtils`]({% slug api_layout_panelbarutils %}#toc-mapitemstocomponents) enables you to bind a data collection to the `PanelBarItem` components.

## Binding to Local Data

The following example demonstrates how to bind the PanelBar to local arrays.

{% meta height:300 %}
{% embed_file panelbar/binding/local/func/app.tsx preview %}
{% embed_file panelbar/binding/local/func/main.tsx %}
{% embed_file panelbar/binding/local/func/styles.css %}
{% endmeta %}


## Binding to Remote Data

The following example demonstrates how to bind the PanelBar to remote data.

{% meta height:450 %}
{% embed_file panelbar/binding/remote/func/app.tsx preview %}
{% embed_file panelbar/binding/remote/func/main.tsx %}
{% embed_file panelbar/binding/remote/func/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
