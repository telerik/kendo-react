---
title: Toolbar
description: 'Get Started with the React ListBox Toolbar and learn how to use it'
components: ["listbox"]
slug: toolbar_listbox
position: 40
---

# Toolbar Configuration

The ListBox enables you to render and customize a toolbar.

To render the toolbar, pass the ListBoxToolbar component to the [toolbar]({% slug api_listbox_listboxprops %}#toc-toolbar) prop of the ListBox component. This will enable you to:

-   Render only specific [tools]({% slug api_listbox_listboxtoolbarprops %}#toc-tools) per your requirements.
-   Change the size of the buttons inside the ListBoxToolbar. For more information on how to change the size of the toolbar buttons, please refer to the [`Appearance`]({% slug appearance_listbox %}) article.

To render the ListBox without a toolbar, omit the `toolbar` prop.

The following example demonstrates how to render a specific subset of the available tools.

{% meta height:500 %}
{% embed_file toolbar/func/app.tsx preview %}
{% embed_file toolbar/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Get Started with the KendoReact ListBox component]({% slug get_started_listbox %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
