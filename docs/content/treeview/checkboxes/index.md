---
title: Overview
description: 'Learn how to work with checkboxes inside the KendoReact TreeView in React projects.'
components: ["treeview"]
slug: checkboxes_treeview
position: 1
---

# Checkboxes

The TreeView allows the user to select nodes by using node checkboxes.

To render a checkbox next to each item, set the [`checkboxes`]({% slug api_treeview_treeviewprops %}#toc-checkboxes) property of the TreeView to `true`. A TreeView item is checked when the `checked` field of that item is set to `true`. Each TreeView item is in [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) when its `checkIndeterminate` field is set to `true`.

Instead of `checked` and `checkIndeterminate`, you can implement your own fields by setting the [`checkField`]({% slug api_treeview_treeviewprops %}#toc-checkfield) and [`checkIndeterminateField`]({% slug api_treeview_treeviewprops %}#toc-checkindeterminatefield) properties to the names of the custom fields.

## Functionality and Features

-   [Updating TreeView items through helper functions]({% slug check_helper_funcs_treeview %})
-   [Checking all TreeView items]({% slug check_all_items_treeview %})

## Suggested Links

-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
