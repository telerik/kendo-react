---
title: Data Binding
description: 'Bind the KendoReact FloatingActionButton to data in React projects.'
components: ["floatingactionbutton"]
slug: databinding_floatingactionbutton
position: 2
---

# Data Binding

The FloatingActionButton items provide configuration options for handling their properties and overriding their default rendering. To render the FloatingActionButton items, use the [`items`]({% slug api_buttons_floatingactionbuttonprops %}#toc-items) FloatingActionButton property.

Тhe component can extract the `svgIcon` and `text` values from the data items and thus set the svg icon and text of the items in the popup.

The following example demonstrates how to bind the FloatingActionButton to an array of objects:

{% meta height:250 %}
{% embed_file floatingactionbutton/items/data-binding/func/app.tsx preview %}
{% embed_file floatingactionbutton/items/data-binding/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbutton %})
-   [API Reference of the FloatingActionButtonProps]({% slug api_buttons_floatingactionbuttonprops %})
-   [API Reference of the FloatingActionButtonItem]({% slug api_buttons_floatingactionbuttonitem %})
-   [API Reference of the FloatingActionButtonItemProps]({% slug api_buttons_floatingactionbuttonitemprops %})
