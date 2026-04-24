---
title: TileLayoutRepositionEvent
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the TileLayoutRepositionEvent."
api_reference: true
type: inner_api
slug: api_layout_tilelayoutrepositionevent
---

# TileLayoutRepositionEvent
The arguments for the `onReposition` TileLayout event.


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


[TileLayoutHandle]({% slug api_layout_tilelayouthandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


[TileStrictPosition]({% slug api_layout_tilestrictposition %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new positions of the TileLayout tiles.


</td>
</tr>
</tbody>
</table>



