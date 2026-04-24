---
title: Data Binding
description: 'Bind the KendoReact SplitButton to data in React projects.'
components: ["splitbutton"]
slug: binding_splitbutton
position: 5
---

# Data Binding

The SplitButton enables you to bind it to [array of strings](#toc-arrays-of-strings), [an array of objects](#toc-arrays-of-objects), or [`SplitButtonItem` child components](#toc-child-components).

## Arrays of Strings

The following example demonstrates how to bind the SplitButton to an array of strings.

{% meta height:170 %}
{% embed_file splitbutton/data-binding/strings/func/app.tsx preview %}
{% embed_file splitbutton/data-binding/strings/func/main.tsx %}
{% endmeta %}

## Arrays of Objects

When the SplitButton is bound to an array of objects, the component extracts the text value from the data items and, in this way, sets the text of the items in the popup. If the text field in the data objects is named `text`, the component gets its value automatically. However, if the name of the property in the data source is different&mdash;for example, `actionText`&mdash;you have to set it to the [`textField`]({% slug api_buttons_splitbuttonprops %}#toc-textfield) property of the SplitButton.

For a list of all fields the items model uses, refer to the article on the [`ButtonItem`]({% slug api_buttons_buttonitem %}) configuration.

{% meta height:210 %}
{% embed_file splitbutton/data-binding/objects/func/app.tsx preview %}
{% embed_file splitbutton/data-binding/objects/func/main.tsx %}
{% endmeta %}

## Child Components

The following example demonstrates how to use [`SplitButtonItem`]({% slug api_buttons_splitbuttonitemprops %}) child components to populate the popup items.

{% meta height:210 %}
{% embed_file splitbutton/data-binding/child/func/app.tsx preview %}
{% embed_file splitbutton/data-binding/child/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
-   [API Reference of the SplitButtonItem]({% slug api_buttons_splitbuttonitemprops %})
-   [API Reference of the ButtonItem Model]({% slug api_buttons_buttonitem %})
