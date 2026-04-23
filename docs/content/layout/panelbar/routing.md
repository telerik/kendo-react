---
title: Routing
description: "Use the KendoReact PanelBar with the React router."
components: ["panelbar"]
slug: routing_panelbar
position: 9
---

# Routing

You can use the PanelBar as a navigational component with any router library.

## Using Custom Properties to Set Route Paths

To use custom properties and set the route path:

1. Apply the `route` [custom]({% slug customproperty_panelbar %}) property to the `PanelBarItem`.
1. Set the property to the corresponding path.
1. After the user makes a selection, identify the selected PanelBarItem by its `route` property and redirect the source.



{% meta height:600 %}
{% embed_file routing/func/app.tsx preview %}
{% embed_file routing/func/main.tsx %}
{% embed_file routing/func/PanelBarNavContainer.tsx %}
{% embed_file routing/func/About.tsx %}
{% embed_file routing/func/Products.tsx %}
{% embed_file routing/func/Home.tsx %}
{% embed_file routing/func/Team.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
