---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact TreeView in React projects.'
components: ["treeview"]
slug: rendering_treeview
position: 80
---

# Custom Rendering

The TreeView enables you to customize the content of its nodes.

To customize the appearance of the items, use the [`item`]({% slug api_treeview_treeviewprops %}#toc-item) property of the TreeView.

The following example demonstrates how to:

-   Add the [Avatar]({% slug overview_avatar %}) component to all TreeView nodes.
-   Add an [SvgIcon]({% slug overview_svgicon %}) after the text of selected nodes.

{% meta height:450 %}
{% embed_file custom/func/app.tsx preview %}
{% embed_file custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
