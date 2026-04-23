---
title: Scrolling to a Selected Item in KendoReact TreeView
description: Learn how to automatically scroll to a selected item in the TreeView component for React.
type: how-to
page_title: How to Scroll to a Selected Item in the React TreeView Component
slug: treeview-scroll-to-selected-item
tags: treeview, react, scroll, selected, item, processTreeViewItems
res_type: kb
ticketid: 1664468
components: ["treeview"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>9.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact TreeView</td>
        </tr>
    </tbody>
</table>

## Description

I want to automatically scroll to a selected item in the TreeView component for React. How can I achieve this functionality in the React TreeView component?

This KB article also answers the following questions:

-   How to ensure the selected item in a React TreeView is visible?
-   How to programmatically scroll to an item in React TreeView?
-   How can I focus on a selected item in TreeView using React?

## Solution

To scroll to a selected item in the [TreeView](https://www.telerik.com/kendo-react-ui/components/treeview/) for React, modify the `select` variable passed to the `processTreeViewItems` method. This approach updates the TreeView data state, ensuring the selected item is visible to the user.

Once the desired item is selected, you can call the [`scrollIntoView`](https://developer-mozilla-org.translate.goog/en-US/docs/Web/API/Element/scrollIntoView?_x_tr_sl=en&_x_tr_tl=bg&_x_tr_hl=bg&_x_tr_pto=sc) method of the selected tree node like demonstrated in the demo below:

{% meta height:660 %}
{% embed_file treeview/treeview-scroll-to-selected-item/app.jsx preview %}
{% embed_file treeview/treeview-scroll-to-selected-item/main.jsx %}
{% endmeta %}

## See Also

-   [TreeView Component Overview](https://www.telerik.com/kendo-react-ui/components/treeview/)
-   [processTreeViewItems Method API](https://www.telerik.com/kendo-react-ui/components/treeview/api/processTreeViewItems/)
-   [TreeView Item Selection in React](https://www.telerik.com/kendo-react-ui/components/treeview/selection/)
