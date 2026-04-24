---
title: MenuCloseEvent
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the MenuCloseEvent."
api_reference: true
type: inner_api
slug: api_layout_menucloseevent
---

# MenuCloseEvent
The arguments for the `itemClose` event of the Menu.


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


The closed item.


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


The id of the item whose popup was closed. The ids are hierarchical and zero-based. The first root item has a `0` id. If the first root item has children, the first child acquires a `0_0` id and the second acquires a `0_1` id.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupCloseEvent?


</td>
<td type class="table-cell-type">


<code>


CloseEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The popup close event if the close was triggered by a popup closing .


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


The Menu component instance.


</td>
</tr>
</tbody>
</table>



