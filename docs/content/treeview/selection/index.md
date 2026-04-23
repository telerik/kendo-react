---
title: Overview
description: 'Learn how to select KendoReact TreeView items in React projects.'
components: ["treeview"]
slug: selection_treeview
position: 1
---

# Selection

A TreeView item is selected when its `selected` field is set to `true`.

Instead of `selected`, you can implement your own field by setting the [`selectField`]({% slug api_treeview_treeviewprops %}#toc-selectfield) property to the name of that custom field.

The TreeView supports both single and multiple selections. When the selection is `multiple`, set the [`aria-multiselectable`]({% slug api_treeview_treeviewprops %}#toc-aria-multiselectable) property to `true` for better [accessibility]({% slug accessibility_treeview %}).

## Functionality and Features

-   [Updating selected items]({% slug selection_ways_treeview %})
-   [Selecting all items]({% slug select_all_treeview %})

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
