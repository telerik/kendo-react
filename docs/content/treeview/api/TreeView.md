---
title: TreeView
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeView."
api_reference: true
type: inner_api
slug: api_treeview_treeview
---

# TreeView
Represents the [KendoReact TreeView component](https://www.telerik.com/kendo-react-ui/components/treeview).

```jsx
const data = [{
    text: 'Furniture', expanded: true, items: [
        { text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
}, {
    text: 'Decor', expanded: true, items: [
        { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}];
const App = () => {
    return <TreeView data={data} />;
}
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### guid


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the `guid` which is associated with the TreeView.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[TreeViewProps]({% slug api_treeview_treeviewprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the TreeView component.


</td>
</tr>
</tbody>
</table>



