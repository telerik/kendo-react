---
title: Expanding All Items
description: 'Learn how to work with TreeView data and expand all KendoReact TreeView nodes in React projects.'
components: ["treeview"]
slug: expand_all_treeview
position: 3
---

# Expanding All Items

While the TreeView does not provide a built-in feature for expanding and collapsing all its items at once, the component supports such an implementation.

To enable the expand-all mode for its items, set the `expanded` field of each TreeView node to `true`. To enable the collapse-all mode for its items, set the `expanded` field of each TreeView node to a falsy value. You can further handle the expanding and collapsing of all items depending on the approach you selected for [updating the expanded TreeView items]({% slug expansion_ways_treeview %}).

The following example demonstrates how to copy the data before each update of the `expanded` field.

{% meta height:360 %}
{% embed_file items-expanded-all/func/app.tsx preview %}
{% embed_file items-expanded-all/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
