---
title: Data Binding
description: 'Bind the KendoReact DropDownButton to data in React projects.'
components: ["dropdownbutton"]
slug: binding_dropdownbutton
position: 5
---

# Data Binding

The DropDownButton enables you to bind it to an [array of strings](#toc-arrays-of-strings), [an array of objects](#toc-arrays-of-objects), or [`DropDownButtonItem` child components](#toc-child-components).

## Arrays of Strings

The following example demonstrates how to bind the DropDownButton to an array of strings.

{% meta height:240 %}
{% embed_file dropdownbutton/data-binding/strings/func/app.tsx preview %}
{% embed_file dropdownbutton/data-binding/strings/func/main.tsx %}
{% endmeta %}

## Arrays of Objects

When the DropDownButton is bound to an array of objects, the component extracts the `text` value from the data items and, in this way, sets the text of the items in the popup. If the `text` field in the data objects is named `text`, the component gets its value automatically. However, if the name of the property in the data source is different&mdash;for example, `actionText`&mdash;you have to set it to the [`textField`]({% slug api_buttons_dropdownbuttonprops %}#toc-textfield) property of the DropDownButton.

For a list of all fields the items model uses, refer to the article on the [`ButtonItem`]({% slug api_buttons_buttonitem %}) configuration.

{% meta height:240 %}
{% embed_file dropdownbutton/data-binding/objects/func/app.tsx preview %}
{% embed_file dropdownbutton/data-binding/objects/func/main.tsx %}
{% endmeta %}

## Child Components

The following example demonstrates how to use the [`DropDownButtonItem`]({% slug api_buttons_dropdownbuttonitemprops %}) child components to populate the popup items.

{% meta height:240 %}
{% embed_file dropdownbutton/data-binding/child/func/app.tsx preview %}
{% embed_file dropdownbutton/data-binding/child/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
-   [API Reference of the DropDownButtonItem]({% slug api_buttons_dropdownbuttonitemprops %})
-   [API Reference of the ButtonItem Model]({% slug api_buttons_buttonitem %})
