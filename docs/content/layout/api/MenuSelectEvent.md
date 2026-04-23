---
title: MenuSelectEvent
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the MenuSelectEvent."
api_reference: true
type: inner_api
slug: api_layout_menuselectevent
---

# MenuSelectEvent
The arguments for the `select` event of the Menu. If the item has a URL and the event is prevented, navigation to the URL does not occur.


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


#### item


</td>
<td type class="table-cell-type">


<code>


[MenuItemModel]({% slug api_layout_menuitemmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The selected item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemId


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The id of selected item. The ids are hierarchical and zero-based. The first root item has a `0` id. If the first root item has children, the first child acquires a `0_0` id and the second acquires a `0_1` id.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React Synthetic Event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Menu]({% slug api_layout_menu %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
</tbody>
</table>



