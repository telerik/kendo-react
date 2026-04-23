---
title: Customization
description: 'Get started with the React ListBox by KendoReact and leant how to customize it.'
components: ["listbox"]
slug: customization_listbox
position: 60
---

# Customization

The KendoReact ListBox enables you to customize its items, toolbar action buttons and the toolbar position.

## Custom Items

Utilize the [item]({% slug api_listbox_listboxprops %}#toc-item) prop of the ListBox component that allows to fully customize the rendering of the items. All required information is available inside the `props` and can be applied to the custom `li` element.

The following example demonstrates how to customize the ListBox items.

{% meta height:500 %}
{% embed_file customization/func/app.tsx preview %}
{% embed_file customization/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
-   [API Reference of the ListBoxToolbar]({% slug api_listbox_listboxtoolbarprops %})
